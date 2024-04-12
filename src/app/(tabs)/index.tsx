import { StyleSheet, View } from "react-native";

import { CIVIL_DEFENSE_ACTIONS } from "@users/lib/civil-defense-actions";
import AutoSlider from "@users/components/auto-slider";

export default function Screen() {
    return (
        <View style={styles.container}>
            <AutoSlider
                items={CIVIL_DEFENSE_ACTIONS}
                timer={3000}
                style={styles.slider}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    slider: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})