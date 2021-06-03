import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import TestFormValidateFuncComp from './func';
import TestFormValidateCompComp from './class';

const Index = function () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/form/func">函数式组件</Link>
        </li>
        <li>
          <Link to="/form/class">Class组件</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path="/form/func" component={TestFormValidateFuncComp} />
          <Route path="/form/class" component={TestFormValidateCompComp} />
        </Switch>
      </div>

    </div>
  )
}

export default Index;