import { useState, useEffect } from "react";
import api from "../services/api";

export interface Flora {
  identified_species: boolean;
  species?: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  date: Date;
  photo?: string;
}

const useFlora = () => {
  const [floraSightings, setFloraSightings] = useState<Flora[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchFlora = async () => {
    setLoading(true);

    try {
      const response = await api.get<Flora[]>("/flora");
      setFloraSightings(response.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Ocorreu um erro desconhecido."));
      }
    } finally {
      setLoading(false);
    }
  };

  const saveFlora = async (flora: Flora) => {
    setLoading(true);

    try {
      await api.post("/flora", flora);
      await fetchFlora();
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        setError(err);
      } else {
        setError(new Error("Ocorreu um erro desconhecido."));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlora();
  }, []);

  return { floraSightings, saveFlora, fetchFlora, loading, error };
};

export default useFlora;
