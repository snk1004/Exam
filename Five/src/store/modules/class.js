import {
  getgrade,
  getroom,
  getsubject,
  addgrade,
  gradeUpdata,
  // 删除
  gradeDelete,
  // 获取所有教室
  getAllRoom,
  // 添加教室
  addRoom,
  // 删除教室
  DeleteRoom
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
  // 添加班级
  addgrade({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const listData = await addgrade(payload)
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
  // 删除班级
  gradeDelete({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await gradeDelete(payload)
      resolve(deleteData)
    })
  },
  // 获取所有教室
  getAllRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await getAllRoom(payload)
      resolve(deleteData)
    })
  },
  // 添加教室
  addRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await addRoom(payload)
      resolve(deleteData)
    })
  },
  // 删除教室
  DeleteRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await DeleteRoom(payload)
      resolve(deleteData)
    })
  }
}

export default {
  namespaced: true,
  actions
}
