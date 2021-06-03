import React, { useContext, useEffect } from 'react';

import { Context } from './form';

function withForm(InputComponent) {

  function InnerComponent(props) {
    const { name, rules } = props;
    const { registerInput, setFieldValue, data, errors } = useContext(Context);
    useEffect(() => {
      registerInput(
        name, rules
      )
    }, [])// eslint-disable-line

    const onChange = e => {
      const val = e.target.value;
      setFieldValue(name, val);
      if (props.onChange) {
        props.onChange(val)
      }
    }
    return (
      <InputComponent
        {...props}
        error={errors[name] && errors[name].length > 0}
        helperText={errors[name] && errors[name].length > 0 ? errors[name][0] : ""}
        value={data[name] || ""}
        onChange={onChange}
      ></InputComponent>
    )
  }
  return InnerComponent;
}

export default withForm;