import { IRootState } from '@/store/type'
import { Module } from 'vuex'
// import { getPageListData,deletePageData,updatePageData,createPageData } from '@/network/api/system'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
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
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
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
      const goodslist = [
        {
          id: 1,
          name: 'fuyongjie',
          oldPrice: '20',
          newPrice: '15',
          imgUrl: 'https://s3.bmp.ovh/imgs/2022/02/9bf05e0340b0adfc.jpg'
        },
        {
          id: 2,
          name: 'admin',
          oldPrice: '20',
          newPrice: '15',
          imgUrl: 'https://s3.bmp.ovh/imgs/2022/02/9bf05e0340b0adfc.jpg'
        },
        {
          id: 3,
          name: 'zhanghaochenzhanghaochenzhanghaochenzhanghaochen',
          oldPrice: '20',
          newPrice: '15',
          imgUrl: 'https://s3.bmp.ovh/imgs/2022/02/9bf05e0340b0adfc.jpg'
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
        case 'goods':
          commit('changeGoodsList', goodslist)
          commit('changeGoodsCount', totalCount)
          break
      }
    },
    async deletePageDataAction(context, payload: any) {
      // const { pageName, id } = payload
      // const pageUrl = `/${pageName}/${id}`
      // await deletePageData(pageUrl)
      // 重新获取最新的数据
      context.dispatch('getPageListAction', {
        pageName: payload.pageName,
        // pageName,
        // 仍需要有些改进
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
    // async createPageDataAction(context, payload: any) {
    //   const { pageName, newData } = payload
    //   // const pageUrl = `/${pageName}`
    //   // await createPageData(pageUrl,newData)
    //   // 重新获取最新的数据
    //   context.dispatch('getPageListAction', {
    //     pageName,
    //     // 仍需要有些改进
    //     queryInfo: {
    //       offset: 0,
    //       size: 10
    //     }
    //   })
    // },
    // async updatePageDataAction(context, payload: any) {
    //   const { pageName, editData,id } = payload
    //   // const pageUrl = `/${pageName}/${id}`
    //   // await updatePageData(pageUrl,editData)
    //   // 重新获取最新的数据
    //   context.dispatch('getPageListAction', {
    //     pageName,
    //     // 仍需要有些改进
    //     queryInfo: {
    //       offset: 0,
    //       size: 10
    //     }
    //   })
    // }
  }
}

export default systemModule
