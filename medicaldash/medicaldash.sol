// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;


enum Gender { Male, Female, Other }
struct Patient {
    string name;
    Gender gender;
    string location;
    string dateOfBirth;
}

struct Doctor {
    string name;
    uint licenceNumber;
    address hospital;
}

struct Hospital {
    string name;
    uint regNumber;
}

struct Pharmacy {
    string name;
    uint regNumber;
}

struct Lab {
    string name;
    uint regNumber;
}

struct Triage {
    string temperature;
    string weight;
    string bloodPressure;
    string heartrate;
}

struct LabTest {
    string testName;
    string testDetails;
    string testResults;
    string comments;
}

struct Diagnosis {
    string symptoms;
    string diagnosisDetails;
}

struct DrugPrescription {
    string drugName;
    string portions;
}

struct MedicalForm {
    address hospital;
    address doctor;
    Triage triage;
    Diagnosis diagnosis;
    LabTest[] labTests;
    DrugPrescription[] prescriptions;
}

contract HealthData {
    
    mapping(address => Hospital) public Hospitals;
    mapping(address => Pharmacy) public Pharmacies;
    mapping(address => Lab) public Labs;
    mapping(address => Patient) public Patients;
    mapping(address => mapping(address => MedicalForm[])) public MedicalForms;
    mapping(address => uint) public FormCount;
    mapping(address => Doctor) public Doctors;
    address public owner;
    
    constructor() {
        owner = msg.sender;
    }
    
    //Form count initialization modifier
    modifier setFormCount(address _patient) {
        if(FormCount[_patient] == 0){
            FormCount[_patient] = 1;
        }else{
            FormCount[_patient]++;
        }
        _;
    }
    
    //Valid doctor modifier
    modifier isValidDoctor(address _hospital){
        require(Doctors[msg.sender].hospital == _hospital, "Invalid Doctor!");
        _;
    }
    
    //is hosptal modifier
    modifier isHospital() {
        require(Hospitals[msg.sender].regNumber != 0, "Invalid Hospiital!");
        _;
    }
    
    modifier hospitalExists(address _hospital) {
        require(Hospitals[_hospital].regNumber != 0, "Invalid Hospital!");
        _;
    }
    
    //is Patient modifier
    modifier isPatient(address _patient){
        require(keccak256(bytes(Patients[_patient].name)) != keccak256(bytes("")), "Invalid Patient!");
        _;
    }
    
    //Is Owner modifier
    modifier isOwner(){
        require(msg.sender == owner, "UnAuthorized!! Not owner.");
        _;
    }
    
    //Create Patient
    function createPatient(
    address _patient,
    string memory _name,
    Gender _gender,
    string memory _location,
    string memory _dateOfBirth
    )
    public payable isOwner
    returns(Patient memory){
        Patient memory patient;
        patient.name = _name;
        patient.gender = _gender;
        patient.location = _location;
        patient.dateOfBirth = _dateOfBirth;
        
        Patients[_patient] = patient;
        return patient;
    }
    
    
    //Create Lab
    function createLab(
    address _lab,
    string memory _name,
    uint _regNumber
    )
    public payable isOwner
    returns(Lab memory){
        Lab memory lab;
        lab.name = _name;
        lab.regNumber = _regNumber;
        
        Labs[_lab] = lab;
        
        return lab;
    }
    
    
    //Create Pharmacy
    function createPharmacy(
    address _pharmacy,
    string memory _name,
    uint _regNumber
    )
    public payable isOwner
    returns(Pharmacy memory){
        Pharmacy memory pharmacy;
        pharmacy.name = _name;
        pharmacy.regNumber = _regNumber;
        
        Pharmacies[_pharmacy] = pharmacy;
        
        return pharmacy;
    }
    
    
    //Create Hospital
    function createHospital(
    address _hospital,
    string memory _name,
    uint _regNumber
    )
    public payable isOwner
    returns(Hospital memory){
        Hospital memory hospital;
        hospital.name = _name;
        hospital.regNumber = _regNumber;
        
        Hospitals[_hospital] = hospital;
        
        return hospital;
    }
    
    
    //Create Doctor
    function createDoctor(
    address _doctor,
    string memory _name,
    uint _licenceNumber
    )
    public payable isOwner
    returns(Doctor memory){
        Doctor memory doctor;
        doctor.name = _name;
        doctor.licenceNumber = _licenceNumber;
        
        Doctors[_doctor] = doctor;
        
        return doctor;
    }
    
    
    //Appoint Doctor
    function appointDoctor(
    address _doctor
    )
    public isHospital {
        Doctors[_doctor].hospital = msg.sender;
    }
    
    
    //Create Traige
    function createTriage(
    string memory _temperature,
    string memory _weight,
    string memory _bloodPressure,
    string memory _heartrate,
    address _hospital,
    address _patient
    )
    public payable isValidDoctor(_hospital) {
        Triage memory triage;
        triage.temperature = _temperature;
        triage.weight = _weight;
        triage.bloodPressure = _bloodPressure;
        triage.heartrate = _heartrate;
        
        MedicalForm storage medicalForm = MedicalForms[_hospital][_patient][FormCount[_patient] - 1];
        medicalForm.triage = triage;
    }
    
    
    //Create LabTest
    function createLabTest(
    string memory _testName,
    string memory _testDetails,
    string memory _testResults,
    string memory _comments,
    address _hospital,
    address _patient
    )
    public payable isValidDoctor(_hospital) {
        LabTest memory labTest;
        labTest.testName = _testName;
        labTest.testDetails = _testDetails;
        labTest.testResults = _testResults;
        labTest.comments = _comments;
        
        MedicalForm storage medicalForm = MedicalForms[_hospital][_patient][FormCount[_patient] - 1];
        medicalForm.labTests.push(labTest);
    }
    
    
    //Create Diagnosis
    function createDiagnosis(
    string memory _symptoms,
    string memory _diagnosisDetails,
    address _hospital,
    address _patient
    )
    public payable isValidDoctor(_hospital) {
        Diagnosis memory diagnosis;
        diagnosis.symptoms = _symptoms;
        diagnosis.diagnosisDetails = _diagnosisDetails;
        
        MedicalForm storage medicalForm = MedicalForms[_hospital][_patient][FormCount[_patient] - 1];
        medicalForm.diagnosis = diagnosis;
    }
    
    
    //Create Prescription.
    function createDrugPrescription(
    string memory _drugName,
    string memory _portions,
    address _hospital,
    address _patient
    )
    public payable isValidDoctor(_hospital) {
        DrugPrescription memory prescription;
        prescription.drugName = _drugName;
        prescription.portions = _portions;
        
        MedicalForm storage medicalForm = MedicalForms[_hospital][_patient][FormCount[_patient] - 1];
        medicalForm.prescriptions.push(prescription);
    }
    
    //Create Medical Form
    function createMedicalForm(
    address _hospital,
    address _doctor,
    address _patient
    )
    public setFormCount(_patient) isValidDoctor(_hospital) {
        MedicalForm storage medicalForm = MedicalForms[_hospital][_patient].push();
        medicalForm.hospital = _hospital;
        medicalForm.doctor = _doctor;
    }
    
    //Get Patient medicalForms
    function getMedicalForms(address _hospital, address _patient) public view returns(MedicalForm[] memory){
        return MedicalForms[_hospital][_patient];
    }
}