import {
    Avatar,
    Card,
    CardContent,
    Container,
    TextareaAutosize,
    Grid,
} from '@mui/material'
import { useState } from 'react'

import './Comments.scss'

type Props = {}

type Comments = {
    img: string
    name: string
    text: string
    email: string
}

const Comments = (props: Props) => {
    const arrComments: Comments[] = [
        {
            img: '/images/images-avatar-comment/comment1.jpeg',
            name: 'Vin Diesel',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!',
            email: '',
        },
        {
            img: '/images/images-avatar-comment/comment2.jpeg',
            name: 'Adrien Brody',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!',
            email: '',
        },
        {
            img: '/images/images-avatar-comment/comment3.jpeg',
            name: 'Stephen Curry',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!',
            email: '',
        },
    ]

    const [comments, setComments] = useState<Comments[]>(arrComments)

    const [newComment, setNewComment] = useState<Comments>({
        img: '',
        name: '',
        text: '',
        email: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            newComment.name === '' ||
            newComment.text === '' ||
            newComment.email === ''
        ) {
            alert('All fields are required')
        } else {
            setComments((prevState) => {
                return [...prevState, newComment]
            })

            setNewComment({
                img: '',
                name: '',
                text: '',
                email: '',
            })
        }
    }

    return (
        <div>
            <Container maxWidth="lg" sx={{ padding: '20px' }}>
                <h2 className="comment-title">Comments</h2>
                {comments.map(({ img, name, text }, i) => (
                    <Card
                        className="comment-card"
                        variant="outlined"
                        sx={{
                            margin: '30px 0',
                        }}
                        key={i}
                    >
                        <CardContent className="comment-card-content">
                            <Grid container>
                                <Grid item md={1}>
                                    <Avatar
                                        alt="Donald Glover"
                                        src={img}
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </Grid>
                                <Grid item md={11}>
                                    <div className="contact-name-text">
                                        <div className="comment-name">
                                            {name}
                                        </div>
                                        <div className="comment-text">
                                            {text}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}

                <form onSubmit={onSend}>
                    <div className="comment-input-title">
                        <h3 className="comment-title">Leave a Reply</h3>
                        <p className="comment-content">
                            Your email adress will not be published, Requied
                            fileds are marked*.
                        </p>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name*"
                            className="contact-form-input"
                            value={newComment.name}
                            onChange={handleName}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email*"
                            className="contact-form-input"
                            value={newComment.email}
                            onChange={handleEmail}
                        ></input>
                    </div>
                    <div>
                        <TextareaAutosize
                            minRows={5}
                            placeholder="Your text*"
                            className="contact-form-input"
                            value={newComment.text}
                            onChange={handleText}
                        />
                    </div>
                    <button
                        type="submit"
                        name="submit"
                        className="contact-form-btn"
                    >
                        Send
                    </button>
                </form>
            </Container>
        </div>
    )
}
export default Comments
