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
      label: '角色名',
      rules: [],
      placeholder: '请输入角色名'
    },
    {
      type: 'input',
      label: '角色介绍',
      field: 'intro',
      rules: [],
      placeholder: '请输入角色介绍',
      isHidden: true
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
    //   field: 'departmentId',
    //   label: '选择部门',
    //   rules: [],
    //   placeholder: '请选择部门',
    //   options: [
    //     { title: '人事部', value: 1 },
    //     { title: '技术部', value: 0 }
    //   ]
    // }
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
