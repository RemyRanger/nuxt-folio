import Vue from 'vue'

import { Plugin } from 'vue-fragment'
import Vue2TouchEvents from 'vue2-touch-events'
import { ScrollReveal } from '@/utils/ScrollReveal.js'

Vue.use(Plugin)
Vue.use(Vue2TouchEvents)

Vue.mixin(ScrollReveal)
