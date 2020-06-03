<script>
import Vue from 'vue';
import TailwindDropdownVue from '@/tailwind-dropdown-vue.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    TailwindDropdownVue
  }
});
</script>

<template>
  <div id="app">
    <tailwind-dropdown-vue />
  </div>
</template>
