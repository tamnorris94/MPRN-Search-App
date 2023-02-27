import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { UserPreferences } from 'typescript';

import classes from './Input.module.css';

type InputProps = {
  ref?: any;
  isValid: boolean | null,
  id: string,
  label: string,
  type: string,
  value: string,
  onChange: (event: any) => void,
  onBlur: (event: any) => void
}

const Input = React.forwardRef((props: InputProps, ref: any) => {

    const inputRef: any = useRef();

    const activate = () => {
      inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
      return {
        focus: activate
      }
    });

    return (
      <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>)
});

export default Input;