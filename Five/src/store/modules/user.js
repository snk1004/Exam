import { login, getInfo, getViewAuthority } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo: {},
  viewAuthority: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_VIEWAUTHORITY: (state, viewAuthority) => {
    state.viewAuthority = viewAuthority
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    var res = await login({ user_name: username, user_pwd: password })
    setToken(res.token)
    return res
  },

  // get user info
  async getInfo({ commit, state }) {
    const data = await getInfo()
    commit('SET_USERINFO', data.data)
    const avatar = data.data.avatar == null ? 'https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png' : data.data.avatar
    commit('SET_AVATAR', avatar)
    return data.data
  },
  // get use getViewAuthority
  async getViewAuthority({ commit }, payload) {
    const userAuthority = await getViewAuthority({ user_id: payload.user_id })
    if (userAuthority.code === 1) {
      commit('SET_VIEWAUTHORITY', userAuthority.data)
      return userAuthority.data
    }
    return []
  },
  // user logout
  logout({ commit, state }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    resetRouter()
    commit('SET_USERINFO', {})
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     commit('SET_ROLES', [])
    //     removeToken()
    //     resetRouter()
    //     commit('SET_USERINFO', {})
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // Dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
