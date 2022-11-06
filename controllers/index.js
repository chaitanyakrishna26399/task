let pool = require('../database')
class options {
    static async addData(req, res) {
        try {

            let inputData = req.body
            await pool.query(`insert into product_details (region,item,sku_in_kgs,pellect_size,packing,pallet_price,mash_price)
            values($1,$2,$3,$4,$5,$6,$7)`,
                [inputData.region, inputData.item, inputData.sku_in_kgs, inputData.pellect_size, inputData.packing, inputData.pallet_price, inputData.mash_price], (error, results) => {
                    if (error) {
                        // query error.
                        res.status(502).json({
                            status: false,
                            message: error.message
                        })
                    } else {
                        console.log(results.rowCount)
                        // query response goes here.
                        if (results.rowCount >= 1) {
                            res.status(200).json({
                                status: true,
                                message: `Data added successfully.`
                            })
                        } else {
                            res.status(200).json({
                                status: false,
                                message: `Some thing went wrong.`
                            })
                        }
                    }
                })

        }
        catch (err) {
            //  server error.
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    }


    static async itemsList(req,res){
        try{
            await pool.query('select * from items',(error,results)=>{
                if(error){
                    // query error.
                    res.status(502).json({
                        status: false,
                        message: error.message
                    })
                }else {
                    // query response goes here.
                    if (results.rowCount >= 1) {
                        res.status(200).json({
                            status: true,
                            Data: results.rows
                        })
                    } else {
                        res.status(200).json({
                            status: false,
                            message: `Some thing went wrong.`
                        })
                    }
                }
            })

        }
        catch (err) {
            //  server error.
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    }

    static async select_by_item(req,res){
        try{
            let inputData=req.body
            await pool.query(`select t2.region_name,t3.item_name,t1.sku_in_kgs,t1.packing,t1.pallet_price,t1.mash_price 
            from product_details t1
             inner join region t2 on t1.region = t2.region_id 
             inner join items t3 on t1.item = t3.item_id 
             where t1.item=${inputData.item}
             order by t1.region,t1.item`,(error,results)=>{
                if(error){
                    // query error.
                    res.status(502).json({
                        status: false,
                        message: error.message
                    })
                }else {
                    // query response goes here.
                    if (results.rowCount >= 1) {
                        res.status(200).json({
                            status: true,
                            Data: results.rows
                        })
                    } else {
                        res.status(200).json({
                            status: false,
                            message: `Some thing went wrong.`
                        })
                    }
                }
            })

        }
        catch (err) {
            //  server error.
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    }

    static async GetData(req,res){
        try{
            await pool.query(`select t2.region_name,t3.item_name,t1.sku_in_kgs,t1.packing,t1.pallet_price,t1.mash_price
            from product_details t1
            inner join region t2 on t1.region = t2.region_id
            inner join items t3 on t1.item = t3.item_id
            order by t1.region,
            t1.item`,(error,results)=>{
                if(error){
                    // query error.
                    res.status(502).json({
                        status: false,
                        message: error.message
                    })
                }else {
                    // query response goes here.
                    if (results.rowCount >= 1) {
                        res.status(200).json({
                            status: true,
                            Data: results.rows
                        })
                    } else {
                        res.status(200).json({
                            status: false,
                            message: `Some thing went wrong.`
                        })
                    }
                }

            })
        }
        catch (err) {
            //  server error.
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    }

}
module.exports = options