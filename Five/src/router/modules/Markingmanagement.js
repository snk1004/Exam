/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
const Markingmanagement = {
  path: '/markingmanagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'Markingmanagement',
  meta: {
    title: 'markingmanagement',
    icon: 'edit'
  },
  children: [
    {
      path: 'awaitingclass',
      component: () => import('@/views/awaiting/awaiting'),
      name: 'Awaitingclasst',
      meta: { title: 'awaitingclass', noCache: true }
    },
    {
      path: 'volume',
      component: () => import('@/views/awaiting/volume'),
      name: 'volume'
      // meta: { title: 'volume', noCache: true }
    }, {
      path: 'awaitingclasstwo',
      component: () => import('@/views/charts/keyboard'),
      name: 'Awaitingclassttwo'
    }, {
      path: 'awaitinglist',
      component: () => import('@/views/awaiting/awaitlist'),
      name: 'awaitinglist'
    }
  ]
}
export default Markingmanagement
