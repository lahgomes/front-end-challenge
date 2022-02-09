import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [selectedGenres, setSelectedGenres] = useState([])

  const handleFilterGenres = (e, idMovie) => {
    if (e.target.checked) {
      setSelectedGenres(prevState => [...prevState, idMovie])
      return
    }

    const removeGenres = selectedGenres.filter(value => value !== idMovie)
    setSelectedGenres(removeGenres)
  }
  return (
    <GlobalContext.Provider value={{ selectedGenres, handleFilterGenres }}>
      {children}
    </GlobalContext.Provider>
  )
}
