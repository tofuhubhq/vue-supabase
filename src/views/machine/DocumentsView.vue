<template>
  <div class="card flex justify-content-center">
      <Breadcrumb :home="home" :model="items">
          <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                  <a :href="href" v-bind="props.action" @click="navigate">
                      <span :class="[item.icon, 'text-color']" />
                      <span class="text-primary font-semibold">{{ item.label }}</span>
                  </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                  <span class="text-color">{{ item.label }}</span>
              </a>
          </template>
      </Breadcrumb>
  </div>
  <h3>Documents</h3>
  <div class="card-container">
    <div @click="addNewDocument" class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                some doc
            </p>
        </template>
      </Card>
    </div>
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                some doc
            </p>
        </template>
      </Card>
    </div>
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                some doc
            </p>
        </template>
      </Card>
    </div>
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                some doc
            </p>
        </template>
      </Card>
    </div>
    <div class="card-content">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                some doc
            </p>
        </template>
      </Card>
    </div>
  </div>
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
