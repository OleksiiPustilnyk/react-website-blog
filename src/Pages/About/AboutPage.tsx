import { Container, Typography } from '@mui/material'

import './AboutPage.scss'

type Props = {}

const AboutPage = (props: Props) => {
    return (
        <Container maxWidth="xl" sx={{ padding: '40px 0' }}>
            <Typography
                component="h2"
                variant="h5"
                align="center"
                color="white"
                sx={{
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
                className="about-title"
            >
                About Us
            </Typography>
        </Container>
    )
}
export default AboutPage
