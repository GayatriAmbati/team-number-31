import React from 'react';
import '../../styles/css/InputField.css';
import { Text } from '../Typography/index';

export default function InputField({ id, placeholder, type, heading }) {
	return (
		<div className="input-div">
			<Text>{heading}</Text>
			<input type={type} id={id} placeholder={placeholder} className="input" />
		</div>
	);
}
