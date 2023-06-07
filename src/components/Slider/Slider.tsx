import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import slideSlider from 'utils/slideSlider'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {}

const Slider = ({}: Props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slideSlider.map(({ id, image, title }) => (
                <>
                    <SwiperSlide key={id} className="slide">
                        <img src={image} alt={title} />
                    </SwiperSlide>
                </>
            ))}
        </Swiper>
    )
}
export default Slider
