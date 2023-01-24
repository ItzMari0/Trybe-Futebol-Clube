const wrongEmail = {
  email: 'user@use.com',
  password: 'secret_user'
}

const wrongPassword = {
  email: 'user@user.com',
  password: 'secretuser'
}

const missingEmail = {
  email: '',
  password: 'secret_user'
}

const missingPassword = {
  email: 'user@user.com',
  password: ''
}

const userLogin = {
  email: 'user@user.com',
  password: 'secret_user'
}

const user = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
}

export {
  wrongEmail,
  wrongPassword,
  missingEmail,
  missingPassword,
  userLogin,
  user,
}
