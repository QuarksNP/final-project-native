import { Typography } from "@core/components/typography"
import { StyleSheet, View } from "react-native"

interface AchievementsItemProps {
    title: string,
    description: string
}

export const AchievementsItem = ({ title, description }: AchievementsItemProps) => {
    return (
        <View style={styles.container}>
            <Typography 
                subTitle
                text={title}
            />

            <Typography 
                content
                text={description}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 5
    }
})
