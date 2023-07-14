import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Comments = {
    name: string
    text: string
}

const Comments = (props: Props) => {
    const arrComments: Comments[] = [
        {
            name: 'Сергій:',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien.',
        },
        {
            name: 'Вася:',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien.',
        },
        {
            name: 'Петя:',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien.',
        },
    ]

    const [comments, setComments] = useState<Comments[]>(arrComments)

    const [newComment, setNewComment] = useState<Comments>({
        name: '',
        text: '',
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

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newComment.name === '' || newComment.text === '') {
            alert('All fields are required')
        } else {
            setComments((prevState) => {
                return [...prevState, newComment]
            })

            setNewComment({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Comments
            </Typography>
            {comments.map(({ name, text }, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        margin: '30px 0',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div>{name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please leave a comment</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newComment.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newComment.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}
export default Comments
