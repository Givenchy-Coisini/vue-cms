export const contentTableConfig = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100', slotName: 'name' },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      slotName: 'realname'
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
