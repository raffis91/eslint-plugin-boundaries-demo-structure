import { Component1_1 } from "@features/Feature1/components/component-1/components/component-1-1/Component-1-1";
import { component_1_helper_1 } from "@features/Feature1/components/component-1/helpers/component-1-helper-1";

export const Component1 = (): void => {
  console.log("I'm a Component-1 ");

  Component1_1();

  component_1_helper_1();
};
