// require joi module.
const joi = require('joi');
const options = require('../controllers');

class validations {
    // function for verifyMobile of user.
    static async addData(req, res, next) {

        // validate the input body value. 
        const validation = joi.object({
            region: joi.number().integer().min(1).max(3).required(),
            item: joi.number().integer().min(1).max(4).required(),
            sku_in_kgs:joi.number().integer().required().valid(25,50,100,125,150),
            pellect_size:joi.number().integer().required(),
            packing:joi.string().required(),
            pallet_price:joi.number().integer().required(),
            mash_price:joi.number().integer()
        })



        //  below options are used to remove the qoutes in the validation response.
        const options = {
            errors: {
                wrap: {
                    label: ''
                }
            }
        };


        const err = validation.validate(req.body, options);
        if (err.error) {
            //return error message.
            res.status(200).json({
                status: true,
                message:`${err.error.details[0].message}`,

            });
        } else {
            //moves to next method.
            next();
        }
    }
}

module.exports=validations