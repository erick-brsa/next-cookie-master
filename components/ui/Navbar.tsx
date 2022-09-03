import NextLink from "next/link"
import { AppBar, IconButton, Toolbar, Link, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"

export const Navbar = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<Toolbar>
				<IconButton size="large" edge="start" />
				<MenuOutlined />
				<NextLink href="/" passHref>
					<Link>
						<Typography variant="h6" color="white">
							CookieMaster
						</Typography>
					</Link>
				</NextLink>

				<div style={{ flex: "1" }} />

				<NextLink href="/theme-changer" passHref>
					<Link>
						<Typography variant="h6" color="white">
							Cambiar tema
						</Typography>
					</Link>
				</NextLink>
			</Toolbar>
		</AppBar>
	)
}
