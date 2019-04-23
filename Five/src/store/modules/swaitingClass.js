import { paperDetails, studentDetail, volumeDetail } from '@/api/swaitingClass'
const actions = {
  paperDetails({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await paperDetails(payload)
      resolve(data)
    })
  },
  studentDetail({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await studentDetail(payload)
      resolve(data)
    })
  },
  volumeDetail({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await volumeDetail(payload)
      resolve(data)
    })
  }
}
export default {
  actions,
  namespaced: true
}
