import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePostRequest = (url: string, data: object, dependencies: Array<any>) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);  

    let returnedData = null;
    console.log('** usepost request data **', data);
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        axios.post(url, data)
          .then(function (response) {
            console.log(response);
            setIsLoading(false);
          })
          .catch(function (error) {
            setIsLoading(false);
            setIsError(true);
        });
      };
      
      fetchData();
    }, dependencies);
  
    return [{ returnedData, isLoading, isError }];
  }
