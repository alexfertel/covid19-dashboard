import React from 'react';

const createDiagnostic = (
  id,
  country,
  age,
  gender,
  arriveToCuba,
  medicalConsultation,
  detectionMunicipality,
  detectionProvince,
  dpaCodeDetectionMunicipality,
  dpaCodeDetectionProvince,
  contagionType,
  focalContact,
  isolationCenter,
  diagnosticCenter,
  info,
  visitedProvinces,
  dpaCodeVisitedProvinces
) => ({
  id,
  country,
  age,
  gender,
  arriveToCuba,
  medicalConsultation,
  detectionMunicipality,
  detectionProvince,
  dpaCodeDetectionMunicipality,
  dpaCodeDetectionProvince,
  contagionType,
  focalContact,
  isolationCenter,
  diagnosticCenter,
  info,
  visitedProvinces,
  dpaCodeVisitedProvinces,
});

const parseDiagnosedArray = diagnosed =>
  diagnosed.map(d =>
    createDiagnostic(
      d.id,
      d.pais,
      d.edad,
      d.sexo === 'hombre' ? 'male' : 'female',
      d.arribo_a_cuba_foco,
      d.consulta_medico,
      d.municipio_detección,
      d.provincia_detección,
      d.dpacode_municipio_deteccion,
      d.dpacode_provincia_deteccion,
      d.contagio,
      d.contacto_focal,
      d.centro_aislamiento,
      d.centro_diagnostico,
      d.info,
      d.provincias_visitadas,
      d.dpacode_provincias_visitadas
    )
  );

const createDay = (day, diagnosed = [], date, riskSubjects = 0, evacuated = 0, deceased = 0, recovered = 0) => ({
  day,
  diagnosed: diagnosed ? parseDiagnosedArray(diagnosed) : [],
  evacuated,
  deceased,
  recovered,
  date,
  riskSubjects,
});

const createCase = (id, day) => ({
  id,
  day: createDay(
    id,
    day.diagnosticados,
    day.fecha,
    day.sujetos_riesgo,
    day.evacuados_numero,
    day.muertes_numero,
    day.recuperados_numero
  ),
});

const getCases = (apiData = {}) => Object.keys(apiData.dias).map(key => createCase(key, apiData.dias[key]));


export const getData = async () => {
  const response = await fetch(`https://covid19cubadata.github.io/data/covid19-cuba.json?_=1589141816122`)
  const data = await response.json();  
  return { cases: getCases(data.casos) }
}

export default React.createContext({ cases: [] });