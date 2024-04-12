import { CarouselOfVideos } from "@users/components/carousel-of-videos";
import { StyleSheet, Text, View } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galería de videos educativos y formativos</Text>

            <CarouselOfVideos />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 20,
        gap: 20
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
    },
})