export const formatDate = (date, formato = 'numeric') => {
  return new Date(date).toLocaleString('pt-br', {
    day: 'numeric',
    year: 'numeric',
    month: formato === 'short' ? 'short' : 'numeric',
  })
}

export const convertHours = minutos => {
  const horas = Math.floor(minutos / 60)
  const min = minutos % 60
  const textoHoras = `00${horas}`.slice(-2)
  const textoMinutos = `00${min}`.slice(-2)

  return `${textoHoras}h ${textoMinutos}m`
}
