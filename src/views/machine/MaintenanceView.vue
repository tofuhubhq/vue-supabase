<template>
  maintenance
</template>

<script lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const machines = ref<any>([]);

    // const initialised = async () => {
    //   const { data } = await supabase
    //     .from(`machines`)
    //     .select(`*,machine_types(id,name)`);
    //   machines.value = data;

    //   const session = await supabase.auth.getSession()
    //   console.info(session);
    // }

    // onMounted(initialised)

    const goToMachine = (machine: any) => {
      router.push(`/machines/${machine.data.id}`)
    }

    const addNewDocument = () => {

    }

   const home = ref({
    icon: 'pi pi-home',
      route: '/machines'
    });
    const items = ref([
        { label: 'Components' },
        { label: 'Form' },
        { label: 'InputText', route: '/inputtext' }
    ]);

    return {
      machines,
      goToMachine,
      addNewDocument,
      home,
      items
    }
  },

  components: {}
}
</script>

<style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card-content {
    padding-right: 20px;
    padding-bottom: 20px;
    /* padding: 10px; */
    flex: 0 0 220px;
    /* max-height: 100px; */
    /* flex-grow: 1; */
    /* width: 33%; */
  }
</style>
