import request from '@/utils/request'

export const examType = params => { //  考试类型--周考月卡
  return request.get('/exam/examType', params)
}
export const subject = params => { //  课程类型--js 上下
  return request.get('/exam/subject', params)
}
export const getQuestionsType = params => { //  题目类型--简单题
  return request.get('/exam/getQuestionsType', params)
}
export const addquestions = params => { //  添加试题
  return request.post('/exam/questions', params)
}
export const insertQuestionsType = params => { //  添加试题类型
  return request.get(`/exam/insertQuestionsType?test=${params.text}&sort=${params.sort}`, params)
}
export const condition = params => { //  获取所有试题
  return request.get('/exam/questions/condition', params)
}
