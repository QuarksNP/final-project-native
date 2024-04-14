import { useEffect, useRef, useState } from "react"

import Carousel from "react-native-snap-carousel"

import { SLIDER_WIDTH } from "@users/lib/slider-width"
import { ITEM_WIDTH } from "@users/lib/item-width"
import { Scene } from "./scene-item"

import { CivilDefenseVideoType } from "@users/types"
import { useData } from "@users/hooks/use-data"
import { Spinner } from "@core/components/spinner"

export const CarouselOfVideos = () => {
    const isCarousel = useRef(null)

    const { data: civilDefenseVideos, isLoading } = useData<CivilDefenseVideoType[]>("/videos.php")

    if (isLoading) return <Spinner />

    if (!civilDefenseVideos) return null

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