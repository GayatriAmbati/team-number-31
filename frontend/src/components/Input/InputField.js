import React, { useState } from 'react';
import '../../styles/css/InputField.css';
import { Text } from '../Typography/index';

export default function InputField({ id, placeholder, type, heading }) {
	const [value, setValue] = useState('');

	return (
		<div className="input-div">
			<Text>{heading}</Text>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className="input"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
}
