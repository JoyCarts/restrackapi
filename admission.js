class Admission{
    constructor(ResID,
        AdmissionID,
        GuestInDate,
        TreatmentCenterListID,
        WasHomeless,
        WasJobless,
        WasDomesticallyAbused,
        HasMentalHealthChallanges,
        ProgramInDate,
        RoomNum,
        ReferredByContactID,
        EstMoveOutDate,
        IsRestricted,
        IsApprovedPartner,
        IsApprovedBabySitter,
        CanSelfSignout,
        AdmissionNotesID,
        CaseWorkerName,
        IntakeCoordinatorName,
        LastModified,
        ModifiedBy){ 

        this.ResID = ResID;
        this.AdmissionID = AdmissionID;
        this.GuestInDate = GuestInDate;
        this.TreatmentCenterListID = TreatmentCenterListID;
        this.WasHomeless = WasHomeless;
        this.WasJobless = WasJobless;
        this.WasDomesticallyAbused = WasDomesticallyAbused;
        this.HasMentalHealthChallanges = HasMentalHealthChallanges;
        this.ProgramInDate = ProgramInDate;
        this.RoomNum = RoomNum;
        this.ReferredByContactID = ReferredByContactID;
        this.EstMoveOutDate = EstMoveOutDate;
        this.IsRestricted = IsRestricted;
        this.IsApprovedPartner = IsApprovedPartner;
        this.IsApprovedBabySitter = IsApprovedBabySitter;
        this.CanSelfSignout = CanSelfSignout;
        this.AdmissionNotesID = AdmissionNotesID;
        this.CaseWorkerName = CaseWorkerName;
        this.IntakeCoordinatorName = IntakeCoordinatorName;
        this.LastModified = LastModified;
        this.ModifiedBy = ModifiedBy;

        }
}

module.exports = Admission;