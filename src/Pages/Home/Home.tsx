import PostsList from 'components/Posts/PostsList'
import Slider from 'components/Slider/Slider'

import { Container } from '@mui/material'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Slider />
            <Container maxWidth="xl" sx={{ padding: '40px 0' }}>
                <PostsList />
            </Container>
        </>
    )
}
export default Home
