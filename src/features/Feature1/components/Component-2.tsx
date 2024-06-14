import { feature_1_helper_2 } from "@features/Feature1/helpers/feature-1-helper-2/feature-1-helper-2";
import { feature_1_helper_1 } from "@features/Feature1/helpers/feature-1-helper-1";
import { feature_1_helper_2_1 } from "@features/Feature1/helpers/feature-1-helper-2/helpers/feature-1-helper-2-1";

export const Component2 = (): void => {
  console.log("I'm a Component-1 ");

  // can import feature helpers
  feature_1_helper_1();
  feature_1_helper_2();
  feature_1_helper_2_1();
};
