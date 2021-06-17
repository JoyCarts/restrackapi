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

async function getProfile(SSN) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('SSN', sql.Int, SSN)
            .query("SELECT ResID from ResProfile where SSN = @SSN");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function getListValues(id) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('id', sql.Int, id)
            .query("SELECT ListValue, ListValueID from Lists where ListNameID = @id");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function addProfile(profile) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('ResID', sql.Int, profile.ResID)
            .input('ResPictureKey', sql.NVarChar, profile.ResPictureKey)
            .input('SSN', sql.Int, profile.SSN)
            .input('MaxisID', sql.NVarChar, profile.MaxisID)
            .input('PSNumber', sql.NVarChar, profile.PSNumber)
            .input('IsActive', sql.NVarChar, profile.IsActive)
            .input('ResFirstName', sql.NVarChar, profile.ResFirstName)
            .input('ResMiddleName', sql.NVarChar, profile.ResMiddleName)
            .input('ResLastName', sql.NVarChar, profile.ResLastName)
            .input('ResEmailAddr', sql.NVarChar, profile.ResEmailAddr)
            .input('ResBirthDate', sql.NVarChar, profile.ResBirthDate)
            .input('ResPhoneNumber', sql.NVarChar, profile.ResPhoneNumber)
            .input('WhereRaisedCity', sql.NVarChar, profile.WhereRaisedCity)
            .input('WhereRaisedState', sql.NVarChar, profile.WhereRaisedState)
            .input('WhereRaisedCountry', sql.NVarChar, profile.WhereRaisedCountry)
            .input('ResAddress1', sql.NVarChar, profile.ResAddress1)
            .input('ResCity', sql.NVarChar, profile.ResCity)
            .input('ResCounty', sql.NVarChar, profile.ResCounty)
            .input('ResState', sql.NVarChar, profile.ResState)
            .input('ResZipCode', sql.NVarChar, profile.ResZipCode)
            .input('IsVeteran', sql.NVarChar, profile.IsVeteran)
            .input('RaceListID', sql.Int, profile.RaceListID)
            .input('MaritalStatusListID', sql.NVarChar, profile.MaritalStatusListID)
            .input('IsChurchAttender', sql.NVarChar, profile.IsChurchAttender)
            .input('AcceptedJesus', sql.NVarChar, profile.AcceptedJesus)
            .input('ChurchName', sql.NVarChar, profile.ChurchName)
            .input('ChurchLocation', sql.NVarChar, profile.ChurchLocation)
            .input('ChurchPhone', sql.NVarChar, profile.ChurchPhone)
            .input('RecentPhase', sql.NVarChar, profile.RecentPhase)
            .input('RecentAdmissionID', sql.NVarChar, profile.RecentAdmissionID)
            .input('LastEntryDate', sql.NVarChar, profile.LastEntryDate)
            .input('LastExitDate', sql.NVarChar, profile.LastExitDate)
            .input('LastModifiedDateTime', sql.NVarChar, profile.LastModifiedDateTime)
            .input('ModifiedBy', sql.NVarChar, profile.ModifiedBy)
            .query("INSERT INTO ResProfile (ResID,ResPictureKey,SSN,MaxisID,PSNumber,IsActive,ResFirstName,ResMiddleName,ResLastName,ResEmailAddr,ResBirthDate,ResPhoneNumber,WhereRaisedCity,WhereRaisedState,WhereRaisedCountry,ResAddress1,ResCity,ResCounty,ResState,ResZipCode,IsVeteran,RaceListID,MaritalStatusListID,IsChurchAttender,AcceptedJesus,ChurchName,ChurchLocation,ChurchPhone,RecentPhase,RecentAdmissionID,LastEntryDate,LastExitDate,LastModifiedDateTime,ModifiedBy) VALUES (@ResID,@ResPictureKey,@SSN,@MaxisID,@PSNumber,@IsActive,@ResFirstName,@ResMiddleName,@ResLastName,@ResEmailAddr,@ResBirthDate,@ResPhoneNumber,@WhereRaisedCity,@WhereRaisedState,@WhereRaisedCountry,@ResAddress1,@ResCity,@ResCounty,@ResState,@ResZipCode,@IsVeteran,@RaceListID,@MaritalStatusListID,@IsChurchAttender,@AcceptedJesus,@ChurchName,@ChurchLocation,@ChurchPhone,@RecentPhase,@RecentAdmissionID,@LastEntryDate,@LastExitDate,@LastModifiedDateTime,@ModifiedBy)");
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

async function addAdmission(admission) {

    try {
        let pool = await sql.connect(config);
        let insertAdmission = await pool.request()        
        .input('ResID', sql.Int, admission.ResID)
        .input('AdmissionID', sql.Int, admission.AdmissionID)
        .input('GuestInDate', sql.NVarChar, admission.GuestInDate)
        .input('TreatmentCenterListID', sql.NVarChar, admission.TreatmentCenterListID)
        .input('WasHomeless', sql.NVarChar, admission.WasHomeless)
        .input('WasJobless', sql.NVarChar, admission.WasJobless)
        .input('WasDomesticallyAbused', sql.NVarChar, admission.WasDomesticallyAbused)
        .input('HasMentalHealthChallanges', sql.NVarChar, admission.HasMentalHealthChallanges)
        .input('ProgramInDate', sql.NVarChar, admission.ProgramInDate)
        .input('RoomNum', sql.NVarChar, admission.RoomNum)
        .input('ReferredByContactID', sql.NVarChar, admission.ReferredByContactID)
        .input('EstMoveOutDate', sql.NVarChar, admission.EstMoveOutDate)
        .input('IsRestricted', sql.NVarChar, admission.IsRestricted)
        .input('IsApprovedPartner', sql.NVarChar, admission.IsApprovedPartner)
        .input('IsApprovedBabySitter', sql.NVarChar, admission.IsApprovedBabySitter)
        .input('CanSelfSignout', sql.NVarChar, admission.CanSelfSignout)
        .input('AdmissionNotesID', sql.NVarChar, admission.AdmissionNotesID)
        .input('CaseWorkerName', sql.NVarChar, admission.CaseWorkerName)
        .input('IntakeCoordinatorName', sql.NVarChar, admission.IntakeCoordinatorName)
        .input('LastModified', sql.NVarChar, admission.LastModified)
        .input('ModifiedBy', sql.NVarChar, admission.ModifiedBy)
        .query("INSERT INTO ResAdmission (ResID,AdmissionID,GuestInDate,TreatmentCenterListID,WasHomeless,WasJobless,WasDomesticallyAbused,HasMentalHealthChallanges,ProgramInDate,RoomNum,ReferredByContactID,EstMoveOutDate,IsRestricted,IsApprovedPartner,IsApprovedBabySitter,CanSelfSignout,AdmissionNotesID,CaseWorkerName,IntakeCoordinatorName,LastModified,ModifiedBy) VALUES (@ResID,@AdmissionID,@GuestInDate,@TreatmentCenterListID,@WasHomeless,@WasJobless,@WasDomesticallyAbused,@HasMentalHealthChallanges,@ProgramInDate,@RoomNum,@ReferredByContactID,@EstMoveOutDate,@IsRestricted,@IsApprovedPartner,@IsApprovedBabySitter,@CanSelfSignout,@AdmissionNotesID,@CaseWorkerName,@IntakeCoordinatorName,@LastModified,@ModifiedBy)");
    return insertAdmission.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {
    getOrders: getOrders,
    getOrder : getOrder,
    getProfile : getProfile,
    getListValues : getListValues,
    addProfile : addProfile,
    addAdmission : addAdmission
}