import Vue from 'vue'
import VueDisqus from 'vue-disqus'
import ENV from '@@/env'

Vue.use(VueDisqus, {
  shortname: ENV.disqusApiKey,
})
