import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'
// import { getPageListData } from '@/network/api/system'
import login from './login/login'
import system from './main/system/system'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'fyj',
      age: 18,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    // changeEntireDeparment(state, departmentList) {
    //   state.entireDepartment = departmentList
    // },
    // changeEntireRole(state, roleList) {
    //   state.entireRole = roleList
    // }
  },
  actions: {
    // async getInitialDataAction({ commit }) {
    //   //  1.请求部门和角色数据
    //   const departmentResult = await getPageListData('/department/list', {
    //     offest: 0,
    //     size: 100
    //   })
    //   const { list: departmentList } = departmentResult.data
    //   const roleResult = await getPageListData('/role/list', {
    //     offest: 0,
    //     size: 100
    //   })
    //   const { list: roleList } = roleResult.data
    //   // 2.保存数据
    //   commit('changeEntireDeparment', departmentList)
    //   commit('changeEntireRole', roleList)
    // }
  },
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
