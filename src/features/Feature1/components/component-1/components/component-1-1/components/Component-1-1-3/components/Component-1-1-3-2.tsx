import { component_1_1_3_helper_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/helpers/component-1-1-3-helper-1";
import { component_1_1_3_helper_2 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/helpers/component-1-1-3-helper-2/component-1-1-3-helper-2";
import { component_1_1_helper_1 } from "@features/Feature1/components/component-1/components/component-1-1/helpers/component-1-1-helper-1";
import { Component1_1_3_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/Component-1-1-3/components/Component-1-1-3-1/Component-1-1-3-1";
import { Component_1_1Shared_1 } from "@features/Feature1/components/component-1/components/component-1-1/components/shared/Component-1-1-Shared-1";

export const Component1_1_3_2 = (): void => {
  console.log("I'm a Component-1-1-3-2 ");

  Component1_1_3_1();

  // I should be able to import /hooks and /helpers of my parent as well
  component_1_1_3_helper_1();
  component_1_1_3_helper_2();

  component_1_1_helper_1();

  // and can import shared components from any parent
  Component_1_1Shared_1();
};
