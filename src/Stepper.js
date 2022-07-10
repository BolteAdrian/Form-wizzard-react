import { useState } from "react";
import { useEffect } from "react";
import Form from "./Form";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";

function Stepper({ fields = [], form_values }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState([]);

  const onSubmitValue = (value) => {
    const array = [...values];
    array[step] = value;
    setValues(array);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === fields.length) {
      console.log(values);
      form_values(values);
    }
  }, [values]);

  return (
    <div>
      {step < fields.length ? (
        <Form
          fields={fields[step]}
          step={step}
          submit={onSubmitValue}
          values={values[step]}
          prevStep={prevStep}
          lastItemIndex={fields.length}
        >
          {step === 0 ? (
            <>
              <br></br>
              &nbsp;
              <Button variant="outlined" type="submit">
                Next
              </Button>
            </>
          ) : step === fields.length - 1 ? (
            <>
              <br></br>
              &nbsp;
              <Button variant="outlined" type="submit" onClick={prevStep}>
                Previous
              </Button>
              &nbsp;
              <Button variant="contained" color="success" type="submit">
                Finish
              </Button>
            </>
          ) : (
            <>
              <br></br>
              &nbsp;
              <Button variant="outlined" type="submit" onClick={prevStep}>
                Previous
              </Button>
              &nbsp;
              <Button variant="outlined" type="submit">
                Next
              </Button>
            </>
          )}
        </Form>
      ) : step > 0 ? (
        <h1>Finished </h1>
      ) : (
        <>
          <h1>Loading</h1>
          <LoadingButton
            sx={{
              "&.MuiToggleButtonGroup-grouped": {
                borderBottom: "none",
              },
            }}
            loading
            variant="outlined"
          ></LoadingButton>
        </>
      )}
    </div>
  );
}

export default Stepper;
