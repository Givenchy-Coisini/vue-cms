import { IForm } from '@/base-ui/form/types/index'
export const modalConfig: IForm = {
  labelWidth: '70px',
  // itemLayout: { padding: '5px 30px' },
  itemLayout: {},
  colLayout: { span: 24 },
  formItems: [
    // { field: 'id', type: 'input', label: 'id', placeholder: '请输入id' },
    {
      type: 'input',
      field: 'name',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '真实姓名',
      field: 'realname',
      rules: [],
      placeholder: '请输入真实姓名'
    }
    // {
    //   type: 'input',
    //   label: '电话号码',
    //   field: 'cellphone',
    //   rules: [],
    //   placeholder: '请输入电话号码'
    // },
    // {
    //   type: 'select',
    //   field: 'enable',
    //   label: '用户状态',
    //   rules: [],
    //   placeholder: '请选择用户状态',
    //   options: [
    //     { title: '启用', value: 1 },
    //     { title: '禁用', value: 0 }
    //   ]
    // },
    // {
    //   field: 'createTime',
    //   type: 'datepicker',
    //   label: '创建时间',
    //   rules: [],
    //   otherOptions: {
    //     startPlaceholder: '开始时间',
    //     endPlaceholder: '结束时间',
    //     type: 'daterange'
    //   }
    // }
  ]
}
