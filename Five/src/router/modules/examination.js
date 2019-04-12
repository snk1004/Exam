/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
const Examinations = {
  path: '/examination',
  component: Layout,
  redirect: 'noredirect',
  name: 'Examination',
  meta: {
    title: 'examination',
    icon: 'tab'
  },
  children: [
    {
      path: 'addexamination',
      component: () => import('@/views/charts/keyboard'),
      name: 'Addexaminationt',
      meta: { title: 'addexamination', noCache: true }
    },
    {
      path: 'examinationlist',
      component: () => import('@/views/charts/line'),
      name: 'Examinationlist',
      meta: { title: 'examinationlist', noCache: true }
    }
  ]
}

export default Examinations
