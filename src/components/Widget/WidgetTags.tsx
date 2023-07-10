import { Card, CardContent, Container, Typography } from '@mui/material'

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
                </Container>
            </CardContent>
        </Card>
    )
}
export default WidgetTags
