import { useEffect, useRef, useState } from "react"

import Carousel from "react-native-snap-carousel"

import { SLIDER_WIDTH } from "@users/lib/slider-width"
import { ITEM_WIDTH } from "@users/lib/item-width"
import { Scene } from "./scene-item"

import { civilDefense } from "@users/api/civil-defense"
import { CivilDefenseVideos } from "@users/types"

export const CarouselOfVideos = () => {
    const isCarousel = useRef(null)

    const [civilDefenseVideos, setCivilDefenseVideos] = useState<CivilDefenseVideos | any>([])

    useEffect(() => {
        async function getData() {
            const galleryOfVideos: CivilDefenseVideos = await civilDefense("/videos.php")

            setCivilDefenseVideos(galleryOfVideos.datos)
        }

        getData()
    }, [])

    return (
        <Carousel
            ref={isCarousel}
            layout="default"
            data={civilDefenseVideos}
            renderItem={Scene}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView
        />
    )
}