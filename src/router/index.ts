import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BaseView.vue'
import MachinesView from '@/views/MachinesView.vue'
import MachineView from '@/views/machine/MachineView.vue'
import OrganizationsView from '@/views/OrganizationsView.vue'
import ReportsView from '@/views/machine/ReportsView.vue'
import DocumentsView from '@/views/machine/DocumentsView.vue'
import MaintenanceView from '@/views/machine/MaintenanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/machines',
      name: 'machines',
      component: MachinesView
    },
    {
      path: '/organizations',
      name: 'organizations',
      component: OrganizationsView
    },
    {
      path: '/machines/:id',
      name: 'machine',
      component: MachineView
    },
    {
      path: '/machines/:id/reports',
      name: 'machine--reports',
      component: ReportsView
    },
    {
      path: '/machines/:id/documents',
      name: 'machine--documents',
      component: DocumentsView
    },
    {
      path: '/machines/:id/maintenance',
      name: 'machine--maintenance',
      component: MaintenanceView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
