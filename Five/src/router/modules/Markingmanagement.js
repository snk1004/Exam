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
      component: () => import('@/views/charts/keyboard'),
      name: 'Awaitingclasst',
      meta: { title: 'awaitingclass', noCache: true }
    }
  ]
}

export default Markingmanagement
