import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/jss/button';

const useStyles = makeStyles(styles);

export default function PrimaryButton({ children }) {
	const classes = useStyles();

	return (
		<Button className={classes.primaryButton}>
			<Typography variant="body2" className={classes.baseFont}>
				{children}
			</Typography>
		</Button>
	);
}
