import { StyleSheet, Text, type TextStyle } from "react-native"

interface TypographyProps {
    text: string
    subTitle?: boolean
    content?: boolean
    date?: boolean
    customStyles?: TextStyle
}

export const Typography = ({ text, subTitle, content, date, customStyles }: TypographyProps) => {
    return (
        <Text style={[styles(subTitle, content, date).text, customStyles]}>{text}</Text>
    )
}

const styles = (subTitle?: boolean, content?: boolean, date?: boolean) => {
    const fontStyle:
        {
            fontSize: number
            opacity: number
            fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold"

        } = { fontSize: 24, fontWeight: "bold", opacity: 1 }

    if (content || date) {
        fontStyle.fontSize = 16
        fontStyle.fontWeight = "400"

    }
    if (subTitle) {
        fontStyle.fontSize = 20
        fontStyle.fontWeight = "400"
    }

    if (date) {
        fontStyle.opacity = 0.5
    }

    return StyleSheet.create({
        text: {
            ...fontStyle
        }
    })
}