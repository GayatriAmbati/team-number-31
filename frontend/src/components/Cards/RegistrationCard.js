import React, { useState } from 'react';
import { Card, CardMedia, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import InputField from '../Input/InputField';
import '../../styles/css/InputField.css';
import { PrimaryButton } from '../Buttons/index';
import styles from '../../styles/jss/card';
import { Title, Text } from '../Typography/index';

const useStyles = makeStyles(styles);

export default function RegistrationCard() {
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
						<Title>Register</Title>
						<div className="input-div">
							<Box style={customMargin}>
								<Text>Username</Text>
								<input
									type="input"
									id="username"
									placeholder="eg. Alex Grisham"
									className="input"
								/>
							</Box>
						</div>
						<div className="input-div">
							<Box style={customMargin}>
								<Text>Email</Text>
								<input
									type="email"
									id="email"
									placeholder="eg. alexgrisham@dash.com"
									className="input"
								/>
							</Box>
						</div>
						<div className="input-div">
							<Box style={customMargin}>
								<Text>Password</Text>
								<input type="password" id="password" className="input" />
							</Box>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								width="100%"
							>
								<PrimaryButton>Register</PrimaryButton>
							</Box>
						</div>
					</form>
				</Box>
			</CardMedia>
		</Card>
	);
}
