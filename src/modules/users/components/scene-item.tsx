import { View, StyleSheet } from "react-native"
import { ITEM_WIDTH } from "@users/lib/item-width";
import { CivilDefenseVideoType } from "@users/types";

import YoutubeIframe from "react-native-youtube-iframe";
import { Typography } from "@core/components/typography";

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
                <Typography
                    subTitle 
                    text={item.titulo} 
                />
                <Typography
                    content
                    text={item.descripcion} />
                <Typography
                    date
                    text={item.fecha as string}
                />
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
})
