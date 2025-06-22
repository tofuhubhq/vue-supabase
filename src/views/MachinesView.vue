<template>
  <h3>Machines</h3>
  <DataTable :value="machines" tableStyle="min-width: 50rem" @row-click="goToMachine">
    <Column field="name" header="Name"></Column>
    <Column field="machine_types.name" header="Type"></Column>
  </DataTable>
</template>

<script lang="ts">
import { ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { supabase } from '../lib/supabase';
import { onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const machines = ref<any>([]);

    const initialised = async () => {
      const { data } = await supabase
        .from(`machines`)
        .select(`*,machine_types(id,name)`);
      machines.value = data;

      const session = await supabase.auth.getSession()
      console.info(session);
    }

    onMounted(initialised)

    const goToMachine = (machine: any) => {
      router.push(`/machines/${machine.data.id}`)
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
