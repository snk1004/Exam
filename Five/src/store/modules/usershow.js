import { show, adduser, getIdentity } from '@/api/usershow'

const actions = {
  show({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await show(payload)
      console.log(payload)
      resolve(data)
    })
  },
  adduser({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await adduser(payload)
      resolve(data)
    })
  },
  getIdentity({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getIdentity(payload)
      resolve(data)
    })
  }
}

export default {
  namespaced: true,
  actions
}
