import { ListItem } from "@core/components/list-item";
import { Typography } from "@core/components/typography";
import { useData } from "@users/hooks/use-data";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";

import type { MeasureType } from "@users/types";
import { Spinner } from "@core/components/spinner";

export default function Measures() {
    const { data: measures, isLoading } = useData<MeasureType[]>("/medidas_preventivas.php")

    console.log(measures)

    if (isLoading) return <Spinner />

    if (!measures) return null

    return (
        <SafeAreaView style={styles.container}>
            <Typography 
                text="⚠️ Recomendaciones y protocolos de seguridad"
                customStyles={{ textAlign: "center" }}
            />

            <FlatList
                data={measures}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.titulo}
                renderItem={({ item: { titulo, descripcion, foto } }) =>

                    <ListItem
                        title={titulo}
                        content={descripcion}
                        image={foto}
                        containerStyles={styles.item_container}
                        imageStyles={styles.image}
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
        gap: 60
    },

    image: {
        width: "100%",
        height: 300
    },

    item_container: {
        display: "flex",
        gap: 20
    }
})