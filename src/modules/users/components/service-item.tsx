import { Typography } from "@core/components/typography";
import { CivilDefenseServiceType } from "@users/types";
import { Image, StyleSheet, View } from "react-native";

export const ServiceItem = ({ nombre, descripcion, foto }: CivilDefenseServiceType) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: foto }}
                width={100}
                style={styles.image}
            />

            <View style={styles.details}>
                <Typography
                    subTitle
                    text={nombre}
                />

                <Typography
                    content
                    text={descripcion}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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