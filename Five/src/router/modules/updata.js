import Layout from '@/layout'

const updataRouter = {
  path: '/updata',
  component: Layout,
  redirect: '/updata/upload',
  name: 'Updata',
  meta: {
    title: '上传头像',
    icon: 'theme'
  },
  children: [
    {
      path: 'upload',
      component: () => import('@/views/uploadphoto/upload.vue'),
      name: 'upload',
      meta: { title: 'updata', noCache: true }
    },
    {
      path: 'uploadtype',
      component: () => import('@/views/uploadphoto/upload.vue'),
      name: 'loadtype',
      meta: { title: '图片属性', noCache: true }
    }
  ]
}

export default updataRouter

