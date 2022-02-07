import { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/network/api/login'
import { IAccount } from '@/network/api/type'
import localCache from '@/utils/cache'
import { ILoginState } from './type'
import { IRootState } from '../type'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('执行accountLoginAction', payload)
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      console.log(id, token)
      // 2.发送其他请求 获取userInfo
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 3.拿到对应的菜单
      // role 报错
      // const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      // const userMenus = userMenusResult.data
      // commit('changeUserMenus', userMenus)
      // localCache.setCache('userMenus', userMenus)
      // console.log(userMenus)
      // 4.跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeuserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeuserMenus', userMenus)
      }
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}
export default loginModule
