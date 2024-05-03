import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Alert, Button, IconButton, InputAdornment, Slider, Stack, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CheckBoxBase, FormControl, InputBase } from './../UI';
import { copyToClipboard } from './../../services/Services';

const GeneratorBase = React.forwardRef(({ onChange, onCopy, required, ...props }, ref) => {
	const [value, setValue] = useState('');
	const [characterLength, setCharacterLength] = useState(8);
	const [lowerCase, setLowerCase] = useState(true);
	const [upperCase, setUpperCase] = useState(false);
	const [numbers, setNumbers] = useState(false);
	const [symbols, setSymbols] = useState(false);
	const [copyStatus, setCopyStatus] = useState(null);

	const inputRef = useRef();

	const reset = () => {
		setValue('');
		setCopyStatus(null);
	};

	const handleCharacterLength = (event, newValue) => {
		reset();
		setCharacterLength(newValue);
	};
	const handleLowerCase = () => {
		reset();
		setLowerCase(!lowerCase);
	};
	const handleUpperCase = () => {
		reset();
		setUpperCase(!upperCase);
	};
	const handleNumbers = () => {
		reset();
		setNumbers(!numbers);
	};
	const handleSymbols = () => {
		reset();
		setSymbols(!symbols);
	};

	const handleCopy = async () => {
		const copied = await copyToClipboard(value);
		setCopyStatus(copied != false);
	};

	useEffect(() => {
		if (onCopy != null) {
			onCopy(copyStatus);
		}
	}, [copyStatus]);

	useEffect(() => {
		if (onChange != null) {
			onChange(value);
		}
	}, [value]);

	const generatePassword = () => {
		// GENERATE
		reset();
		setValue(Math.floor(Math.random() * 100).toString());
	};

	return (
		<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
			<InputBase
				endAdornment={
					<InputAdornment position="end">
						<IconButton aria-label="Copy password" onClick={handleCopy} edge="end" disabled={value == null || value == ''}>
							<ContentCopyIcon />
						</IconButton>
					</InputAdornment>
				}
				inputProps={{ readOnly: true }}
				inputRef={inputRef}
				onChange={onChange}
				required={required}
				value={value}
			/>
			<Accordion sx={{ marginTop: '0px !important' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="More settings" id="moreSettings" sx={{ fontStyle: 'italic', fontSize: '85%', minHeight: 'auto', margin: '0px' }}>
					<Typography>Advanced options</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Characters length: {characterLength}</Typography>
					<Slider step={1} min={6} max={16} defaultValue={8} value={characterLength} aria-label="Password length" onChange={handleCharacterLength} />
					<CheckBoxBase label="Include Lowercase" defaultChecked={true} value={lowerCase} onChange={handleLowerCase} />
					<CheckBoxBase label="Include Uppercase" defaultChecked={false} value={upperCase} onChange={handleUpperCase} />
					<CheckBoxBase label="Include Number" defaultChecked={false} value={numbers} onChange={handleNumbers} />
					<CheckBoxBase label="Include Symbols" defaultChecked={false} value={symbols} onChange={handleSymbols} />
				</AccordionDetails>
			</Accordion>

			<Button color="primary" size="small" variant="contained" onClick={generatePassword}>
				Generate Password
			</Button>
		</Stack>
	);
});

GeneratorBase.propTypes = {
	onChange: PropTypes.func,
	onCopy: PropTypes.func,
	required: PropTypes.bool,
};

GeneratorBase.displayName = 'GeneratorBase';

export { GeneratorBase };

const Generator = React.forwardRef(({ control, disabled, formControlSx, fullWidth, label, labelSx, name, onChangedValue, onChangingValue, required, size, sx, validate, variant, ...props }, ref) => {
	return (
		<FormControl
			disabled={disabled}
			control={control}
			component={(field) => {
				return (
					<GeneratorBase
						{...props}
						name={field.name}
						onChange={(value) => {
							let newValue = value;
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
