# MEDICAL-DASH
**Register Users on to the block chain**
- Hospitals
- Doctors
- patients

**Collect Patient Data and save them in a medical file**
- Triage
- Diagnosis
- Lab Tests
- Prescription /Treatments

**Demonstrate the universal medical card (simulate using QR codes)**

## INSTALLATION
`git clone https://github.com/AwsmAstro/Medicalsystem.git`

user `npm install` to install the necessary dependencies.

`npm start` to run the project.

***Note*** : *You need to run dev environment as HTTPS to use the camera to read QR CODES*
*Instructions [here](https://web.dev/how-to-use-local-https/).*

## SETTING UP AND CONFIGURING LOCAL BLOCKCHAIN
Install `ganache-cli` globaly - [here](https://github.com/trufflesuite/ganache-cli).

run `ganache-cli`

*Print the public keys as QRCODES for use later*

use [remix ide](https://remix.ethereum.org/) to compile the code in *medicaldash.sol*. Copy the address and paste it as _address in *src/solFunctions/solFunctions.js*
