import { getPatientList, readPatient } from 'src/solFunctions/solFunctions';

export default function getPatientData() {
  const data = [];
  getPatientList().then((result) => {
    for (let i = 0; i < result.length; i++) {
      readPatient(result[i]).then((result1) => {
        console.log(result1);
        data.push(
          {
            id: result[i],
            name: result1.name,
            gender: result1.gender,
            location: result1.location,
            dateOfBirth: result1.dateOfBirth
          }
        );
        console.log(data);
      }).catch((e) => console.log(e));
    }
  }).catch((e1) => console.log(e1));
  return data;
}
