/* eslint-disable */

let code = '';

export function setHospitalCode(_code) {
    code = _code;
    console.log(`setcode: ${code}`);
}

export function readHospitalCode() {
    console.log(`readcode: ${code}`);
    return code;
}