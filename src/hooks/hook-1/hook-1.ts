import { useHook1_1 } from "@hooks/hook-1/hooks/hook-1-1";

export const useHook1 = (): void => {
  useHook1_1();
  console.log("I'm a hook 1");
};
