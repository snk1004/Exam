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
  DeleteRoom,
  // 获取所有学生
  getAllstudent,
  // 修改学生信息
  resetStudent,
  // 删除学生
  deleteStudent
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
      const Data = await getAllRoom(payload)
      resolve(Data)
    })
  },
  // 添加教室
  addRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const Data = await addRoom(payload)
      resolve(Data)
    })
  },
  // 删除教室
  DeleteRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await DeleteRoom(payload)
      resolve(deleteData)
    })
  },
  // 获取所有学生
  getAllstudent({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const Data = await getAllstudent(payload)
      resolve(Data)
    })
  },
  // 修改学生信息
  resetStudent({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const Data = await resetStudent(payload)
      resolve(Data)
    })
  },
  // 删除学生
  deleteStudent({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const Data = await deleteStudent(payload)
      resolve(Data)
    })
  }
}

export default {
  namespaced: true,
  actions
}
