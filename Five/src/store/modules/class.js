import {
  getgrade,
  getroom,
  getsubject,
  addroom,
  gradeUpdata,
  // 删除
  gradeDelete
} from '@/api/class'

const actions = {
  getgrade(state, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getgrade(payload)
      resolve(data)
    })
  },
  // 获取教室
  getroom(state, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getroom(payload)
      resolve(data)
    })
  },
  // 获取学科
  getsubject(state, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getsubject(payload)
      resolve(data)
    })
  },
  // 添加教室
  addroom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const listData = await addroom(payload)
      resolve(listData)
    })
  },
  // 更新信息
  gradeUpdata({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const listData = await gradeUpdata(payload)
      resolve(listData)
    })
  },
  // 删除教室
  gradeDelete({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await gradeDelete(payload)
      resolve(deleteData)
    })
  }
}

export default {
  namespaced: true,
  actions
}