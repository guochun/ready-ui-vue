import Vue from 'vue'
import Button from './Button.vue'

Vue.component('rd-button',Button)

const vm = new Vue({
  el: '#app'
})
console.log(vm)