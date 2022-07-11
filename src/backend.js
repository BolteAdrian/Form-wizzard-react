import { FORM_BUILDER_URL, SAVED_DATA_URL } from "./Config";

export const loadData = async () => {
  const res = await fetch(FORM_BUILDER_URL);

  return groupFields(await res.json());
};

const groupFields = (fields) => {
  const resultObject = [];

  fields.forEach((field) => {
    if (resultObject[field.step] === undefined) {
      resultObject[field.step] = [];
    }
    resultObject[field.step].push(field);
  });
  return resultObject;
};

export const SaveValuesToDb = async (value) => {
  const response = await fetch(SAVED_DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  return await response.json();
};
