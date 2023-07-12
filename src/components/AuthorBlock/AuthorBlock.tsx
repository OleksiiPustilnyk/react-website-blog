import { Avatar, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

import avatar from 'assets/avatar/donald-glover.jpeg'

type Props = {}

const AuthorBlock = (props: Props) => {
    return (
        <>
            <Grid
                container
                justifyContent={'space-around'}
                className="post-author"
            >
                <Grid item md={1}>
                    <NavLink to="/author" className="authot-navlink">
                        <Avatar
                            alt="Donald Glover"
                            src={avatar}
                            sx={{ width: 50, height: 50 }}
                            className="author-avatar"
                        />
                    </NavLink>
                </Grid>
                <Grid item container md={4} alignItems="center">
                    <NavLink to="/author" className="author-name">
                        Donald Glover
                    </NavLink>
                </Grid>

                <Grid item md={2} className="author-space">
                    <div className="author-icon"></div>
                </Grid>
                <Grid
                    item
                    container
                    md={2}
                    alignItems="center"
                    className="author-date"
                >
                    05.06.2023
                </Grid>
            </Grid>
        </>
    )
}
export default AuthorBlock
