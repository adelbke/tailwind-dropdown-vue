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
  <div id="app" class="w-full p-5">
    <tailwind-dropdown-vue right>
      <button class="text-blue-500 border-2 border-blue-800" slot="button">Click me !</button>
      <div slot="menu" >
        <h2 class="text-xl whitespace-no-wrap px-2">this is an item</h2>
      </div>
    </tailwind-dropdown-vue>
  </div>
</template>
