import { Animated, Image, StyleSheet, Text, View, type ViewProps } from "react-native"

import { useAutoSlide } from "@users/hooks/use-auto-slide";

import type { CivilDefenseType } from "@users/types";

interface AutoSliderProps extends ViewProps {
    items: CivilDefenseType;
    timer: number;
}

export default function AutoSlider({ items, timer, ...props }: AutoSliderProps) {

    const { current, fadeAnim } = useAutoSlide(timer)

    return (
        <Animated.View
            {...props} 
            style={{ opacity: fadeAnim, ...props.style as any }}
        >
            <Text style={styles.title}>{items[current].title}</Text>

            <View style={styles.layer}></View>
            <Image 
                source={items[current].image} 
                style={styles.image}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
    },

    title: {
        position: "relative",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        zIndex: 20,
    },

    layer: {
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        opacity: .7,
        zIndex: 10
    },

    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
})