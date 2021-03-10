/* eslint-disable */
import { contractAbi } from './contractABI';
import { readHospitalCode } from '../components/ReadHospitalQR';
import { result } from 'lodash';
const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:8545');

const _address = '0x7B03678A5657b4D0Dfea6E68BF512737c05CDC2A';

const contract = new web3.eth.Contract(contractAbi(), _address);

export function createHospital(owner, address, name, regNo) {
  contract.methods.createHospital(address, name, regNo).send({ from: owner, gas: 200000 }, (err, txHash) => {
    if (err) {
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function createDoctor(owner, address, name, licenceNumber){
  contract.methods.createDoctor(address, name, licenceNumber).send({ from: owner, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function appointDoctor(address){
  let hospital = readHospitalCode();
  contract.methods.appointDoctor(address).send({ from: hospital, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function createPatient(owner, address, name, gender, location, dateofbirth){
  contract.methods.createPatient(address, name, gender, location, dateofbirth).send({ from: owner, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
      console.log(dateofbirth);
    } else {
      console.log(txHash);
    }
  });
}

export function createTriage(doctor, patient, temperature, weight, bloodPressure, heartRate){
  let hospital = readHospitalCode();
  contract.methods.createTriage(temperature, weight, bloodPressure, heartRate, hospital, patient)
  .send({ from: doctor, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function createDiagnosis(symptoms, diagnosisDetails, doctor, patient){
  let hospital = readHospitalCode();
  contract.methods.createDiagnosis(symptoms, diagnosisDetails, hospital, patient)
  .send({ from: doctor, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function createLabTest(testName, testDetails, testResults,comments, doctor, patient){
  let hospital = readHospitalCode();
  contract.methods.createLabTest(testName, testDetails, testResults, comments, hospital, patient)
  .send({ from: doctor, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function createDrugPrescription(drugName, portions, doctor, patient){
  let hospital = readHospitalCode();
  contract.methods.createDrugPrescription(drugName, portions, hospital, patient).send({ from: doctor, gas: 200000 }, (err, txHash) => {
    if(err){
      console.log(err);
    } else {
      console.log(txHash);
    }
  });
}

export function getMedicalForms(patient){
  let hospital = readHospitalCode();
  contract.methods.getMedicalForms(hospital, patient).call({ from: hospital, gas:  200000 }, (err, result) => {
    if(err){
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

export function readPatient(address) {
  let data;
  contract.methods.Patients(address).call({ from: hospital, gas: 200000 }).then((err, result) => {
    if(err){
      console.log(err);
    }else{
      data = result;
    }
    return data;
  })
}

export function readHospital(address) {
  return new Promise((resolve, reject) => {
    contract.methods.Hospitals(address).call({ from: address, gas: 200000 }, (err, result) => {
      if(err) {
        reject(err);
      }else {
        resolve(result);
      }
    });
  });
}