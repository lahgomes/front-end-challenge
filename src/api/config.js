export const IMAGE_URL = 'https://image.tmdb.org/t/p/w400'

export const BASE_URL = 'https://api.themoviedb.org/3/'

export const handlingAPIErrors = status => {
  const StatusError = {
    404: 'Sua busca não encontrou nenhum resultado, por favor tente novamente.',
    401: 'Chave de API inválida.',
  }

  return StatusError[status] || 'Um erro foi encontrado, tente novamente.'
}

export const fetchAPI = (url, page) => {
  if (page) {
    return fetch(
      `${BASE_URL}${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=${page}`,
    )
  }

  return fetch(
    `${BASE_URL}${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
  )
}
