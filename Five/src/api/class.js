/* ---ClassManger------------------------------------------------------------- */
import request from '@/utils/request'
// 获取 教室 课程 班级 信息
export const getgrade = params => {
  return request.get('/manger/grade', params)
}
// 获取全部教室
export const getroom = params => {
  return request.get('/manger/room', params)
}
// 获取全部课程
export const getsubject = params => {
  return request.get('/exam/subject', params)
}
// 添加班级
export const addgrade = params => {
  return request.post('/manger/grade', params)
}
// 更新班级
export const gradeUpdata = params => {
  return request.put('/manger/grade/update', params)
}
// 删除班级
export const gradeDelete = params => {
  return request.delete('/manger/grade/delete', { data: params })
}
/* ---ClassRoom------------------------------------------------------------- */
// 获取 所有教室
export const getAllRoom = params => {
  return request.get('/manger/room', params)
}
// 添加教室
export const addRoom = params => {
  return request.post('/manger/room', params)
}
// 删除教室
export const DeleteRoom = params => {
  return request.delete('/manger/room/delete', { data: params })
}
/* ---student---------------------------------------------------------------- */
// 获取所有学生信息
export const getAllstudent = params => {
  return request.get('/manger/student', params)
}
// 更新学生信息
export const resetStudent = params => {
  return request.put('/manger/student/edit', { data: params })
}
// 删除学生接口
export const deleteStudent = params => {
  return request.delete('/manger/student/' + params.id, params)
}
// 上传头像
export const upHead = params => {
  return request.delete('/user/user', params)
}
