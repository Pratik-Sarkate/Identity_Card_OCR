const {OCR_Record_Repository} = require("../repository/index");

class OCRService{
    constructor(){
        this.ocrRepository = new OCR_Record_Repository();
    }

    async createRecord(name, lastname, identity_num, dob, issue_date, expiry_date){
        try {
            const ocr = await this.ocrRepository.createRecord(name, lastname, identity_num, dob, issue_date, expiry_date);
            return ocr;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw(error);
        }
    }

    async deleteRecord(identity_num){
        try {
            const response = await this.ocrRepository.deleteRecord(identity_num);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw(error);
        }
    }

    async updateRecord(name, lastname, identity_num, dob, issue_date, expiry_date){
        try {
            const ocr = await this.ocrRepository.updateRecord(name, lastname, identity_num, dob, issue_date, expiry_date);
            return ocr;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw(error);
        }
    }

    async getRecord(identity_num){
        try {
            const ocr = await this.ocrRepository.getRecord(identity_num);
            return ocr;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw(error);
        }
    }

}

module.exports = OCRService;