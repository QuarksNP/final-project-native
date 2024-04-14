import { Typography } from "@core/components/typography";
import { LocationType } from "@users/types";
import { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { Link, router } from "expo-router";

interface LocationItemProps extends LocationType {
    route: string
}

const LocationItem = ({ telefono, codigo, coordinador, edificio, route }: LocationItemProps) => {
    return (
        <View
            style={styles.container}
        >
            <Pressable
                onPress={() => router.navigate({ pathname: route, params: { id: codigo } })}
                style={[styles.field, { justifyContent: "space-between", alignItems: "center" }]}>

                <View style={{ flex: 1 }}>
                    <Typography text={codigo} />

                    <View style={styles.field}>
                        <Typography
                            text="Coordinador: "
                            customStyles={styles.label}
                        />

                        <Typography
                            date
                            text={coordinador}
                            customStyles={styles.value}
                        />
                    </View>

                    <View style={styles.field}>
                        <Typography
                            text="Edificio: "
                            customStyles={styles.label}
                        />

                        <Typography
                            date
                            text={edificio}
                            customStyles={styles.value}
                        />
                    </View>

                    <View style={styles.field}>
                        <Typography
                            text="Telefono: "
                            customStyles={styles.label}
                        />

                        <Typography
                            date
                            text={telefono}
                            customStyles={styles.value}
                        />
                    </View>
                </View>

                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />

            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        padding: 20,
        borderRadius: 10,
    },

    field: {
        display: "flex",
        flexDirection: "row",
    },

    label: {
        fontSize: 16,
        fontWeight: "normal"
    },

    value: {
        flex: 1
    }

})

export default memo(LocationItem);