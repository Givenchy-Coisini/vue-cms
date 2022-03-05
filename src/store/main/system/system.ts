import { IRootState } from '@/store/type'
import { Module } from 'vuex'
// import { getPageListData } from '@/network/api/system'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
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
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)
      const pageName = payload.pageName
      // const pageUrl = `/${pageName}/list`
      // 1.对页面发送请求
      // const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // console.log(pageResult)
      // const { list, totalCount } = pageResult.data
      // const changePageName =
      // (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      // commit(`change${changePageName}List`, list)
      // commit(`change${changePageName}Count`, totalCount)
      const userslist = [
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
        case 'users':
          commit('changeUsersList', userslist)
          commit('changeUsersCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', rolelist)
          commit('changeRoleCount', totalCount)
          break
      }
    }
  }
}

export default systemModule
