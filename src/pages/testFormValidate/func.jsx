import React from 'react';
import { TextField, MenuItem, FormControl } from "@material-ui/core";
import { Controller, useController, useForm } from 'react-hook-form';

import styles from './func.module.scss';

const Input = React.forwardRef((props, ref) => {
  const { name, label: labelText, value, error = {}, onChange, otherProps } = props;
  return (
    <div className={styles.formItem}>
      <label className={styles.formItemLabel}>{labelText}</label>
      <input
        {...otherProps}
        type="text"
        className={styles.formItemInput}
        name={name}
        onChange={onChange}
        value={value}
        ref={ref}
      />
      {
        error.ref ?
          <div className="helper">{error.message}</div>
          : ""
      }
    </div>
  )
})

function Input2({ control, name, rules, label: labelText, error = {} }) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });
  return (<div className={styles.formItem}>
    <label className={styles.formItemLabel}>{labelText}</label>
    <input {...inputProps}
      ref={ref}
      type="text"
      className={styles.formItemInput}
    />
    {
      error.ref ?
        <div className="helper">{error.message}</div>
        : ""
    }
  </div>)
}

export default function () {

  const { control, register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  // const onChangeMobile = (e) => {
  //   setMobile(e.target.value);
  // }

  const countries = [{
    value: 'zh-cn',
    text: '中国'
  }, {
    value: 'en-us',
    text: '美国'
  }]

  return (
    <div>
      我是Class组件
      <form className={styles.form}>

        <TextField
          className={styles.formItem}
          fullWidth
          select
          label="国家"
          defaultValue=""
          // name="country"
          inputProps={{
            name: "country",
            ref: (ref) => {
              if (!ref) return;
              register('country', {
                required: {
                  value: true,
                  message: '国家不能为空'
                }
              });
            },
          }}
          onChange={e => setValue('country', e.target.value, { shouldValidate: true })}
          error={errors.country && errors.country.type && true}
          helperText={errors.country && errors.country.message}
        >{
            countries.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.text}
              </MenuItem>
            ))
          }
        </TextField>
        <Controller
          control={control}
          defaultValue=""
          render={(props) => (
            <Input
              {...props}
              // onChange={e => props.onChange(e.target.value)}
              type="text"
              name="name"
              label="用户名"
              error={errors.name}
            />
          )}
          name="name"
          rules={{
            required: {
              value: true,
              message: 'name必填',
            }
          }}
        >
        </Controller>
        <Controller
          control={control}
          defaultValue=""
          as={
            <Input type="text" error={errors.mobile} />
          }
          name="mobile"
          label="手机"
          rules={{
            required: {
              value: true,
              message: '手机必填',
            }
          }}
        />
        <Input type="text" label="密码"
          name="password1"
          error={errors.password1}
          ref={ref => register(
            ref,
            {
              required: {
                value: true,
                message: '密码必填',
              },
              pattern: {
                value: /[A-Za-z]{10}/,
                message: '规则不匹配'
              }
            })}
        />

        <Input2
          name="password3"
          label="重复密码"
          defaultValue=""
          error={errors.password3}
          rules={{ required: { value: true, message: `重复密码必填` } }}
          control={control}
        />
        <button className={styles.submitBtn} onClick={handleSubmit(onSubmit)}>提交</button>
      </form>
    </div >
  )
}