/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  name: 'User',
  redirect: '/user/addUser',
  meta: {
    title: 'user',
    icon: 'user'
  },
  children: [
    {
      path: 'addUser',
      component: () => import('@/views/table/dynamicTable/index'),
      name: 'DynamicTable',
      meta: { title: 'Adduser' }
    },
    {
      path: 'usershow',
      component: () => import('@/views/table/dragTable'),
      name: 'DragTable',
      meta: { title: 'UserShow' }
    }
  ]
}
export default userRouter
