import React, { useState } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TestUseEffectPage from "./pages/testUseEffect";
import TestUseReducerPage from "./pages/testUseReducer";
import TestUseContextPage from "./pages/testUseContext";
import TestFowrardRefPage from "./pages/testForwardRef/index";
import TestUseCustomHookPage from "./pages/testUseCustomHook";
import TestLinguiPage from "./pages/testLingui";
import TestFormValidatePage from "./pages/testFormValidate";
import TestRequestIdleCallback from "./pages/requestIdleCallback";
import TestRenderPropsPage from "./pages/testRenderProps";
import TestHistoryPage from "./pages/testHistory";
import TestEventPage from "./pages/testEventPage";

import { messages } from "./locales/cs/messages.js";
import { ThemeContext } from "./pages/testUseContext/context-manager";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
i18n.load("cs", messages);
i18n.activate("cs");
function App() {
  const [theme, setTheme] = useState(themes.light);
  const changeTheme = () => {
    setTheme((theme) => (theme == themes.dark ? themes.light : themes.dark));
  };
  return (
    <I18nProvider i18n={i18n}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Router>
          <Switch>
            <Route path="/useEffect" component={TestUseEffectPage} />
            <Route path="/useReducer" component={TestUseReducerPage} />
            <Route path="/useContext" component={TestUseContextPage} />
            <Route path="/forwardRef" component={TestFowrardRefPage} />
            <Route path="/useCustomHook" component={TestUseCustomHookPage} />
            <Route path="/lingui" component={TestLinguiPage} />
            <Route path="/form" component={TestFormValidatePage} />
            <Route path="/renderProps" component={TestRenderPropsPage} />
            <Route
              path="/requestIdleCallback"
              component={TestRequestIdleCallback}
            />
            <Route path="/history" component={TestHistoryPage}></Route>
            <Route path="/event" component={TestEventPage}></Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </I18nProvider>
  );
}

export default App;
