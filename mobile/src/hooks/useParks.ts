import { useState, useEffect } from "react";
import api from "../services/api";
import { User } from "./useSightings";

export interface Park {
  name: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  user: User;
}

const useParks = () => {
  const [parks, setParks] = useState<Park[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchParks = async () => {
    setLoading(true);

    try {
      const response = await api.get<Park[]>("/parks");
      setParks(response.data);
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

  const savePark = async (park: Park) => {
    setLoading(true);

    try {
      await api.post("/parks", park);
      await fetchParks();
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
    fetchParks();
  }, []);

  return { parks, savePark, fetchParks, loading, error };
};

export default useParks;
