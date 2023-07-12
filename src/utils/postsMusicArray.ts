type Post = {
    id: number
    image: string
    tag: string
    title: string
    link: string
    content: string
}

const postsMusicArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/festivals.jpeg',
        tag: 'music',
        title: 'Top 10 best festival',
        link: '/post/Top-10-best-festival',
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

export default postsMusicArray
