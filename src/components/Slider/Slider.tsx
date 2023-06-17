import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Pagination,
    A11y,
    EffectFade,
    Autoplay,
    Thumbs,
    FreeMode,
    Navigation,
} from 'swiper'
import sliderArray from 'utils/sliderArray'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import './Slider.scss'
import { useState } from 'react'

type Props = {}

const Slider = (props: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    return (
        <>
            <Swiper
                modules={[
                    Pagination,
                    A11y,
                    EffectFade,
                    Autoplay,
                    Thumbs,
                    FreeMode,
                    Navigation,
                ]}
                spaceBetween={10}
                centeredSlides={true}
                rewind={true}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                autoHeight={true}
                speed={800}
                loop={true}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper2"
            >
                {sliderArray.map(({ id, image, alt, title, tag }) => (
                    <>
                        <SwiperSlide key={id}>
                            <div className="slide">
                                <img
                                    src={image}
                                    alt={alt}
                                    className="slider-image"
                                />
                                <div className="slider-content">
                                    <div className="slider-tag">{tag}</div>
                                    <div className="slider-title">{title}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {sliderArray.map(({ id, title, tag }) => (
                    <>
                        <SwiperSlide key={id}>
                            <div className="slide-mini">
                                <div className="slider-content-mini">
                                    <div className="slider-tag-mini">{tag}</div>
                                    <div className="slider-title-mini">
                                        {title}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </>
    )
}
export default Slider
