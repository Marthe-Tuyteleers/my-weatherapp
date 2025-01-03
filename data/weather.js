import fetcher from './_fetcher'
import useSWR from 'swr'
import { API_URL } from '@/constants/Api'

export default function useMessages () {
  const { data, error, isLoading } = useSWR(`http://api.weatherstack.com/current?access_key=4f07fab4b8816616afce920e232a8f47&query=Antwerpen`, fetcher)
  
  return {
    data,
    isLoading,
    isError: error
  }
}