import { View, Image, StyleSheet, type ViewStyle, type ImageStyle } from "react-native"
import { Typography } from "./typography"

interface ListItemProps {
    containerStyles?: ViewStyle
    detailsStyles?: ViewStyle
    imageStyles?: ImageStyle
    title: string
    content: string
    date?: string
    image?: string
}

export const ListItem = ({ title, content, date, image, containerStyles, imageStyles, detailsStyles }: ListItemProps) => {
    return (
        <View style={containerStyles}>

            <Image
                style={imageStyles}
                width={100}
                source={{ uri: image }}
            />

            <View style={detailsStyles}>
                <Typography
                    subTitle
                    text={title}
                />
                <Typography
                    content
                    text={content}
                />

                {date && <Typography
                    date
                    text={date}
                />}
            </View>
        </View>
    )
}