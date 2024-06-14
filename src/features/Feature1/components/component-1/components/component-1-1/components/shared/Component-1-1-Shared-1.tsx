import { helper1 } from "@helpers/helper-1/helper-1";
import { component_1_helper_1 } from "@features/Feature1/components/component-1/helpers/component-1-helper-1";
import { component_1_1_helper_1 } from "@features/Feature1/components/component-1/components/component-1-1/helpers/component-1-1-helper-1";
import { SharedComponent_1 } from "@features/shared/SharedComponent-1";
import { useFeature_1_hook_1 } from "@features/Feature1/hooks/feature-1-hook-1";

export const Component_1_1Shared_1 = (): void => {
  // can import other shared components, parent helpers and hooks as well
  helper1();
  component_1_helper_1();
  component_1_1_helper_1();

  // can import features/shared as well
  SharedComponent_1();

  // and can import feature hooks or parent hooks as well
  useFeature_1_hook_1();

  // and should be able to import from parent/shared components as well
};
