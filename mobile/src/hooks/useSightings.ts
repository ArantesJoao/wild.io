import { useState, useEffect } from "react"
import api from "../services/api"

export interface User {
  name: String
  email: String
  google_id: String
}

export interface Sighting {
  identified_species: boolean
  species?: string
  description: string
  location: {
    latitude: number
    longitude: number
  }
  date: Date
  photo?: string
  user: User
}

const useSightings = () => {
  const [sightings, setSightings] = useState<Sighting[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchSightings = async () => {
    setLoading(true)

    try {
      const response = await api.get<Sighting[]>("/sightings")
      setSightings(response.data)
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      } else {
        setError(new Error("Ocorreu um erro desconhecido."))
      }
    } finally {
      setLoading(false)
    }
  }

  const saveSighting = async (sighting: Sighting) => {
    setLoading(true)

    try {
      console.log(sighting)
      await api.post("/sightings", sighting)
      await fetchSightings()
    } catch (err) {
      if (err instanceof Error) {
        console.log(err)
        setError(err)
      } else {
        setError(new Error("Ocorreu um erro desconhecido."))
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSightings()
  }, [])

  return { sightings, saveSighting, fetchSightings, loading, error }
}

export default useSightings
