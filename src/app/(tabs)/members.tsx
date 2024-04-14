import { ListItem } from "@core/components/list-item";
import { Spinner } from "@core/components/spinner";
import { Typography } from "@core/components/typography";
import { useData } from "@users/hooks/use-data";
import type { MembersType } from "@users/types";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

export default function Members() {
    const { data: members, isLoading } = useData<MembersType[]>("/miembros.php")
    
    if(isLoading) return <Spinner />

    if (!members) return null

    return (
        <SafeAreaView style={styles.container}>
            <Typography
                text="🛠️Listado de servicios ofrecidos"
                customStyles={{ textAlign: "center" }}
            />

            <FlatList
                data={members}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { nombre, cargo, foto } }) => 
                    <ListItem  
                        title={nombre}
                        content={cargo}
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