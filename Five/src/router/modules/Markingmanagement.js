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
      meta: { title: 'awaitingclass', noCache: true, view_id: 'main-examPaperClassmate' }
    }, {
      path: 'awaitingclasstwo',
      component: () => import('@/views/charts/keyboard'),
      name: 'Awaitingclassttwo'
    }, {
      path: 'awaitinglist',
      component: () => import('@/views/awaiting/awaitlist'),
      name: 'awaitinglist'
    }, {
      path: 'markpapers',
      component: () => import('@/views/awaiting/markpapers'),
      name: 'markpapers'
    }
  ]
}

export default Markingmanagement
