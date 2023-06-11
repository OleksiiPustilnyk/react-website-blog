import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, EffectFade, Keyboard } from 'swiper'
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
            modules={[Navigation, Pagination, A11y, EffectFade, Keyboard]}
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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
        >
            {sliderArray.map(({ id, image, title }) => (
                <>
                    <SwiperSlide key={id} className="slide">
                        <img src={image} alt={title} className="slider-image" />
                    </SwiperSlide>
                </>
            ))}
        </Swiper>
    )
}
export default Slider
