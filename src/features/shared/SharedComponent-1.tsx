import { SharedComponent_2 } from "@features/shared/SharedComponent-2/SharedComponent-2";

export const SharedComponent_1 = (): void => {
  // shared components might be imported by any feature and other components which are under /shared folder
  console.log("I'm a SharedComponent_1");

  SharedComponent_2();
};
