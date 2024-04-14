import { Typography } from "@core/components/typography";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { CivilDefenseServiceType } from "@users/types";
import { ServiceItem } from "@users/components/service-item";
import { useData } from "@users/hooks/use-data";
import { Spinner } from "@core/components/spinner";


export default function Services() {
    const { data: services, isLoading } = useData<CivilDefenseServiceType[]>("/videos.php")

    if(isLoading) return <Spinner />

    if (!services) return null

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
