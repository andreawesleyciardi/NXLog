import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, InputAdornment, Slider, Stack, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CheckBoxBase, FormControl, InputBase } from './../UI';
import { copyToClipboard } from './../../services/Services';

const GeneratorBase = React.forwardRef(({ inputRef, name, onChange, onCopy, required, ...props }, ref) => {
	const [value, setValue] = useState('');
	const [passwordLength, setPasswordLength] = useState(8);
	const [useLowerCase, setUseLowerCase] = useState(true);
	const [useUpperCase, setUseUpperCase] = useState(false);
	const [useNumbers, setUseNumbers] = useState(false);
	const [useSymbols, setUseSymbols] = useState(false);
	const [copyStatus, setCopyStatus] = useState(null);

	const reset = () => {
		setValue('');
		setCopyStatus(null);
	};

	const handlePasswordLength = (event, newValue) => {
		reset();
		setPasswordLength(newValue);
	};
	const handleUseLowerCase = () => {
		reset();
		setUseLowerCase(!useLowerCase);
	};
	const handleUpperCase = () => {
		reset();
		setUseUpperCase(!useUpperCase);
	};
	const handleUseNumbers = () => {
		reset();
		setUseNumbers(!useNumbers);
	};
	const handleUseSymbols = () => {
		reset();
		setUseSymbols(!useSymbols);
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
		let charset = '';
		let newPassword = '';
		if (useSymbols) charset += '!@#$%^&*()';
		if (useNumbers) charset += '0123456789';
		if (useLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
		if (useUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		for (let i = 0; i < passwordLength; i++) {
			newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
		}
		reset();
		setValue(newPassword);
	};

	return (
		<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} ref={ref}>
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
				name={name}
				onChange={onChange}
				required={required}
				value={value}
			/>
			<Accordion sx={{ marginTop: '0px !important' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="More settings" id="moreSettings" sx={{ fontStyle: 'italic', fontSize: '85%', minHeight: 'auto', margin: '0px' }}>
					<Typography>Advanced options</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Stack>
						<Typography>Characters length: {passwordLength}</Typography>
						<Slider step={1} min={6} max={16} defaultValue={8} value={passwordLength} aria-label="Password length" onChange={handlePasswordLength} />
						<CheckBoxBase label="Include Lowercase" defaultChecked={true} value={useLowerCase} onChange={handleUseLowerCase} disabled={useLowerCase && !useUpperCase && !useNumbers && !useSymbols} />
						<CheckBoxBase label="Include Uppercase" defaultChecked={false} value={useUpperCase} onChange={handleUpperCase} disabled={!useLowerCase && useUpperCase && !useNumbers && !useSymbols} />
						<CheckBoxBase label="Include Number" defaultChecked={false} value={useNumbers} onChange={handleUseNumbers} disabled={!useLowerCase && !useUpperCase && useNumbers && !useSymbols} />
						<CheckBoxBase label="Include Symbols" defaultChecked={false} value={useSymbols} onChange={handleUseSymbols} disabled={!useLowerCase && !useUpperCase && !useNumbers && useSymbols} />
					</Stack>
				</AccordionDetails>
			</Accordion>

			<Button color="primary" size="small" variant="contained" onClick={generatePassword}>
				Generate Password
			</Button>
		</Stack>
	);
});

GeneratorBase.propTypes = {
	inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
	name: PropTypes.string,
	onChange: PropTypes.func,
	onCopy: PropTypes.func,
	required: PropTypes.bool,
};

GeneratorBase.displayName = 'GeneratorBase';

export { GeneratorBase };

const Generator = React.forwardRef(({ control, disabled = false, formControlSx = {}, fullWidth = true, label, labelSx = {}, name, onChangedValue, onChangingValue, required = false, size = 'small', validate, variant = 'outlined', ...props }, ref) => {
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
						inputRef={field.ref}
						required={required}
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
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	variant: PropTypes.string,
};

Generator.displayName = 'Generator';

export default Generator;
