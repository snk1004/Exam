import Layout from '@/layout'

const UploadRouter = {
  path: '/upload',
  component: Layout,
  redirect: '/upload/upload',
  name: 'Upload',
  meta: {
    title: '上传头像',
    icon: 'tree'
  },
  children: [
    {
      path: 'upload',
      component: () => import('@/views/uploadphoto/upload.vue'),
      name: 'upload',
      meta: { title: '上传头像', noCache: true }
    },
    {
      path: 'questtype',
      component: () => import('@/views/uploadphoto/upload.vue'),
      name: 'Questtype'
    }
  ]
}

export default UploadRouter
