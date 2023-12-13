const {detectText} = require("../services/index");
const {OCRService} = require("../services/index");

const ocrService = new OCRService();

// use a POST, with url in the body -> process using Cloud Vision
const upload = async (req, res) => {
    try {

        const url = req.body.url;
        const result = await detectText(url);
        const ocr = await ocrService.createRecord(result.name, result.last_name, result.identification_number, result.date_of_birth, result.date_of_issue, result.date_of_expiry);

        return res.status(201).json({
            data: ocr,
            success: true,
            message: "Successfully processed and added a record",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in text detection service",
            err: error
        });
    }
};

module.exports = {
    upload
};