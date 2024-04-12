import { View, Text, StyleSheet } from "react-native"
import { ITEM_WIDTH } from "@users/lib/item-width";
import { CivilDefenseVideoType } from "@users/types";

import YoutubeIframe from "react-native-youtube-iframe";

interface SceneProps {
    index: number,
    item: CivilDefenseVideoType
}

export const Scene = ({ item, index }: SceneProps) => {
    return (
        <View style={styles.container} key={index}>
            <YoutubeIframe
                videoId={item.link}
                height={200}
                width={"100%" as unknown as number}
            />
            <View style={styles.details_container}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Text style={styles.description}>{item.descripcion}</Text>
                <Text style={styles.date}>{item.fecha.toString()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: ITEM_WIDTH,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    details_container: {
        display: "flex",
        marginTop: 10,
        gap: 20,
        padding: 20
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    description: {
        fontSize: 16,
        fontWeight: "400",
    },

    date: {
        fontSize: 16,
        fontWeight: "400",
        opacity: .5
    }
})
