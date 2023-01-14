import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const passwordReducer = (state: any, action: any) => {
  console.log("passwordReducer runs");
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props: any) => {
  console.log("Login runs");
  const [formIsValid, setFormIsValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const passwordChangeHandler = (event: any) => {
    console.log("passwordChangeHandler runs");
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
        event.target.value.trim().length == 13
    );
  };

  const validatePasswordHandler = () => {
    console.log("validatePasswordHandler runs");
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: any) => {
    console.log("submitHandler runs");
    event.preventDefault();
    props.onLogin(passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;