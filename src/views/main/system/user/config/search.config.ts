import { IForm } from '@/base-ui/form/types/index'
export const formConfig: IForm = {
  labelWidth: '120px',
  itemLayout: { padding: '5px 30px' },
  colLayout: { span: 8 },
  formItems: [
    { field: 'id', type: 'input', label: 'id', placeholder: '请输入id' },
    {
      type: 'input',
      field: 'name',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      field: 'password',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      field: 'sport',
      label: '喜欢的运动',
      rules: [],
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
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
