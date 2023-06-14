import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Pagination,
    A11y,
    EffectFade,
    Keyboard,
    Autoplay,
    Thumbs,
    FreeMode,
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
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <Swiper
                modules={[
                    Pagination,
                    A11y,
                    EffectFade,
                    Keyboard,
                    Autoplay,
                    Thumbs,
                    FreeMode,
                ]}
                spaceBetween={10}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                autoHeight={true}
                speed={800}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                keyboard={{
                    enabled: true,
                }}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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
                                    <h2 className="slider-title">{title}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
            <Swiper
                onSwiper={() => setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs, FreeMode]}
                className="mySwiper"
            >
                {sliderArray.map(({ id, image, alt }) => (
                    <>
                        <SwiperSlide key={id}>
                            <div className="slide">
                                <img
                                    src={image}
                                    alt={alt}
                                    className="slider-image"
                                />
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </>
    )
}
export default Slider
