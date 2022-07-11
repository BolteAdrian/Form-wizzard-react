import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./Form.css";

function Form({ fields, step, submit, children }) {
  const [formFields, setFormFields] = useState({});

  const onInputValueUpdated = (fieldname, value) => {
    setFormFields({
      ...formFields,
      [fieldname]: value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    submit(formFields);
    setFormFields();
  };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  const HiddenInput = styled("input")({
    display: "none",
  });

  return (
    <div>
      <h1>Formular</h1>
      <h2>Step: {step + 1}</h2>
      <form onSubmit={handlerSubmit}>
        {fields &&
          fields.length > 0 &&
          fields.map((field) => (
            <div key={field.name}>
              {field.type === "file" ? (
                <label htmlFor="contained-button-file">
                  <br></br>
                  <br></br>
                  <HiddenInput
                    {...field}
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    required={field.required}
                    onChange={(event) =>
                      onInputValueUpdated(field.name, event.target.value)
                    }
                  />
                  <Button
                    startIcon={<FileUploadIcon />}
                    component="span"
                  ></Button>
                </label>
              ) : (
                <>
                  <TextField
                    {...field}
                    inputProps={{ pattern: field.pattern }}
                    required={field.required}
                    helperText={field.errormessage}
                    variant="standard"
                    onChange={(event) =>
                      onInputValueUpdated(field.name, event.target.value)
                    }
                  />
                </>
              )}
            </div>
          ))}
        {children}
      </form>
    </div>
  );
}

export default Form;
