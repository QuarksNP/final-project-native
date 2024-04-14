import { civilDefense } from "@users/api/civil-defense"
import { useEffect, useState } from "react"

export const useData = <T extends any[]>(apiEndPoint: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<T | null>()

    useEffect(() => {
        const getData = (async() => {
            const response = await civilDefense(apiEndPoint)
            setIsLoading(false)
            setData(response.datos)
        })()
    }, [])


    return { data, isLoading }
}