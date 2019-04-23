import request from '@/utils/request'
// 获取所有班级
export const paperDetails = params => {
  return request.get('/manger/grade', params)
}
// 获取班级内的学生
export const studentDetail = params => {
  return request.get('/exam/student', {
    params: {
      grade_id: params.gradeid
    }
  })
}
// 获取未批卷的详情
export const volumeDetail = params => {
  return request.get(`/exam/student/${params.id}`)
}

