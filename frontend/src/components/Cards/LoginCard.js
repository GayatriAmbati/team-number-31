import React, { useState } from 'react';
import { Card, CardMedia, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputField from '../Input/InputField';
import { PrimaryButton } from '../Buttons/index';
import styles from '../../styles/jss/card';
import { Title } from '../Typography/index';

const useStyles = makeStyles(styles);

export default function LoginCard() {
	const classes = useStyles();
	const [style, setStyle] = useState({});
	const customMargin = {
		margin: '30px 0',
	};
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
		};
		setStyle(newStyle);
	}, 100);
	return (
		<Card className={classes.loginCardStyle} style={style}>
			<CardMedia>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<form>
						<Title>Login</Title>
						<Box style={customMargin}>
							<InputField
								type="input"
								id="username"
								heading="Username"
								placeholder="eg. Alex Grisham"
							/>
						</Box>
						<Box style={customMargin}>
							<InputField type="password" id="password" heading="Password" />
						</Box>
						<Box>
							<PrimaryButton>Login</PrimaryButton>
						</Box>
					</form>
				</Box>
			</CardMedia>
		</Card>
	);
}
