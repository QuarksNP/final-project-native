import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, type ViewStyle } from "react-native"

interface GradientContainerProps {
    colors: string[],
    locations?: number[]
    customStyles?: ViewStyle
}

export const GradientContainer = ({ children, colors, locations, customStyles }:
    React.PropsWithChildren<GradientContainerProps>) => {
    return (
        <LinearGradient
            style={[styles.gradient, customStyles]}
            {...{ colors, locations }}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: 500,
        gap: 10,
        display: 'flex',
        justifyContent: 'flex-end',
    },
})