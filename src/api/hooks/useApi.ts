import { useState } from 'react'
import { useApiStatus } from '@/api/hooks/useApiStatus'
import { PENDING, SUCCESS, ERROR } from '@/api/constants/apiStatus'

interface UserApiConfig<T> {
  initialData?: T
}

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>

export function useApi<TData = unknown, TError = unknown>(
  fn: ApiFunction<TData>,
  config: UserApiConfig<TData> = {}
) {
  const { initialData } = config
  const [data, setData] = useState<TData | undefined>(initialData)
  const [error, setError] = useState<TError | unknown>()
  const { status, setStatus, ...normalisedStatus } = useApiStatus()

  const exec = async <A>(...args: A[]) => {
    try {
      setStatus(PENDING)
      const data = await fn(...args)
      setData(data)
      setStatus(SUCCESS)
      return {
        data,
        error: null,
      }
    } catch (error) {
      setError(error)
      setStatus(ERROR)
      return {
        error,
        data: null,
      }
    }
  }

  return {
    data,
    setData,
    status,
    setStatus,
    error,
    exec,
    ...normalisedStatus,
  }
}
