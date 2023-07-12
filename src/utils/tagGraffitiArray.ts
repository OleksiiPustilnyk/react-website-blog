type Post = {
    id: number
    image: string
    tag: string
    tagLink: string
    title: string
    link: string
    content: string
}

const tagGraffitiArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/graff.jpeg',
        tag: 'style',
        tagLink: '/tag/style',
        title: 'Graffiti: street art or crime?',
        link: '/post/Gtaffiti-street-art-or-crime?',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
]

export default tagGraffitiArray
