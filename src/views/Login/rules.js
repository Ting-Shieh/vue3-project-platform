export function validatePassword () {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密碼不能少於6位'))
    } else {
      callback()
    }
  }
}
