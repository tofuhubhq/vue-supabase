import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Card from 'primevue/card';
import Breadcrumb from 'primevue/breadcrumb';
import {
  faMap,
  faList,
  faPlus,
  faMusic,
  faShare,
  faHammer,
  faDirections,
  faFutbol,
  faBasketball,
  faCar,
  faPersonRunning,
  faPersonBiking,
  faPersonSwimming,
  faLandmark,
  faFire,
  faCrown,
  faBolt,
  faGuitar,
  faCancel,
  faDrumSteelpan,
  faScissors,
  faChampagneGlasses,
  faBowlFood,
  faPersonBurst,
  faHome,
  faWarehouse,
  faUserTie,
  faPeopleGroup,
  faTableTennisPaddleBall,
  faPalette,
  faRemove,
  faMeteor,
  faDesktop,
  faUserGroup,
  faFile,
  faFolder,
  faArrowLeft,
  faExclamation,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const app = createApp(App)

library.add(
  faUserGroup,
  faHome,
  faArrowLeft,
  faDesktop,
  faFile,
  faFolder,
  faMusic,
  faBasketball,
  faCar,
  faPeopleGroup,
  faCrown,
  faMeteor,
  faUserTie,
  faRemove,
  faTriangleExclamation,
  faBolt,
  faWarehouse,
  faGuitar,
  faCancel,
  faExclamation,
  faPersonBurst,
  faScissors,
  faTableTennisPaddleBall,
  faDrumSteelpan,
  faShare,
  faDirections,
  faList,
  faPlus,
  faFire,
  faHammer,
  faMap,
  faFutbol,
  faPersonRunning,
  faPersonBiking,
  faPersonSwimming,
  faLandmark,
  faChampagneGlasses,
  faBowlFood,
  faPalette
)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Card', Card);
app.component('Breadcrumb', Breadcrumb);


app.mount('#app')
