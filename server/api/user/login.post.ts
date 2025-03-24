import getUsers from '~/utils/getUsers'
import { z } from 'zod'
import md5 from 'md5'
import { setUserSession } from '#imports'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export default  defineEventHandler(async (event) => {
  const users = getUsers()
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const user = users.find(
    user => user.credentials.username === email && user.credentials.passphrase === md5(password)
  )

  if (user) {
    await setUserSession(event, {
      user: {
        name: user.name
      }
    })

    return user
  }

  throw createError({
    statusCode: 401,
    message: 'Неправильные логин/пароль'
  })
})