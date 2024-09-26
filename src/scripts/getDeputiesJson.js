import convert from "convert-csv-to-json";
import fs from "node:fs";

const FIELDS = [
  "url",
  "name",
  "uri",
  "email",
  "img",
  "party",
  "official_charge",
];

function getDeputiesProcessedData() {
  const data = getData();
  replaceEmptyFields(data);
  getShortPartyNames(data);

  return filterFields(data, FIELDS);
}

function getData() {
  return convert
    .fieldDelimiter(",")
    .supportQuotedField(true)
    .formatValueByType()
    .getJsonFromCsv("./src/data/diputados.csv");
}

function replaceEmptyFields(data) {
  for (const obj of data)
    for (const prop in obj) if (obj[prop] === '"') obj[prop] = null;
}

function filterFields(data, fields) {
  return data.map((obj) => Object.fromEntries(fields.map((f) => [f, obj[f]])));
}

function getShortPartyNames(data) {
  for (const entry of data) {
    const name = entry.party;
    if (name.startsWith("MAS")) entry.party = "MAS";
    if (name.startsWith("CC")) entry.party = "CC";
  }
}

const json = JSON.stringify(getDeputiesProcessedData());
fs.writeFileSync("./src/data/deputies.json", json, "utf-8");
