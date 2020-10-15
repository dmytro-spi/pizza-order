//Проверка на пустое поле
export const required = value => value ? undefined : 'Поле не может быть пустым'

//Проверка на email
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Не верный email' : undefined; 

//Проверка на максимальную длину
export const maxLength = max => value =>
  value && value.length > max ? `Email более ${max} символов` : undefined

//Проверка на минимальную длину
export const minLength = min => value =>
  value && value.length < min ? `Пароль меньше ${min} символов` : undefined

//Проверка на совпадение паролей
export const matchPassword = (value, allValues) =>
value !== allValues.password
  ? 'Пароль не совпадает'
  : undefined;