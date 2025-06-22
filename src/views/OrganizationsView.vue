<template>
  <h3>Organizations</h3>
  <DataTable :value="organizations" tableStyle="min-width: 50rem" @row-click="goToOrganization">
    <Column field="name" header="Name"></Column>
  </DataTable>
</template>

<script lang="ts">
import { supabase } from '@/lib/supabase';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const organizations = ref<any>([]);

    const initialised = async () => {
      const { data } = await supabase
        .from(`organizations`)
        .select(`*`);
      organizations.value = data;

      const session = await supabase.auth.getSession()
      console.info(session);
    }

    onMounted(initialised)

    const goToOrganization = (organization: any) => {
      router.push(`/organizations/${organization.data.id}`)
    }

    return {
      organizations,
      goToOrganization
    }
  },

  components: {
    
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
