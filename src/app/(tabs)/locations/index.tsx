import { useData } from "@users/hooks/use-data";
import { useFilterLocations } from "@users/hooks/use-filter-locations";
import { FlatList, SafeAreaView, StyleSheet, TextInput } from "react-native";

import { Spinner } from "@core/components/spinner";
import LocationItem from "@users/components/location-item";
import { Typography } from "@core/components/typography";

import { type LocationType } from "@users/types";

export default function Locations() {
    const { data: locations, isLoading } = useData<LocationType[]>("/albergues.php")

    const { filteredLocations, handleFilterByCode } = useFilterLocations(locations ?? [])

    if (isLoading) return <Spinner />

    if (!locations) return null

    return (
        <SafeAreaView style={styles.container}>
            <Typography 
                text="🏠Lista y búsqueda de albergues, con detalles al seleccionar uno"
                customStyles={{ textAlign: "center" }}
            />
            <TextInput
                style={styles.search}
                placeholderTextColor="white"
                placeholder="Filter by code DO-..."
                onChangeText={handleFilterByCode}
            />

            <FlatList 
                data={!filteredLocations.length ? locations : filteredLocations}
                contentContainerStyle={styles.list}
                initialNumToRender={10}
                refreshing={true}
                keyExtractor={(item) => item.codigo}
                renderItem={({ item }) => (
                    
                    <LocationItem {...item} route="locations/[id]"/>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 40
    },

    search: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 10,
        color: "white"
    },

    list: {
        display: "flex",
        gap: 50
    },
})