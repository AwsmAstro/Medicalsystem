/* eslint-disable */
export function contractAbi(){
    return ABI;
}
let ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			}
		],
		"name": "appointDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symptoms",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_diagnosisDetails",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "createDiagnosis",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_licenceNumber",
				"type": "uint256"
			}
		],
		"name": "createDoctor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "licenceNumber",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "hospital",
						"type": "address"
					}
				],
				"internalType": "struct Doctor",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_drugName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_portions",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "createDrugPrescription",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_regNumber",
				"type": "uint256"
			}
		],
		"name": "createHospital",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "regNumber",
						"type": "uint256"
					}
				],
				"internalType": "struct Hospital",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lab",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_regNumber",
				"type": "uint256"
			}
		],
		"name": "createLab",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "regNumber",
						"type": "uint256"
					}
				],
				"internalType": "struct Lab",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_testName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_testDetails",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_testResults",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_comments",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "createLabTest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "createMedicalForm",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "enum Gender",
				"name": "_gender",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfBirth",
				"type": "string"
			}
		],
		"name": "createPatient",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "enum Gender",
						"name": "gender",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfBirth",
						"type": "string"
					}
				],
				"internalType": "struct Patient",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pharmacy",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_regNumber",
				"type": "uint256"
			}
		],
		"name": "createPharmacy",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "regNumber",
						"type": "uint256"
					}
				],
				"internalType": "struct Pharmacy",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_temperature",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_weight",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bloodPressure",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_heartrate",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "createTriage",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Doctors",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "licenceNumber",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "hospital",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "FormCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "getMedicalForms",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "hospital",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "doctor",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "temperature",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "weight",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bloodPressure",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "heartrate",
								"type": "string"
							}
						],
						"internalType": "struct Triage",
						"name": "triage",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "symptoms",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "diagnosisDetails",
								"type": "string"
							}
						],
						"internalType": "struct Diagnosis",
						"name": "diagnosis",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "testName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "testDetails",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "testResults",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "comments",
								"type": "string"
							}
						],
						"internalType": "struct LabTest[]",
						"name": "labTests",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "drugName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "portions",
								"type": "string"
							}
						],
						"internalType": "struct DrugPrescription[]",
						"name": "prescriptions",
						"type": "tuple[]"
					}
				],
				"internalType": "struct MedicalForm[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			}
		],
		"name": "getPatientList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Hospitals",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "regNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Labs",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "regNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "MedicalForms",
		"outputs": [
			{
				"internalType": "address",
				"name": "hospital",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "temperature",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "weight",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bloodPressure",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "heartrate",
						"type": "string"
					}
				],
				"internalType": "struct Triage",
				"name": "triage",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "symptoms",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "diagnosisDetails",
						"type": "string"
					}
				],
				"internalType": "struct Diagnosis",
				"name": "diagnosis",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PatientList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Patients",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "enum Gender",
				"name": "gender",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateOfBirth",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Pharmacies",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "regNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];