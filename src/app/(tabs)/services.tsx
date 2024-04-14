import { Typography } from "@core/components/typography";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { CivilDefenseServiceType } from "@users/types";
import { useData } from "@users/hooks/use-data";
import { Spinner } from "@core/components/spinner";
import { ListItem } from "@core/components/list-item";


export default function Services() {
    const { data: services, isLoading } = useData<CivilDefenseServiceType[]>("/servicios.php")

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
                renderItem={({ item: { nombre, descripcion, foto } }) => 
                    <ListItem  
                        title={nombre}
                        content={descripcion}
                        image={foto}
                        containerStyles={styles.item_container}
                        imageStyles={styles.image}
                        detailsStyles={styles.details}
                    />}
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
    },

    item_container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10

    },

    image: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    details: {
        flex: 1,
        gap: 10,
        padding: 20,
        width: "100%"
    }
})
