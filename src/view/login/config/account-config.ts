export const rules = {
  username: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,12}$/,
      message: '用户名必须是5-12个字母或者数字',
      trigger: 'blur'
    }
  ],
  passwd: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,12}$/,
      message: '密码必须是5-12个字母或者数字',
      trigger: 'blur'
    }
  ]
}
