export const formatDate = date =>
  new Date(date).toLocaleString('pt-br', {
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  })
