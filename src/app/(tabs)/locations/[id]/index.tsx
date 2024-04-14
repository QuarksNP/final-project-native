import { useData } from "@users/hooks/use-data";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Spinner } from "@core/components/spinner";

import { Typography } from "@core/components/typography";

import type { LocationType } from "@users/types";

import MapView, { Marker } from "react-native-maps";

export default function LocationById() {
    const { data: locations, isLoading } = useData<LocationType[]>("/albergues.php")

    const { id } = useLocalSearchParams()

    const currentLocation = locations?.filter(location => location.codigo === id)[0]

    if (isLoading) return <Spinner />

    if (!locations || !currentLocation) return null

    console.log(currentLocation.lat)

    return (
        <View style={styles.container}>
            <Typography 
                text="Mapa interactivo mostrando albergues con detalles al clickear"
                customStyles={{ textAlign: "center", marginTop: 20 }}/>

            <Typography subTitle text={currentLocation.codigo} />

            <View>
                <View style={styles.field}>
                    <Typography text="Ciudad: " customStyles={styles.label} />
                    <Typography date text={currentLocation.ciudad} customStyles={styles.label} />
                </View>

                <View style={styles.field}>
                    <Typography text="Edificio: " customStyles={styles.label} />
                    <Typography date text={currentLocation.edificio} customStyles={styles.label} />
                </View>

                <View style={styles.field}>
                    <Typography text="Coordinador: " customStyles={styles.label} />
                    <Typography date text={currentLocation.coordinador} customStyles={styles.label} />
                </View>

                <View style={styles.field}>
                    <Typography text="Telefono: " customStyles={styles.label} />
                    <Typography date text={currentLocation.telefono} customStyles={styles.label} />
                </View>

                {currentLocation.capacidad && <View style={styles.field}>
                    <Typography text="Capacidad: " customStyles={styles.label} />
                    <Typography date text={currentLocation.capacidad} customStyles={styles.label} />
                </View>}
            </View>

            <MapView
                initialRegion=
                {{
                    latitude: Number(currentLocation.lng),
                    longitude: Number(currentLocation.lat),
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }}

                style={styles.map}

            >

                <Marker coordinate={{
                    latitude: Number(currentLocation.lng),
                    longitude: Number(currentLocation.lat),
                }}
                    title={currentLocation.ciudad}
                    description={currentLocation.edificio}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center"
    },

    field: {
        display: "flex",
        flexDirection: "row"
    },

    label: {
        fontSize: 16,
        fontWeight: "normal"
    },

    map: {
        width: '100%',
        height: '100%',
    },
})