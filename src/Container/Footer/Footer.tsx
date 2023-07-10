import { Container } from '@mui/material'
import './Footer.scss'
import Subscribe from './Subscribe'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <Subscribe />
            <div className="footer">
                <Container maxWidth="xl" sx={{ padding: '20px 0' }}>
                    © Copyright 2023 | Avada Theme by{' '}
                    <a
                        href="https://avada.com/about-us/"
                        className="footer-link"
                    >
                        ThemeFusion
                    </a>
                    | All Rights Reserved | Powered by{' '}
                    <a href="https://wordpress.org/" className="footer-link">
                        WordPress
                    </a>
                </Container>
            </div>
        </>
    )
}
export default Footer
