/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
const Examinations = {
    path: '/examination',
    component: Layout,
    redirect: 'noredirect',
    name: 'Examination',
    meta: {
        title: 'examination',
        icon: 'tab'
    },
    children: [{
            //跳转考试管理
            path: 'addexamination',
            component: () =>
                import ('@/views/exam/addexam'),
            name: 'Addexaminationt',
            meta: { title: 'addexamination', noCache: true }
        },
        {
            path: 'examinationlist',
            component: () =>
                import ('@/views/exam/examlist'),
            name: 'Examinationlist',
            meta: { title: 'examinationlist', noCache: true }
        },
        {
            path: 'add',
            component: () =>
                import ('@/views/exam/add')
        }
    ]
}

export default Examinations