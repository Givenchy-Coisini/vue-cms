export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100', slotName: 'name' },
    {
      prop: 'type',
      label: '类型',
      minWidth: '60',
      slotName: 'type'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100',
      slotName: 'url'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100',
      slotName: 'permission'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
