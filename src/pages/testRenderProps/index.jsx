import React, { useState } from 'react';

import DownSelect from './components/DownSelect';

const Test1 = props => props.render('hello world1');
const Test2 = props => props.children('hello world2');

const Page = () => {

  const [country, setCountry] = useState('86')
  const onChange = (value) => {
    console.log(value)
    setCountry(value)
  }
  return (<>
    <Test1 render={text => (<div>{text}</div>)}>
      {(text) => <div>{text}</div>}
    </Test1>
    <Test2 render={text => (<div>{text}</div>)}>
      {(text) => <div>{text}</div>}
    </Test2>
    <DownSelect onChange={onChange} value={country}></DownSelect>
  </>)
}

export default Page