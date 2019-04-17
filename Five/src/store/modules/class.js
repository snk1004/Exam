import { getgrade } from '@/api/class'

const state = {
  gradeList: []
}

const mutations = {

}

const actions = {
  getgrade({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getgrade(payload)
      resolve(data)
      console.log(data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
