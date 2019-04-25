import Layout from '@/layout'

const ExamRouter = {
  path: '/exam',
  component: Layout,
  redirect: 'exam/addquest',
  name: 'Exam',
  meta: {
    title: 'textquest',
    icon: 'tree'
  },
  children: [{
    path: 'addquest',
<<<<<<< HEAD
    component: () => import('@/views/addquest/addtest/addtest.vue'),
=======
    component: () =>
                import('@/views/addquest/addtest/addtest.vue'),
>>>>>>> aacf322680b7e22e86aebe35cdac3876b6ed55f1
    name: 'Addquest',
    meta: { title: 'addquest', noCache: true, view_id: 'main-addQuestions' }
  },
  {
    path: 'questtype',
<<<<<<< HEAD
    component: () => import('@/views/addquest/testtype/testtype.vue'),
=======
    component: () =>
                import('@/views/addquest/testtype/testtype.vue'),
>>>>>>> aacf322680b7e22e86aebe35cdac3876b6ed55f1
    name: 'Questtype',
    meta: { title: 'questtype', noCache: true, view_id: 'main-questionsType' }
  },
  {
    path: 'lookquest',
<<<<<<< HEAD
    component: () => import('@/views/addquest/looktest/looktest.vue'),
=======
    component: () =>
                import('@/views/addquest/looktest/looktest.vue'),
>>>>>>> aacf322680b7e22e86aebe35cdac3876b6ed55f1
    name: 'Lookquest',
    meta: { title: 'lookquest', noCache: true, view_id: 'main-watchQuestions' }
  },
  {
    path: 'detail',
<<<<<<< HEAD
    component: () => import('@/views/addquest/looktest/testDetail.vue'),
    name: 'detail'
=======
    component: () =>
                import('@/views/addquest/looktest/testDetail.vue'),
    name: 'detail'
    // meta: { title: 'detail', noCache: false }
>>>>>>> aacf322680b7e22e86aebe35cdac3876b6ed55f1
  }
  ]
}

export default ExamRouter
