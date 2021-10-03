const validaremail = email => {
  const regex = new RegExp('^(.+)@(.+)$')
  return regex.test(email)
}

exports.validaremail = validaremail
