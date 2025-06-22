<script lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
  setup() {

  },

  components: {
    Navbar,
    Sidebar
  }
}
</script>
  
<template>
  <navbar></navbar>
  <div class="body">
    <sidebar></sidebar>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
  
</template>

<style scoped>
  .body {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* display: inline; */
  }

  .main {
    width: 100px;
    flex: 1;
    padding: 20px;
  }
</style>
