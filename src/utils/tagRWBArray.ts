type Post = {
    id: number
    image: string
    tag: string
    tagLink: string
    title: string
    link: string
    content: string
}

const tagRWBArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/rwb.jpeg',
        tag: 'cars',
        tagLink: '/tag/cars',
        title: 'RWB - RAUH-Welt Begriff',
        link: '/post/RWB-RAUH-Welt-Begriff',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
]

export default tagRWBArray
