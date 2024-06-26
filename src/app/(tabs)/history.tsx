import { ListItem } from "@core/components/list-item";
import { Typography } from "@core/components/typography";
import { ACHIEVEMENTS } from "@users/lib/achievements";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
    return (
        <SafeAreaView style={styles.container}>
            <Typography text="Evolución y logros de la Defensa Civil" />

            <FlatList 
                data={ACHIEVEMENTS}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.titulo}
                renderItem={({ item: { titulo, descripción } }) => 

                <ListItem 
                    title={titulo}
                    content={descripción}
                />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 30,
    },

    list: {
        display: "flex",
        gap: 20
    }
})
