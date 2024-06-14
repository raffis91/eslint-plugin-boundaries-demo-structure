import { helper1_1 } from "@helpers/helper-1/helpers/helper-1-1";
import { feature_1_helper_2_1 } from "@features/Feature1/helpers/feature-1-helper-2/helpers/feature-1-helper-2-1";

export const feature_1_helper_2 = (): void => {
  helper1_1();
  console.log("I'm a feature_1_helper_2");

  feature_1_helper_2_1();
};
