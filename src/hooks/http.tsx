import { useState, useEffect } from 'react'
import { type } from 'os';

type ForecastData = {
  city: object,
  cnt: number,
  cod: string,
  list: Array<object>,
  message: number
}

export const useHttp = (url: string, dependencies: Array<any>) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fetchedData, setFetchedData] = useState<ForecastData | null>(null);
    
    useEffect( () => {
        setIsLoading(true)
        fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then((data) => {
            setIsLoading(false)
            setFetchedData(data)
        })
        .catch(err => {
          setIsLoading(false)
        });
    }, dependencies)
   
    return [fetchedData, isLoading]
}