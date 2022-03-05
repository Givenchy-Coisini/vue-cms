export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '100',
      slotName: 'cellphone'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '100',
      slotName: 'status'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
