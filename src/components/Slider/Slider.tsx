import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Navigation,
    Pagination,
    A11y,
    EffectFade,
    Keyboard,
    Autoplay,
} from 'swiper'
import sliderArray from 'utils/sliderArray'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Slider.scss'

type Props = {}

const Slider = ({}: Props) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 10) + '</span>'
        },
    }
    return (
        <Swiper
            modules={[
                Navigation,
                Pagination,
                A11y,
                EffectFade,
                Keyboard,
                Autoplay,
            ]}
            spaceBetween={50}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            autoHeight={true}
            speed={800}
            // centeredSlides={true}
            keyboard={{
                enabled: true,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // direction={'vertical'}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
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
    )
}
export default Slider
