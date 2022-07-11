import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

export const FormButtons = ({ step, fieldsLength, prevStep }) => {
  
  if (fieldsLength === 0) {
    return (
      <div>
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
      </div>
    );
  }

  if (step === 0) {
    return (
      <div>
        <br></br>
        <Button variant="outlined" type="submit">
          Next
        </Button>
      </div>
    );
  } else if (step === fieldsLength - 1) {
    return (
      <div>
        <br></br>
        <Button variant="outlined" type="submit" onClick={prevStep}>
          Previous
        </Button>
        &nbsp;
        <Button variant="contained" color="success" type="submit">
          Finish
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button variant="outlined" type="submit" onClick={prevStep}>
          Previous
        </Button>
        &nbsp;
        <Button variant="outlined" type="submit">
          Next
        </Button>
      </div>
    );
  }
};
