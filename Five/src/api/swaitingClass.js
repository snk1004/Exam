import request from '@/utils/request'
// 获取所有班级
export const paperDetails = params => {
  return request.get('/manger/grade', params)
}
// 获取班级内的学习
export const studentDetail = params => {
  return request.get('/exam/student', params)
}
