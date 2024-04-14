import type { LocationType } from "@users/types"

import { useState } from "react"

export const useFilterLocations = (currentLocations: LocationType[]) => {
    const [filteredLocations, setFilteredLocations] = useState<LocationType[]>([])

    function handleFilterByCode(currentCode: string) {
        const value = currentCode.toLowerCase()

        const filter = currentLocations.filter(location => {
            const code = location.codigo.toLowerCase()

            return code.startsWith(value)
        })

        setFilteredLocations(filter)

        if(currentCode.length === 0 || !currentCode) {
            setFilteredLocations([])
        }
    }

    return { filteredLocations, handleFilterByCode }
}