// import { getMedicalForms } from 'src/solFunctions/solFunctions';

let code = '';
let name = '';

export function setForm(_code) {
  code = _code;
}

export function loadForm() {
  return code;
}

export function setName(_name) {
  name = _name;
}

export function loadName() {
  console.log(name);
  return name;
}
