var config = require('./dbconfig');
const sql = require('mssql');


async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from ResProfile");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from ResProfile where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('ResID', sql.Int, order.ResID)
            .input('ResPictureKey', sql.NVarChar, order.ResPictureKey)
            .input('SSN', sql.Int, order.SSN)
            .input('MaxisID', sql.NVarChar, order.MaxisID)
            .input('PSNumber', sql.NVarChar, order.PSNumber)
            .input('ResFirstName', sql.NVarChar, order.ResFirstName)
            .query("INSERT INTO ResProfile (ResID, ResPictureKey, SSN, MaxisID, PSNumber, ResFirstName) VALUES (@ResID, @ResPictureKey, @SSN, @MaxisID, @PSNumber, @ResFirstName)");
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}






module.exports = {
    getOrders: getOrders,
    getOrder : getOrder,
    addOrder : addOrder
}