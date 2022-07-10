import { FORM_BUILDER_URL, SAVED_DATA_URL } from "./Config";

export const loadData = async () => {
  const res = await fetch(FORM_BUILDER_URL);
  
  return ConvertFieldsToForm(await res.json());
};

const ConvertFieldsToForm = (res) => {
  const fields = res;
  let array = [];
  const array2 = [];

  if (fields.length > 0) {
    fields.map((field, i) => {
      if (field.id % 2 && field.id > 1) {
        array.push(field);
        array2.push(array);
        array = [];
      } else {
        array.push(field);
      }
    });
  }

  return array2;
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
