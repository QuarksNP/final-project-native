import { Tabs } from "expo-router";

import { Octicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={
                    {
                        title: "Inicio",
                        tabBarIcon: () => <Octicons name="home" size={24} color="black" />
                    }
                }
            />

            <Tabs.Screen
                name="videos"
                options={
                    {
                        title: "Videos",
                        tabBarIcon: () => <Octicons name="video" size={24} color="black" />
                    }
                }
            />
        </Tabs>
    )
}