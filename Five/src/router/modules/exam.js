
import Layout from '@/layout'

const ExamRouter = {
  path: '/exam',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'textquest',
    icon: 'tree'
  },
  children: [
    {
      path: 'addquest',
      component: () => import('@/views/charts/keyboard'),
      name: 'Addquest',
      meta: { title: 'addquest', noCache: true }
    },
    {
      path: 'questtype',
      component: () => import('@/views/charts/line'),
      name: 'Questtype',
      meta: { title: 'questtype', noCache: true }
    },
    {
      path: 'lookquest',
      component: () => import('@/views/charts/mixChart'),
      name: 'Lookquest',
      meta: { title: 'lookquest', noCache: true }
    }
  ]
}

export default ExamRouter