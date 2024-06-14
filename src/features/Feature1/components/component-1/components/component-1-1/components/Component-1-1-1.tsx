import { Component1_1_2 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-2";
import { Component1_1_3 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/Component-1-1-3";
import { component_1_helper_1 } from "@features/Feature1/components/component-1/helpers/component-1-helper-1";
import { Component_1_1Shared_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/shared/Component-1-1-Shared-1";

export const Component1_1_1 = (): void => {
  console.log("I'm a Component-1-1-1 ");

  // I can import my siblings as well
  Component1_1_2();
  Component1_1_3();

  // and can import parent helpers
  component_1_helper_1();

  // and can import from current shared components as well
  Component_1_1Shared_1();
};
