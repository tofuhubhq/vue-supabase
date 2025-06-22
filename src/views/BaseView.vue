<template>
  <navbar></navbar>
  <div class="body">
    <sidebar></sidebar>
    <div class="main">
      <RouterView to="/machines"></RouterView>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { supabase } from '../lib/supabase';
import { onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  setup() {
    const machines = ref<any>([]);
    const initialised = async () => {
      const { data } = await supabase
        .from(`machines`)
        .select(`*,machine_types(id,name)`);
      machines.value = data;
    }

    onMounted(initialised)

    const goToMachine = (machine: any) => {
      console.info(machine)

    }

    return {
      machines,
      goToMachine
    }
  },

  components: {
    Navbar,
    Sidebar
  }
}
</script>

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
