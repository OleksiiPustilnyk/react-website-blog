import { Card, CardContent } from '@mui/material'

import './PostListItem.scss'

type Props = {
    image: string
    tag: string
    title: string
    content: string
}
const PostListItem = (props: Props) => {
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <CardContent className="post" sx={{ padding: '0' }}>
                <div className="post-img">
                    <img src={props.image} alt="" />
                </div>
                <div className="post-tag">{props.tag}</div>
                <div className="post-like"></div>
                <div className="post-title">{props.title}</div>
                <p className="post-content">{props.content}</p>
                <div className="post-author">
                    <div className="post-author-avatar"></div>
                    <div className="post-author-name">Will Smith</div>
                    <div className="post-author-date">05.06.2023</div>
                </div>
            </CardContent>
        </Card>
    )
}
export default PostListItem
