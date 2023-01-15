import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Search.module.css";
import Button from "../UI/Button/Button";


type State = {
  value: string,
  isValid: boolean | null
}

type Action = {
  type: string,
  value: string
}

const mprnInputReducer = (state: State, action: Action): State => {
  console.log("emailReducer runs");
  if (action.type === "MPRN_INPUT") {
    return { value: action.value, isValid: action.value.length === 13};
  }
  if (action.type === "MPRN_BLUR") {
    return { value: state.value, isValid: state.value.length === 13 };
  }
  return { value: "", isValid: false };
};

 const Search = (props: any) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [mprnInputState, dispatchMPRN] = useReducer(mprnInputReducer, {
    value: "",
    isValid: null
  });

  const mprnChangeHandler = (event: any) => {
    console.log("emailChangeHandler runs");
    dispatchMPRN({ type: "MPRN_INPUT", value: event.target.value });

    setFormIsValid(event.target.value.trim().length === 13);
  };

  const validateMPRNHandler = () => {
    console.log("validatePasswordHandler runs");
    dispatchMPRN({ type: "MPRN_BLUR", value: "" });
  };

  const submitHandler = (event: any) => {
    console.log("submitHandler runs");
    event.preventDefault();
    props.onSearch(mprnInputState.value);
    mprnInputState.value =''; 
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            mprnInputState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="searchInput">MPRN Search</label>
          <input
            type="number"
            id="searchInput"
            value={mprnInputState.value}
            onChange={mprnChangeHandler}
            onBlur={validateMPRNHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Search
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Search;