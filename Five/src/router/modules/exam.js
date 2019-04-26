import Layout from '@/layout'

const ExamRouter = {
  path: '/exam',
  component: Layout,
  redirect: 'exam/addquest',
  name: 'Exam',
  meta: {
    title: 'textquest',
    icon: 'tree',
    view_id: ['main-addQuestions', 'main-questionsType', 'main-watchQuestions']
  },
  children: [{
    path: 'addquest',
    component: () => import('@/views/addquest/addtest/addtest.vue'),
    name: 'Addquest',
    meta: { title: 'addquest', noCache: true, view_id: ['main-addQuestions'] }
  },
  {
    path: 'questtype',
    component: () => import('@/views/addquest/testtype/testtype.vue'),
    name: 'Questtype',
    meta: { title: 'questtype', noCache: true, view_id: ['main-questionsType'] }
  },
  {
    path: 'lookquest',
    component: () => import('@/views/addquest/looktest/looktest.vue'),
    name: 'Lookquest',
    meta: { title: 'lookquest', noCache: true, view_id: ['main-watchQuestions'] }
  },
  {
    path: 'detail',
    component: () => import('@/views/addquest/looktest/testDetail.vue'),
    name: 'detail'
  }
  ]
}

export default ExamRouter
