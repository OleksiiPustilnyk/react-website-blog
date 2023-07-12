import { Card, CardContent, Container, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {}

const WidgetTags = (props: Props) => {
    return (
        <Card
            sx={{
                borderRadius: '20px',
                boxShadow: 'none',
                marginBottom: '20px',
            }}
        >
            <CardContent className="widget" sx={{ paddingTop: '15px' }}>
                <Container>
                    <Typography
                        component="h2"
                        variant="h6"
                        color="white"
                        sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                        }}
                        className="widget-title"
                    >
                        Tags
                        <div className="icon-for-title">
                            <span className="icon-xx"></span>
                        </div>
                    </Typography>
                    <div className="post-tag">
                        <NavLink to="/tag/music" className="post-tag-item">
                            music
                        </NavLink>
                        <NavLink to="/tag/street" className="post-tag-item">
                            street
                        </NavLink>
                        <NavLink to="/tag/graffiti" className="post-tag-item">
                            graffiti
                        </NavLink>
                        <NavLink to="/tag/cars" className="post-tag-item">
                            cars
                        </NavLink>
                        <NavLink to="/tag/tattoo" className="post-tag-item">
                            tattoo
                        </NavLink>
                        <NavLink to="/tag/rap" className="post-tag-item">
                            rap
                        </NavLink>
                        <NavLink to="/tag/famous" className="post-tag-item">
                            famous
                        </NavLink>
                        <NavLink to="/tag/style" className="post-tag-item">
                            style
                        </NavLink>
                        <NavLink to="/tag/games" className="post-tag-item">
                            games
                        </NavLink>
                        <NavLink to="/tag/rwb" className="post-tag-item">
                            RWB
                        </NavLink>
                    </div>
                </Container>
            </CardContent>
        </Card>
    )
}
export default WidgetTags
