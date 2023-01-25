export const toMoney = (value) => {
  let val = parseFloat(value)
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(val)
}
export const fromMoney = (value) => {
  let val = value
  val = val.replace('R$ ', '')
  val = val.replace('.', '')
  val = val.replace(',', '.')
  return val
}
