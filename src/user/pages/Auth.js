import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  });

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    console.log('SWITCHED ');
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          type="email"
          label="E-mail"
          id="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please Enter a Valid EMail Address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          type="password"
          label="Password"
          id="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter a Valid Password at least 5"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO SIGN_UP
      </Button>
    </Card>
  );
};
export default Auth;
