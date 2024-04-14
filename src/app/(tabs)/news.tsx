import { Typography } from "@core/components/typography"
import { SafeAreaView, FlatList, StyleSheet } from "react-native"
import { useData } from "@users/hooks/use-data"
import { Spinner } from "@core/components/spinner"

import type { CivilDefenseNewsType } from "@users/types"
import { ListItem } from "@core/components/list-item"

export default function News() {
    const { data: news, isLoading } = useData<CivilDefenseNewsType[]>("/noticias.php")

    if(isLoading) return <Spinner />

    if(!news) return null

    return (
        <SafeAreaView style={styles.container}>
            <Typography
                text="📰 Últimas noticias"
            />

            <FlatList
                data={news}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { titulo, contenido, foto, fecha } }) => 
                    <ListItem 
                        title={titulo}
                        content={contenido}
                        image={foto}
                        date={fecha}
                        containerStyles={styles.item_container}
                        imageStyles={styles.image}
                    />
                }
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
        gap: 40
    },

    item_container: {
        display: "flex",
        gap: 20
    },

    image: {
        width: "100%",
        objectFit: "cover",
        height: 200,
        borderRadius: 20
    }
})