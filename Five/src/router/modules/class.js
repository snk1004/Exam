/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const exam = {
  path: '/classmanage',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'classManage',
    icon: 'chart'
  },
  children: [
    {
      path: 'manage',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Manage', noCache: true }
    },
    {
      path: 'classroom',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'classRoom', noCache: true }
    },
    {
      path: 'student',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'Student', noCache: true }
    }
  ]
}

export default exam
