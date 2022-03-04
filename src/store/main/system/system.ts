import { IRootState } from '@/store/type'
import { Module } from 'vuex'
// import { getPageListData } from '@/network/api/system'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)
      // 1.对页面发送请求
      // const pageResult = await getPageListData(payload.url, payload.queryInfo)
      // console.log(pageResult)
      // const { list, totalCount } = pageResult.data
      const list = [
        {
          id: 1,
          name: 'fuyongjie',
          realname: 'fyj',
          cellphone: '166399999',
          status: 1
        },
        {
          id: 2,
          name: 'admin',
          realname: 'admin',
          cellphone: '166399999',
          status: 1
        },
        {
          id: 3,
          name: 'zhanghaochen',
          realname: 'zhanghaochen',
          cellphone: '166399999',
          status: 1
        }
      ]
      const totalCount = 10
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
