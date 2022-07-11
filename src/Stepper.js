import { useState } from "react";
import { useEffect } from "react";
import Form from "./Form";
import { FormButtons } from "./FormButtons";

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
  }, [values,fields.length,step,form_values]);

  return (

    <div>
      {step < fields.length || fields.length===0 ? (
        <Form
          fields={fields[step]}
          step={step}
          submit={onSubmitValue}
          values={values[step]}
        >
          <FormButtons step={step} fieldsLength={fields.length} prevStep={prevStep}/>
        </Form>
      ) : (<h1>Finished</h1>) }
    </div>
  );
}

export default Stepper;