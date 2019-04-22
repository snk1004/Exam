import { paperDetails, studentDetail } from '@/api/swaitingClass'
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
  }
}
export default {
  actions,
  namespaced: true
}
