/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
const upImg = {
    path: '/upImg',
    component: Layout,
    redirect: 'noredirect',
    name: 'upImg',
    meta: {
        title: 'examination',
        icon: 'tab'
    },
    children: [{
        //跳转考试管理
        path: 'upImg', //添加考试
        component: () =>
            import ('@/views/upImg/upImage'),
        name: 'Addexaminationt',
        meta: { title: 'upImg', noCache: true }
    }, ]
}

export default upImg