import { Component2 } from "@features/Feature1/components/Component-2";
import { Component1 } from "@features/Feature1/components/component-1/Component-1";
import { useFeature_1_hook_1 } from "@features/Feature1/hooks/feature-1-hook-1";
import { SharedComponent_1 } from "@features/shared/SharedComponent-1";
import { SharedComponent_2 } from "@features/shared/SharedComponent-2/SharedComponent-2";

export const Feature1 = (): void => {
  console.log(
    "I'm a Feature 1 and can import elements from features/shared or my components / helpers / hooks"
  );

  Component1();
  Component2();

  useFeature_1_hook_1();

  SharedComponent_1();
  SharedComponent_2();
};
