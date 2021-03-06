import { show, adduser, getIdentity, getApi, getRelation, getView, getViewIdentity, getReneval, setIdentity, addApi, setApiEnter, addViewApi, setIdentityApi, setIdentityView } from '@/api/usershow'

var state = {
  code: '',
  msg: ''
}
const mutations = {
  Tips(state, result) {
    if (result) {
      state.code = result.code
      state.msg = result.msg
    }
  }
}

const actions = {
  show({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await show(payload)
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
  },
  getApi({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getApi(payload)
      resolve(data)
    })
  },
  getRelation({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getRelation(payload)
      resolve(data)
    })
  },
  getView({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getView(payload)
      resolve(data)
    })
  },
  getViewIdentity({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getViewIdentity(payload)
      resolve(data)
    })
  },
  getReneval({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await getReneval(payload)
      resolve(data)
    })
  },
  setIdentity({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await setIdentity(payload)
      resolve(data)
    })
  },
  addApi({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await addApi(payload)
      resolve(data)
    })
  },
  setApiEnter({ commit }, payload) {
    return new Promise(async(resolve, reject) => {
      const data = await setApiEnter(payload)
      resolve(data)
    })
  },
  async  addViewApi({ commit }, payload) {
    const data = await addViewApi(payload)
    commit('Tips', data)
    return data
  },
  async setIdentityApi({ commit }, payload) {
    const data = await setIdentityApi(payload)
    commit('Tips', data)
    return data
  },
  async setIdentityView({ commit }, payload) {
    const data = await setIdentityView(payload)
    commit('Tips', data)
    return data
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state
}
