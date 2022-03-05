import { IRootState } from '@/store/type'
import { Module } from 'vuex'
// import { getPageListData } from '@/network/api/system'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)
      const pageName = payload.pageName
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = 'api/users/list'
      //     break
      //   case 'role':
      //     pageUrl = 'api/role/list'
      //     break
      // }
      // 1.对页面发送请求
      // const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // console.log(pageResult)
      // const { list, totalCount } = pageResult.data
      const userlist = [
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
          status: 0
        }
      ]
      const rolelist = [
        {
          id: 1,
          name: 'fuyongjie',
          intro: 'fyj'
        },
        {
          id: 2,
          name: 'admin',
          intro: 'admin'
        },
        {
          id: 3,
          name: 'zhanghaochen',
          intro: 'zhanghaochen'
        }
      ]
      const totalCount = 10
      switch (pageName) {
        case 'user':
          commit('changeUserList', userlist)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', rolelist)
          commit('changeRoleCount', totalCount)
          break
      }
      // commit(`change${pageName.toUpperCase()}List`, list)
      // commit(`change${pageName.toUpperCase()}Count`, totalCount)
    }
  }
}

export default systemModule
