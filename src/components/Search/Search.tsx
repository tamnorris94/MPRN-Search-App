import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Search.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import SearchResults from "../SearchResults/SearchResults";
import {IMPRNDetails} from '../Interfaces/IMPRNDetails';
import DummyValidMPRNResponse from '../../DummyResponses/DummyValidMPRNResponse';


type State = {
  value: string;
  isValid: boolean | null;
};

type Action = {
  type: string;
  value: string;
};

const mprnInputReducer = (state: State, action: Action): State => {
  console.log("emailReducer runs");
  if (action.type === "MPRN_INPUT") {
    return { value: action.value, isValid: action.value.length === 13 };
  }
  if (action.type === "MPRN_BLUR") {
    return { value: state.value, isValid: state.value.length === 13 };
  }
  return { value: "", isValid: false };
};

const Search = (props: any) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [mprnSearched, setMPRNSearhed] = useState(false);
  const [mprnFound, setMPRNFound] = useState(false);
  const [MPRNDetails, setMPRNDetails] = useState<IMPRNDetails>();
  

  const searchedMPRNDetails: IMPRNDetails = DummyValidMPRNResponse;


  const [mprnInputState, dispatchMPRN] = useReducer(mprnInputReducer, {
    value: "",
    isValid: null,
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
    setMPRNSearhed(true);
    //props.onSearch(mprnInputState.value);
    if(mprnInputState.value === "1111111111111"){
      setMPRNFound(false);
    }
    else{
      setMPRNFound(true);
      const searchedMPRNDetails: IMPRNDetails = DummyValidMPRNResponse;
      setMPRNDetails(searchedMPRNDetails);
    }
    mprnInputState.value = "";
  };

  return (
    <React.Fragment>
      <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            mprnInputState.isValid === false ? classes.invalid : ""
          }`}
        >
          <Input
            label="MPRN Search"
            type="number"
            id="searchInput"
            isValid={mprnInputState.isValid}
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
    {mprnFound && <SearchResults mprnDetails={MPRNDetails || undefined}/>}
    {mprnSearched && !mprnFound && <h1>MPRN Not Found</h1>}
    </React.Fragment>
    
  );
};

export default Search;
