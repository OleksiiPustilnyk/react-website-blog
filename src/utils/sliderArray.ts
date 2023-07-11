type Slide = {
    id: number
    image: string
    alt: string
    title: string
    link: string
    tag: string
}

const sliderArray: Slide[] = [
    {
        id: 1,
        image: '/images/images-slider/image-slide6.jpg',
        alt: 'image-slide1',
        title: "Best Rapper in 90's",
        link: '/post/Best-Rapper-in-90',
        tag: 'music',
    },
    {
        id: 2,
        image: '/images/images-slider/image-slide7.jpg',
        alt: 'image-slide2',
        title: 'StreetWear',
        link: '/post/StreetWear',
        tag: 'style',
    },
    {
        id: 3,
        image: '/images/images-slider/image-slide12.jpg',
        alt: 'image-slide3',
        title: 'Classic Japan cars',
        link: '/post/Classic-Japan-cars',
        tag: 'cars',
    },
    {
        id: 4,
        image: '/images/images-slider/image-slide13.jpg',
        alt: 'image-slide4',
        title: 'Graffiti: street art or crime?',
        link: '/post/Gtaffiti-street-art-or-crime?',
        tag: 'style',
    },
]

export default sliderArray
