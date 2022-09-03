import { GetServerSideProps } from "next";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Cookies from "js-cookie";
import { Layout } from "../components/layouts";
import { useRouter } from "next/router";

interface Props {
	theme: string;
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {

	const [currentTheme, setCurrentTheme] = useState(theme);
	const router = useRouter()

	const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedTheme = e.target.value;
		setCurrentTheme(selectedTheme);
		Cookies.set("theme", selectedTheme);
		router.reload()
	};

	useEffect(() => {
		console.log('Cookies:', Cookies.get("theme"))
	}, [])

	return (
		<Layout>
			<Card>
				<CardContent>
					<FormControl>
						<FormLabel>Tema</FormLabel>
						<RadioGroup
							value={currentTheme}
							onChange={e => onThemeChange(e)}
						>
							<FormControlLabel value="light" label="Light" control={<Radio />} />
							<FormControlLabel value="dark" label="Dark" control={<Radio />} />
							<FormControlLabel value="custom" label="Custom" control={<Radio />} />
						</RadioGroup>
					</FormControl>
				</CardContent>
			</Card>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

	const { theme = 'light' } = req.cookies;
	const validThemes = ['light', 'dark', 'custom'];

	return {
		props: {
			theme: validThemes.includes(theme) ? theme : 'dark',
		}
	}
}

export default ThemeChangerPage;