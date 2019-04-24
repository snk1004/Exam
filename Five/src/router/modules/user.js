/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/addUser',
  name: 'User',
  meta: {
    title: 'user',
    icon: 'user',
    view_id: 'main-addUser'
  },
  children: [
    {
      path: 'addUser',
      component: () => import('@/views/adduser/addUser'),
      name: 'Adduser',
      meta: { title: 'Adduser', noCache: true, view_id: 'main-addUser' }
    },
    {
      path: 'usershow',
      component: () => import('@/views/userShow/userShow'),
      name: 'userShow',
      meta: { title: 'UserShow', noCache: true, view_id: 'main-showUser' }
    },
    {
      path: 'addphoto',
      component: () => import('@/views/userShow/addphoto'),
      name: 'photo',
      meta: { title: 'photo', noCache: true, view_id: 'main-showUser' }
    }
  ]
}
export default userRouter

