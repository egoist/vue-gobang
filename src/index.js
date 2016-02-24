import Vue from 'vue'
import app from './app'

if (__DEV__) {
	Vue.config.debug = true
}

new Vue({
	el: 'body',
	components: {app}
})
