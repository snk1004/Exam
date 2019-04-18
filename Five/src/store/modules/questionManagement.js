import { examType, subject, getQuestionsType, addquestions, insertQuestionsType, condition } from '@/api/questionManagement'
const actions = {
  examType({ commit }, payload) { //  考试类型
    return new Promise(async(resolve, reject) => {
      const data = await examType(payload)
      resolve(data)
    })
  },
  subject({ commit }, payload) { //  课程类型
    return new Promise(async(resolve, reject) => {
      const data = await subject(payload)
      resolve(data)
    })
  },
  getQuestionsType({ commit }, payload) { //  题目类型
    return new Promise(async(resolve, reject) => {
      const data = await getQuestionsType(payload)
      resolve(data)
    })
  },
  addquestions({ commit }, payload) { //  添加考试
    return new Promise(async(resolve, reject) => {
      const data = await addquestions(payload)
      resolve(data)
    })
  },
  insertQuestionsType({ commit }, payload) { //  添加考试类型
    return new Promise(async(resolve, reject) => {
      const data = await insertQuestionsType(payload)
      console.log(data)
      resolve(data)
    })
  },
  condition({ commit }, payload) { //  添加考试
    return new Promise(async(resolve, reject) => {
      const data = await condition(payload)
      resolve(data)
    })
  }
}

export default {
  namespaced: true,
  actions
}
