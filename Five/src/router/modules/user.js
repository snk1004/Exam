/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'User',
  meta: {
    title: 'user',
    icon: 'user'
  },
  children: [
    {
      path: 'addUser',
      component: () => import('@/views/charts/keyboard'),
      name: 'Adduser',
      meta: { title: 'Adduser', noCache: true }
    },
    {
      path: 'usershow',
      component: () => import('@/views/charts/line'),
      name: 'Questtype',
      meta: { title: 'UserShow', noCache: true }
    }
  ]
}
export default userRouter

