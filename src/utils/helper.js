export const isClassComponent = (component) => {
  const type = typeof component;
  console.log(`${component.name}'s type is ${type}`);
  return type === "function" && !!component.prototype.isReactComponent;
};

export const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

export const longTask = (timeout) => {
  while (true) {
    setTimeout(() => {
      return;
    }, timeout);
  }
};

export default {
  isClassComponent,
  delay,
  longTask,
};
