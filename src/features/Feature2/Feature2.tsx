export const Feature2 = (): void => {
  console.log(
    "I'm a Feature 2 and can import elements from features/shared or my components / helpers / hooks"
  );
  // I won't be able to import elements from other feature, e.g. features/Feature1
  // Imagine similar structure in this feature as in the Feature1
};
