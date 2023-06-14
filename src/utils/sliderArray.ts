type Slide = {
    id: number
    image: string
    alt: string
    title: string
    tag: string
    titleSlide: string
}

const sliderArray: Slide[] = [
    {
        id: 1,
        image: '/images/images-slider/image-slide6.jpg',
        alt: 'image-slide1',
        title: 'Lorem ipsum dolor sit amet.',
        tag: 'test',
        titleSlide: 'test',
    },
    {
        id: 2,
        image: '/images/images-slider/image-slide12.jpg',
        alt: 'image-slide2',
        title: 'Lorem ipsum dolor sit.',
        tag: 'test',
        titleSlide: 'test',
    },
    {
        id: 3,
        image: '/images/images-slider/image-slide7.jpg',
        alt: 'image-slide3',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        tag: 'test',
        titleSlide: 'test',
    },
    {
        id: 4,
        image: '/images/images-slider/image-slide13.jpg',
        alt: 'image-slide4',
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tag: 'test',
        titleSlide: 'test',
    },
]

export default sliderArray
