import { helper1_1 } from "@helpers/helper-1/helpers/helper-1-1";
import { component_1_helper_1 } from "@features/Feature1/components/component-1/helpers/component-1-helper-1";

export const component_1_1_3_helper_1 = (): void => {
  helper1_1();
  console.log("I'm a component_1_1_3_helper_1");

  // can import parent helpers as well
  component_1_helper_1();
};
