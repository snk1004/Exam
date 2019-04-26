/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
const Examinations = {
  path: '/examination',
  component: Layout,
  redirect: 'examination/addexamination',
  name: 'Examination',
  meta: {
    title: 'examination',
    icon: 'tab',
    view_id: 'main-addExam'
  },
  children: [{ // 跳转考试管理
    path: 'addexamination',
    component: () => import('@/views/exam/addexam'),
    name: 'Addexaminationt',
    meta: { title: 'addexamination', noCache: true, view_id: 'main-addExam' }
  },
  {
    path: 'examinationlist',
    component: () => import('@/views/exam/examlist'),
    name: 'Examinationlist',
    meta: { title: 'examinationlist', noCache: true, view_id: 'main-examList' }
  },
  {
    path: 'add',
    component: () => import('@/views/exam/add'),
    hidden: true,
    meta: { view_id: 'main-examEdit' }
  },
  {
    path: 'detail',
    component: () => import('@/views/exam/detail'),
    hidden: true,
    meta: { view_id: 'main-questionsDetail' }
  }]
}

export default Examinations
