<template>
  <div>
    <h3>{{machine.name}}</h3>
    <span class="subtitle">{{machine.machine_types?.name}}</span>
  </div>
  <div>
    <iframe src="https://grafana.eklima.cloud/d-solo/fdn6jtsypthq8c/new-dashboard?orgId=2&from=1717046429351&to=1717068029351&theme=light&panelId=1" width="100%" height="300" frameborder="0"></iframe>
  </div>
  <div class="card-container">
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
      </Card>
    </div>
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
      </Card>
    </div>
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
      </Card>
    </div>
  </div>
 
</template>

<script lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Card from 'primevue/card'

export default {
  setup() {
    const machine = ref<any>({});
    const route = useRoute();
    
    const initialise = async () => {
      const { data } = await supabase
        .from(`machines`)
        .select(`*,machine_types(id,name)`)
        .eq(`id`, route.params.id);

      machine.value = data![0];
    }

    onMounted(initialise)
    
    return {
      machine
    }
  },

  components: {
    Card
  }
}
</script>

<style scoped>
  .subtitle {
    font-size: 14px;
    color: grey;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card-content {
    
    flex-grow: 1;
    width: 33%;
    /* flex: 0 0 220px; */
  }

  .card-content:not(:last-child) {
    padding-right: 20px;
  }
</style>
