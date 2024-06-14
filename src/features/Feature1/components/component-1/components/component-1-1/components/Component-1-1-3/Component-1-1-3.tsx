import { Component1_1_3_2 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/components/Component-1-1-3-2";
import { Component1_1_3_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/components/Component-1-1-3-1/Component-1-1-3-1";
import { component_1_1_3_helper_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/helpers/component-1-1-3-helper-1";

export const Component1_1_3 = (): void => {
  console.log("I'm a Component-1-1-3 ");

  Component1_1_3_1();
  Component1_1_3_2();

  component_1_1_3_helper_1();
};
