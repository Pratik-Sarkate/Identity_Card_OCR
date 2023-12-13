const vision = require('@google-cloud/vision');
const moment = require('moment');
const API_KEY = require("../config/api_key.json");

const CREDENTIALS = API_KEY;

const CONFIG = {
    credentials: CREDENTIALS,
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectText = async (file_path) => {
    try {
        const [result] = await client.textDetection(file_path);
        let temp = result.fullTextAnnotation.text;

        // Removing the Thai characters
        const thaiCharacterRegex = /[\u0E00-\u0E7F]/g;
        temp = temp.replace(thaiCharacterRegex, '');

        let text = temp.split("\n");

        // Remove empty strings and strings without any alphabet or numbers
        text = text.filter(item => item.trim() !== '' && /[a-zA-Z0-9]/.test(item));

        let id_index = findIndexByText(text, "Thai National ID Card") + 1;
        let Identification_Number = text[id_index];

        let name_index = findIndexByText(text, "Name");
        let Name = removeSubstring(text[name_index], "Name ");

        let lastname_index = findIndexByText(text, "Last name");
        let Last_Name = removeSubstring(text[lastname_index], "Last name ");

        let issue_index = findIndexByText(text, "Date of Issue") - 1;
        let Date_of_Issue = getDate(text[issue_index]);

        let expiry_index = findIndexByText(text, "Date of Expiry") - 1;
        let Date_of_Expiry = getDate(text[expiry_index]);

        let dob_index = findIndexByText(text, "Date of Birth");
        let Date_of_Birth = getDate(removeSubstring(text[dob_index], "Date of Birth "));

        let final = {
            identification_number: Identification_Number,
            name: Name,
            last_name: Last_Name,
            date_of_birth: Date_of_Birth,
            date_of_issue: Date_of_Issue,
            date_of_expiry: Date_of_Expiry
        };

        console.log(final);
        return final;

    } catch (error) {
        console.error('Error during text detection:', error.message);
        return null; // Return null in case of an error
    }
};

function findIndexByText(array, targetText) {
    return array.findIndex(item => item.toLowerCase().includes(targetText.toLowerCase()));
}

function removeSubstring(inputString, substringToRemove) {
    return inputString.replace(substringToRemove, '');
}

function getDate(dateString) {
    let dateObject = moment(dateString, 'DD MMM. YYYY');
    return dateObject.format('YYYY-MM-DD');
}


module.exports = detectText;
