type Post = {
    id: number
    image: string
    tag: string
    tagLink: string
    title: string
    link: string
    content: string
}

const tagGamesArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/rocky.jpeg',
        tag: 'cars',
        tagLink: '/tag/cars',
        title: 'A$ap Rocky in NFS Unbound',
        link: '/post/Asap-Rocky-in-NFS-Unbound',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
]

export default tagGamesArray
