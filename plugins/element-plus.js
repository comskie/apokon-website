import ElementPlus, { ID_INJECTION_KEY } from 'element-plus';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus);
    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        current: 100,
        prefix: 0,
    });
})