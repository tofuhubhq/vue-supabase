<template>
  <h3>Reports</h3>
  <DataTable :value="reports" tableStyle="min-width: 50rem" @row-click="openReport">
    <Column field="title" header="Name"></Column>
    <Column field="report_type" header="Type"></Column>
  </DataTable>
</template>

<script lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const reports = ref<any>([]);

    const initialised = async () => {
      const { data } = await supabase
        .from(`reports`)
        .select(`*`);
      reports.value = data;

      const session = await supabase.auth.getSession()
      console.info(session);
    }

    onMounted(initialised)

    const openReport = (report: any) => {
      // open in new tab
    }

    return {
      reports,
      openReport
    }
  },

  components: {}
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
