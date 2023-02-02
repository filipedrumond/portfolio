export const toStatusName = (id) => {
  switch (id) {
  case 1:
    return 'Disponível'
  case 2:
    return 'Em Análise'
  case 3:
    return 'Aprovado / Pago'
  default:
    return 'Erro'
  }
}
