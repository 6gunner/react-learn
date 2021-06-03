import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

import Form, { Context, withForm } from '../../components/formValidation';
import styles from './class.module.scss';

const Input = withForm(TextField);

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {}
  }

  onSubmit = (data) => {
    console.log(data);
  }

  onChange = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div>
        我是Class组件
        <Form>
          <Context.Consumer>
            {
              ({ handleSubmit }) => (
                <>
                  <Input
                    name="username"
                    rules={[{
                      required: true
                    }]}
                    label="用户名"
                    onChange={this.onChange}
                    className={styles.formItem}></Input>
                  <Button onClick={handleSubmit && handleSubmit(this.onSubmit)}>提交</Button>
                </>)
            }
          </Context.Consumer>
        </Form>
      </div>
    )
  }
}


export default ClassComponent