/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
const Markingmanagement = {
  path: '/markingmanagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'Markingmanagement',
  meta: {
    title: 'markingmanagement',
    icon: 'edit',
    view_id: ['main-examinationPapers', 'main-examPaperClassmate', 'main-examPaperClassList']
  },
  children: [
    {
      path: 'awaitingclass',
      component: () => import('@/views/awaiting/awaiting'),
      name: 'Awaitingclasst',
      meta: { title: 'awaitingclass', noCache: true, view_id: ['main-examinationPapers'] }
    },
    {
      path: 'volume',
      component: () => import('@/views/awaiting/volume'),
      name: 'volume',
      meta: { view_id: ['main-examinationPapers'] }
    }, {
      path: 'awaitingclasstwo',
      component: () => import('@/views/charts/keyboard'),
      name: 'Awaitingclassttwo',
      hidden: true,
      meta: { view_id: ['main-examPaperClassmate'] }

    }, {
      path: 'awaitinglist',
      component: () => import('@/views/awaiting/awaitlist'),
      name: 'awaitinglist',
      hidden: true,
      meta: { view_id: ['main-examPaperClassList'] }

    }
  ]
}
export default Markingmanagement
