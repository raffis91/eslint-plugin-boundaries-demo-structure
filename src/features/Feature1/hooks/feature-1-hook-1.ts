import { helper1_1 } from "@helpers/helper-1/helpers/helper-1-1";
import { feature_1_helper_1 } from "@features/Feature1/helpers/feature-1-helper-1";
import { feature_1_helper_2_1 } from "@features/Feature1/helpers/feature-1-helper-2/helpers/feature-1-helper-2-1";

export const useFeature_1_hook_1 = (): void => {
  // can import feature helpers and global helpers as well
  helper1_1();
  feature_1_helper_1();
  feature_1_helper_2_1();

  console.log("I'm a feature_1_hook_1");

  // imagine that hooks can have similar structure to /helpers in the components
};
