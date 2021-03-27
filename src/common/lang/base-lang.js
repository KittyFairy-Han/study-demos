import Vue from "vue";
export function createLangModules(langContext, defaultLang = "zh-CN") {
  const VueI18n = require("vue-i18n").default;
  Vue.use(VueI18n);
 
  let messages = {};
  for (let fileItemName of langContext.keys()) {
    const langModule = langContext(fileItemName);
    const langName = langModule.langName;
    const langConfig = langModule.content;
    // console.log(fileItemName, ` -->${langName} `, langConfig)
    messages[langName] = langConfig;
  }
  return new VueI18n({
    locale: defaultLang, // 语言标识
    messages,
  });
}
