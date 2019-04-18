import request from '@/utils/request'
// 获取 教室 课程 班级 信息
export const getgrade = params => {
  return request.get('/manger/grade', params)
}
// 获取全部教室
export const getroom = params => {
  return request.get('/manger/room', params)
}
// 获取全部教室
export const getsubject = params => {
  return request.get('/exam/subject', params)
}
// 添加教室
export const addroom = params => {
  return request.post('/manger/grade', params)
}
// 更新班级
export const gradeUpdata = params => {
  return request.put('/manger/grade/update', params)
}
// 删除教室
export const gradeDelete = params => {
  return request.delete('/manger/grade/delete', { data: params })
}
// 获取 所有教室
export const getAllRoom = params => {
  return request.get('/manger/room', params)
}
