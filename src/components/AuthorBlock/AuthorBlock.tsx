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
                <NavLink to="/author" className="authot-navlink">
                    <Grid item md={5}>
                        {/* <div className="icon-quotes"></div> */}
                        <Avatar
                            alt="Donald Glover"
                            src={avatar}
                            sx={{ width: 50, height: 50 }}
                            className="author-avatar"
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        md={12}
                        alignItems="center"
                        className="author-name"
                    >
                        Donald Glover
                    </Grid>
                </NavLink>
                <Grid item md={1} className="author-space">
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
