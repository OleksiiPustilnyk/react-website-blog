type Post = {
    id: number
    image: string
    tag: string
    title: string
    link: string
    content: string
}

const tagStreetArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/stussy.jpeg',
        tag: 'style',
        title: 'StreetWear',
        link: '/post/StreetWear',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
    {
        id: 2,
        image: '/images/images-posts/graff.jpeg',
        tag: 'style',
        title: 'Graffiti: street art or crime?',
        link: '/post/Gtaffiti-street-art-or-crime?',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
    {
        id: 3,
        image: '/images/images-posts/boyz.jpeg',
        tag: 'music',
        title: "Best Rapper in 90's",
        link: '/post/Best-Rapper-in-90',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
]

export default tagStreetArray
