export const formatDate = date =>
  new Date(date).toLocaleString('pt-br', {
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  })

export const convertHours = minutos => {
  const horas = Math.floor(minutos / 60)
  const min = minutos % 60
  const textoHoras = `00${horas}`.slice(-2)
  const textoMinutos = `00${min}`.slice(-2)

  return `${textoHoras}h ${textoMinutos}m`
}
