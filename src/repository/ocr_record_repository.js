const {OCR_Record} = require('../models/index');

class OCR_Record_Repository {

    async createRecord(name, lastname, identity_num, dob, issue_date, expiry_date){
        try {
            const ocr_record = await OCR_Record.create(
                {
                    identification_number:identity_num,
                    name: name,
                    last_name: lastname,
                    date_of_birth: new Date(dob),
                    date_of_issue: new Date(issue_date),
                    date_of_expiry: new Date(expiry_date),
                });
            console.log(name, lastname, identity_num, dob, issue_date, expiry_date);
            console.log(new Date(dob));
            console.log(ocr_record);
            return ocr_record;
        } catch (error) {
            console.log("Something went wrong in repository layer in creating record");
            throw {error};
        }
    }

    async deleteRecord(identity_num){
        try {
            await OCR_Record.destroy({
                where:{
                    identification_number: identity_num
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer in deleting record");
            throw {error};
        }
    }

    async updateRecord(name, lastname, identity_num, dob, issue_date, expiry_date){
        try {
            const ocr_record = await OCR_Record.update({
                name: name,
                last_name: lastname,
                date_of_birth: new Date(dob),
                date_of_issue: new Date(issue_date),
                date_of_expiry: new Date(expiry_date),
                updatedAt: new Date()
            },{
                where: {
                    identification_number: identity_num
                }
            });
            console.log(ocr_record);
            return ocr_record;
            
        } catch (error) {
            console.log("Something went wrong in repository layer in updateRecord");
            throw {error};
        }
    }

    async getRecord(identity_num){
        try {
            const ocr_record = await OCR_Record.findAll({
                where: {
                  identification_number: identity_num,
                },
            });
            return ocr_record;
        } catch (error) {
            console.log("Something went wrong in repository layer in getRecord");
            throw {error};
        }
    }
}

module.exports = OCR_Record_Repository;