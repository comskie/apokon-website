import ElementPlus, { ID_INJECTION_KEY } from 'element-plus';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus);
})