import { Tabs } from "expo-router";

import { Octicons, Feather, AntDesign } from '@expo/vector-icons';

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

            <Tabs.Screen
                name="history"
                options={
                    {
                        title: "History",
                        tabBarIcon: () => <Feather name="shield" size={24} color="black" />
                    }
                }
            />

            <Tabs.Screen
                name="services"
                options={
                    {
                        title: "Services",
                        tabBarIcon: () => <AntDesign name="infocirlceo" size={24} color="black" />
                    }
                }
            />
        </Tabs>
    )
}