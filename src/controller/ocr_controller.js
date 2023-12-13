const {OCRService} = require("../services/index");

const ocrService = new OCRService();

// use a POST // already handled in upload controller
const create = async (req, res) => {
    try {

        // const ocr = await ocrService.createRecord(result.name, result.last_name, result.identification_number, result.date_of_birth, result.date_of_issue, result.date_of_expiry);
        // const ocr = await ocrService.createRecord(req.body);
        
        return res.status(201).json({
            data: ocr,
            success: true,
            message: "Successfully added a record",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to add the record",
            err: error
        });
    }
};

// use DELETE  -> /:id

const destroy = async (req, res) => {
    try {
        const response = await ocrService.deleteRecord(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a record",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a record",
            err: error
        });
    }
};

// GET -> /:id
const get = async (req, res) => {
    try {
        const response = await ocrService.getRecord(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a record",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a record",
            err: error
        });
    }
};


//PATCH -> /city/:id ->req.body
const update = async (req, res) => {
    try {
        const response = await ocrService.updateRecord(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a record",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a record",
            err: error
        });
    }
};


module.exports = {
    create,
    destroy,
    get,
    update,
};