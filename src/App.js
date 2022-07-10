import "./App.css";
import Stepper from "./Stepper";
import { useState, useEffect, useRef } from "react";
import { loadData, SaveValuesToDb } from "./backend";

function App() {
  const [fields, setField] = useState([]);

  const loadFields = async () => {
    setField(await loadData());
  };

  useEffect(() => {
    loadFields();
  }, []);

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  const saveToDb = async (values) => {
    if (values.length > 0) {
      console.log("salvat");
      await SaveValuesToDb(values);
    }
  };

  return (
    <div className="App">
      <Stepper fields={fields} form_values={saveToDb}></Stepper>
    </div>
  );
}

export default App;
