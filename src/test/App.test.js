import React from "react";
import { render } from "@testing-library/react";
import { isClassComponent } from "../utils/helper";

import { FancyButton } from "../pages/testForwardRef/index";
import { FancyInput } from "../pages/testForwardRef/index2";
test("isClassComponent", () => {
  console.log(FancyButton.prototype);
  expect(isClassComponent(FancyButton)).toBe(true);
  expect(isClassComponent(FancyInput)).toBe(false);
});
