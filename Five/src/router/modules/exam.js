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
      component: () => import('@/views/addquest/addtest/addtest.vue'),
      name: 'Addquest',
      meta: { title: 'addquest', noCache: true }
    },
    {
      path: 'questtype',
      component: () => import('@/views/addquest/testtype/testtype.vue'),
      name: 'Questtype',
      meta: { title: 'questtype', noCache: true }
    },
    {
      path: 'lookquest',
      component: () => import('@/views/addquest/looktest/looktest.vue'),
      name: 'Lookquest',
      meta: { title: 'lookquest', noCache: true }
    }
  ]
}

export default ExamRouter
