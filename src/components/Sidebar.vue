<template>
  <div class="sidebar">
    <div class="header">
      Tommaso Girotto
    </div>
    <div v-if="header != null">
      <div class="current">
        {{header.name}}
      </div>
    </div>
    <div class="">
      <ul>
        <li v-if="header != null" @click="goBack">
          <FontAwesomeIcon :icon="['fas', 'arrow-left']" /> Back</li>
        <li v-for="menu of menus" v-bind:key="menu.path" @click="goToRoute(menu.path)">
          <FontAwesomeIcon :icon="['fas', menu.icon]" />
          {{menu.title}}
        </li>
        <!-- <li>hey</li>
        <li>hey</li> -->
      </ul>
    </div>
  </div>
  
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { watch } from "vue";
import { supabase } from '@/lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    let domain = ``;
    const header = ref();
    const baseMenus = [
      {
        path: '/machines',
        icon: 'desktop',
        title: 'Machines'
      },
       {
        path: '/organizations',
        icon: 'user-group',
        title: 'Organizations'
      }
    ];
    const machineMenus = [
      {
        path: '/',
        icon: 'home',
        title: 'Home'
      },
      {
        path: `/reports`,
        icon: 'file',
        title: 'Reports'
      },
      {
        path: `/documents`,
        icon: 'folder',
        title: 'Documents'
      },
      {
        path: `/maintenance`,
        icon: 'bolt',
        title: 'Maintenance'
      },
    ]
    const organizationMenus = [
      {
        path: '/home',
        title: 'Home'
      },
    ]
    const menus = ref();

    const update = async (fullPath: string) => {
      console.info(fullPath)
      const params = fullPath.split(`/`);
      domain = params[1];
      // if there is a selected object (org or machine)
      // then fetch it
      if (params[2]) {
        const { data } = await supabase
          .from(domain)
          .select(`*`)
          .eq(`id`, route.params.id)

        header.value = data![0];
        if (domain === `machines`) menus.value = machineMenus;
        else if (domain === `organizations`) menus.value = organizationMenus;
      } else {
        menus.value = baseMenus;
      }
    }

    const goToRoute = (subpath: any) => {
      if (header.value) router.push(`/${domain}/${header.value.id}${subpath}`)
      else router.push(subpath)
    }

    const goBack = () => {
      header.value = null;
      router.push(`/${domain}`)
    }

    // watch the structure of the url to understand what should appear
    watch(
      () => route.fullPath,
      update
    );

    return {
      header,
      menus,
      goToRoute,
      goBack
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
  .header {
    height: 100px;
    /* vertical-align: middle; */
  }

  .sidebar {
    width: 200px;
    height: calc(100vh - 50px);
    background-color: #182d47;
    color: white;
  }

  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }

  li {
    padding: 10px;
    /* border-bottom: 1px white solid; */
  }

  li:hover {
    cursor: pointer;
    background-color: #1c365a;
  }

  .back, .current {
    text-align: center;
    padding-bottom: 10px;
  }
</style>
