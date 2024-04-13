import { Animated, Image, StyleSheet, type ViewStyle, type ViewProps } from "react-native"

import { useAutoSlide } from "@users/hooks/use-auto-slide";

import type { CivilDefenseType } from "@users/types";
import { Typography } from "@core/components/typography";
import { GradientContainer } from "@core/components/gradient-container";

interface AutoSliderProps extends ViewProps {
    items: CivilDefenseType
    timer: number
    customStyles?: ViewStyle

}

export default function AutoSlider({ items, timer, customStyles }: AutoSliderProps) {

    const { current, fadeAnim } = useAutoSlide(timer)

    return (
        <Animated.View
            style={[{ opacity: fadeAnim }, customStyles]}
        >
            <GradientContainer 
                colors={["transparent", "black"]}
                customStyles={styles.gradient}
            >
                <Typography
                    text={items[current].title}
                    customStyles={styles.title}
                />
            </GradientContainer>

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
        color: "white",
        textAlign: "center",
    },

    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },

    gradient: {
        position: "relative",
        marginTop: "auto",
        paddingBottom: 40,
        zIndex: 20,
        height: 1000
    },
})