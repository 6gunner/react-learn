
import React, { createContext, setState, useEffect, useRef, useState } from 'react';
import _ from 'underscore';

const Context = createContext();

const Form = (props) => {

  const initState = {
    data: {},
    rules: {},
    errors: {}
  }

  const [formState, setFormState] = useState(initState);

  let callback;
  const handleSubmit = (a) => {
    callback = a;
    return (e) => {
      onSubmit();
    }
  }

  const onSubmit = () => {
    debugger
    if (validation()) {
      props.onSubmit && props.onSubmit(formState.data);
      callback && callback(formState.data)
    }
    return false;
  }

  const validate = (value, rule) => {
    if (rule['required'] && !value) {
      return ['必填项']
    }
  }

  const resetValidation = () => {
    setFormState(state => ({
      ...state,
      errors: {},
    }));
  }

  const validation = () => {
    debugger
    resetValidation();
    const formErrors = Object.entries(formState.rules).reduce((errors, [name, rules]) => {
      const { data } = formState;
      const messages = rules.reduce((result, rule) => {
        const value = data[name];
        const err = validate(value, rule);
        if (err) {
          return [...result, ...err]
        }
        return result;
      }, [])
      if (messages.length > 0) {
        errors[name] = messages;
      }
      return errors;
    }, {});
    if (_.isEmpty(formErrors)) {
      return true;
    }
    setFormState(state => ({
      ...state,
      errors: formErrors,
    }))
    return false;
  }

  // ref = useRef({
  // });

  // useEffect(() => {
  //   return () => {
  //     ref.current = null;
  //   }
  // }, [])

  const registerInput = (name, rules) => {
    setFormState(state => ({
      ...state,
      rules: {
        ...state.rules,
        [name]: rules || []
      }
    }));
    return () => {
      setFormState(state => {
        const { data, errors, rules: currentRules } = { ...state };
        delete data[name];
        delete errors[name];
        delete currentRules[name];
        return {
          data,
          errors,
          rules: currentRules
        }
      })
    }
  }

  const setFieldValue = (name, value) => {
    setFormState({
      ...formState,
      data: {
        [name]: value,
      }
    })
  }



  const providerValue = {
    errors: formState.errors,
    data: formState.data,
    registerInput,
    setFieldValue,
    handleSubmit
  }

  return (
    <Context.Provider value={providerValue}>
      <form onSubmit={onSubmit}>
        {props.children}
      </form>
    </Context.Provider>
  )
};

export default Form;
export {
  Context,
}
