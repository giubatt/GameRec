const API_URL = 'https://secret-stream-44245.herokuapp.com/api'
const RECOMMENDATION_API_URL = 'https://shielded-temple-04000.herokuapp.com/api'

export const getGames = async (query) => {
  const response = await fetch(`${API_URL}/searchGame/${query}`)

  const data = await response.json()

  return data.slice(0,3)
}

export const getGame = async (id) => {
  const response = await fetch(`${API_URL}/games/${id}`)

  const data = await response.json()

  return data
}

export const getRecommendation = async (gameId) => {
  const game = await getGame(gameId)
  const response = await fetch(`${RECOMMENDATION_API_URL}/recommendation?game_slug=${game?.slug}`)

  const data = await response.json()

  if (data === 'key error') throw new Error('invalid game')

  return data
}
