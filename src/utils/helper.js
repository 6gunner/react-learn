export const isClassComponent = (component) => {
  const type = typeof component;
  console.log(`${component.name}'s type is ${type}`);
  return type === "function" && !!component.prototype.isReactComponent;
};
