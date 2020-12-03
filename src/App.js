import React, { useState } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TestUseEffectPage from "./pages/testUseEffect";
import TestUseReducerPage from "./pages/testUseReducer";
import TestUseContextPage from "./pages/testUseContext";
import TestFowrardRefPage from "./pages/testForwardRef/index2";
import TestUseCustomHookPage from "./pages/testUseCustomHook";
import TestLinguiPage from "./pages/testLingui";

import { messages } from "./locales/en/messages.js";
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
i18n.load("en", messages);
i18n.activate("en");
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
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </I18nProvider>
  );
}

export default App;
