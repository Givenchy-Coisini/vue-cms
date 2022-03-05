import { IForm } from '@/base-ui/form/types/index'
export const formConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      type: 'input',
      field: 'name',
      label: '角色名',
      rules: [],
      placeholder: '请输入角色名'
    },
    {
      type: 'input',
      label: '权限介绍',
      field: 'intro',
      rules: [],
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
