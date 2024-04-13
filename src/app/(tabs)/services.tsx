import { Typography } from "@core/components/typography";
import { civilDefense } from "@users/api/civil-defense";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { CivilDefenseServices, CivilDefenseServiceType } from "@users/types";
import { ServiceItem } from "@users/components/service-item";


export default function Services() {
    const [services, setServices] = useState<CivilDefenseServiceType[]>([])

    useEffect(() => {
        async function getData() {
            const listOfServices: CivilDefenseServices = await civilDefense("/servicios.php")
            setServices(listOfServices.datos)
        }

        getData()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Typography
                text="Listado de servicios ofrecidos"
            />

            <FlatList
                data={services}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ServiceItem {...item} />}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 30
    },

    list: {
        display: "flex",
        gap: 20
    }
})
