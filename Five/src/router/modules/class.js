/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const classRoom = {
  path: '/classmanage',
  component: Layout,
  redirect: 'noredirect',
  name: 'classManage',
  meta: {
    title: 'classManage',
    icon: 'chart'
  },
  children: [
    {
      path: 'manage',
      component: () => import('@/views/class/manage'),
      name: 'KeyboardChart',
      meta: { title: 'Manage', noCache: true, view_id: 'main-grade' }
    },
    {
      path: 'classroom',
      component: () => import('@/views/class/classroom'),
      name: 'LineChart',
      meta: { title: 'classRoom', noCache: true, view_id: 'main-room' }
    },
    {
      path: 'student',
      component: () => import('@/views/class/student'),
      name: 'MixChart',
      meta: { title: 'Student', noCache: true, view_id: 'main-student' }
    }
  ]
}

export default classRoom
