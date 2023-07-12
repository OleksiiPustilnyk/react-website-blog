type Post = {
    id: number
    image: string
    tag: string
    title: string
    link: string
    content: string
}

const postsCarsArray: Post[] = [
    {
        id: 1,
        image: '/images/images-posts/miata.jpeg',
        tag: 'cars',
        title: 'Classic Japan cars',
        link: '/post/Classic-Japan-cars',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
    {
        id: 2,
        image: '/images/images-posts/rocky.jpeg',
        tag: 'cars',
        title: 'A$ap Rocky in NFS Unbound',
        link: '/post/Asap-Rocky-in-NFS-Unbound',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
    {
        id: 3,
        image: '/images/images-posts/rwb.jpeg',
        tag: 'cars',
        title: 'RWB - RAUH-Welt Begriff',
        link: '/post/RWB-RAUH-Welt-Begriff',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus dolores explicabo, autem iure nostrum commodi voluptatem itaque eaque id...',
    },
]

export default postsCarsArray
