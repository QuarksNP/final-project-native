import { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"

export const useAutoSlide = (timer: number) => {
    const [current, setCurrent] = useState(0)
    const fadeAnim = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % 4)
        }, timer)
        
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0.5,
                duration: 0,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start()
    }, [current, fadeAnim])

    return { current, fadeAnim }
}