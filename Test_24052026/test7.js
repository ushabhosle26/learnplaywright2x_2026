function mergeJsOperatorsConfig(defaultConfig, overrideConfig) {
  return {
    retries: 0,
    ...defaultConfig,
    ...overrideConfig
  };
}
console.log(mergeJsOperatorsConfig({"retries":1,"env":"dev"}, {"retries":3}));
console.log(mergeJsOperatorsConfig({"env":"qa"}, {"timeout":5000}));
console.log(mergeJsOperatorsConfig({"env":"dev","retries":2}, {"env":"stage"}));
