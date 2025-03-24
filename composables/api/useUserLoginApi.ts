import type { UserModel } from '~/models/user.model'

interface UserLoginApiParams {
  email: string
  password: string
}

const useUserLoginApi = () => {
  const data = ref<UserModel | undefined>()
  const error = ref('')
  const { $api } = useNuxtApp()

  return {
    userLoginApi: async (params: UserLoginApiParams) => {
      try {
        data.value = await $api('/user/login', {
          method: 'post',
          body: params
        })
      } catch(e) {
        error.value = 'Ошибка аутентификации. Проверьте логин/пароль и повторите позже'
      }
    },
    data,
    error
  }
}

export default useUserLoginApi