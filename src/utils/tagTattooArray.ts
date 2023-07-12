type Post = {
    id: number
    image: string
    tag: string
    title: string
    link: string
    content: string
}

const tagTattooArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/tattoo.jpeg',
        tag: 'style',
        title: "Tattoo ideas for men's",
        link: '/post/Tattoo-ideas-for-mens',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
    {
        id: 2,
        image: '/images/images-posts/miller.jpeg',
        tag: 'music',
        title: 'Mac Miller and his last album',
        link: '/post/Mac-Miller-and-his-last-album',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
]

export default tagTattooArray
