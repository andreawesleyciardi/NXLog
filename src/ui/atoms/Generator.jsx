import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FilledInput as MuiFilledInput, Input as MuiInput, OutlinedInput as MuiOutlinedInput, Slider, Stack, Typography } from '@mui/material';

import { CheckBoxBase, FormControl } from './../UI';

const GeneratorBase = React.forwardRef((props, ref) => {
	const [characterLength, setCharacterLength] = useState(8);
	const [lowerCase, setLowerCase] = useState(true);
	const [upperCase, setUpperCase] = useState(false);
	const [numbers, setNumbers] = useState(false);
	const [symbols, setSymbols] = useState(false);

	const handleCharacterLength = (event, newValue) => {
		setCharacterLength(newValue);
	};
	const handleLowerCase = () => {
		setLowerCase(!lowerCase);
	};
	const handleUpperCase = () => {
		setUpperCase(!upperCase);
	};
	const handleNumbers = () => {
		setNumbers(!numbers);
	};
	const handleSymbols = () => {
		setSymbols(!symbols);
	};

	return (
		<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
			<Typography>Character length: {characterLength}</Typography>
			<Slider step={1} min={6} max={16} defaultValue={characterLength} aria-label="Password length" onChange={handleCharacterLength} />
			<CheckBoxBase label="Include Lowercase" defaultValue={lowerCase} onChange={handleLowerCase} />
			<CheckBoxBase label="Include Uppercase" defaultValue={upperCase} onChange={handleUpperCase} />
			<CheckBoxBase label="Include Number" defaultValue={numbers} onChange={handleNumbers} />
			<CheckBoxBase label="Include Symbols" defaultValue={symbols} onChange={handleSymbols} />
		</Stack>
	);
});

GeneratorBase.propTypes = {
	// autoFocus: PropTypes.bool,
	// defaultValue: PropTypes.any,
	// disabled: PropTypes.bool,
	// error: PropTypes.bool,
	// fullWidth: PropTypes.bool,
	// id: PropTypes.string,
	// name: PropTypes.string,
	// onChange: PropTypes.func,
	// placeholder: PropTypes.string,
	// readOnly: PropTypes.bool,
	// required: PropTypes.bool,
	// size: PropTypes.string,
	// sx: PropTypes.object,
	// type: PropTypes.string,
	// validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	// value: PropTypes.string,
	// variant: PropTypes.string,
};

GeneratorBase.displayName = 'GeneratorBase';

export { GeneratorBase };

const Generator = React.forwardRef(({ autoFocus, control, disabled, formControlSx, fullWidth, label, labelSx, name, onChangedValue, onChangingValue, required, size, sx, validate, variant, ...props }, ref) => {
	return (
		<FormControl
			disabled={disabled}
			control={control}
			component={(field) => {
				return (
					<Generator
						autoFocus={autoFocus}
						defaultValue={field.value}
						disabled={disabled}
						fullWidth={fullWidth}
						{...props}
						name={field.name}
						onChange={(e) => {
							let newValue = e.target.value;
							if (onChangingValue != null) {
								newValue = onChangingValue(newValue);
							}
							field.onChange(newValue);
							if (onChangedValue != null) {
								onChangedValue(newValue);
							}
						}}
						ref={field.ref}
						required={required}
						size={size}
						sx={sx}
						variant={variant}
					/>
				);
			}}
			focused={autoFocus}
			fullWidth={fullWidth}
			label={label}
			labelSx={labelSx}
			name={name}
			required={required}
			size={size}
			sx={formControlSx}
			validate={validate}
			variant={variant}
		/>
	);
});

Generator.defaultProps = {
	autoFocus: false,
	disabled: false,
	formControlSx: {},
	fullWidth: true,
	labelSx: {},
	required: false,
	size: 'small',
	sx: {},
	type: 'text',
	variant: 'outlined',
};

Generator.propTypes = {
	autoFocus: PropTypes.bool,
	control: PropTypes.object,
	disabled: PropTypes.bool,
	formControlSx: PropTypes.object,
	fullWidth: PropTypes.bool,
	label: PropTypes.string,
	labelSx: PropTypes.object,
	name: PropTypes.string.isRequired,
	onChangedValue: PropTypes.func,
	onChangingValue: PropTypes.func,
	required: PropTypes.bool,
	size: PropTypes.string,
	sx: PropTypes.object,
	type: PropTypes.string,
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	variant: PropTypes.string,
};

Generator.displayName = 'Generator';

export default Generator;
