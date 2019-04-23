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
            path: 'addexamination', //添加考试
            component: () =>
                import ('@/views/exam/addexam'),
            name: 'Addexaminationt',
            meta: { title: 'addexamination', noCache: true, view_id: "main-addExam" }
        },
        {
            path: 'examinationlist', //考试列表
            component: () =>
                import ('@/views/exam/examlist'),
            name: 'Examinationlist',
            meta: { title: 'examinationlist', noCache: true, view_id: "main-examList" }
        },
        {
            path: 'add', //添加试题
            component: () =>
                import ('@/views/exam/add'),
            name: 'add'

        },
        {
            path: 'detail', //列表详情
            component: () =>
                import ('@/views/exam/detail'),
            name: 'detail'
        },

    ]
}

export default Examinations