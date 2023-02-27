import React, { useState, useContext, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (state: any, action: any) => {
  console.log("emailReducer runs");
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state: any, action: any) => {
  console.log("passwordReducer runs");
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props: any) => {
  console.log("Login runs");

  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);



  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => {
  //     console.log('EFFECT CLEANUP');
  //   };
  // }, []);

  // const { isValid: emailIsValid } = emailState;
  // const { isValid: passwordIsValid } = passwordState;

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(emailIsValid && passwordIsValid);
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event: any) => {
    console.log("emailChangeHandler runs");
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event: any) => {
    console.log("passwordChangeHandler runs");
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    console.log("validateEmailHandler runs");
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    console.log("validatePasswordHandler runs");
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailIsValid && emailInputRef.current) {
      emailInputRef.current.focus();
    }
    else if(passwordInputRef.current){
      passwordInputRef.current.focus();
    }
    //authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email" 
          label="E-Mail" 
          type="email"
          isValid={emailState.isValid}
          value={emailState.value} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler} />
        <Input 
          ref={passwordInputRef}
          id="password" 
          label="Password" 
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value} 
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;