import { Component1_1_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-1";
import { component_1_helper_1 } from "@features/Feature1/components/component-1/helpers/component-1-helper-1";
import { component_1_1_helper_1 } from "@features/Feature1/components/component-1/components/component-1-1/helpers/component-1-1-helper-1";

export const Component1_1 = (): void => {
  console.log("I'm a Component-1-1 ");

  Component1_1_1();

  // can import parent helper
  component_1_helper_1();

  // can import components helper
  component_1_1_helper_1();
};
