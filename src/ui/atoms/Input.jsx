import React from 'react';
import PropTypes from 'prop-types';
import { FilledInput as MuiFilledInput, Input as MuiInput, OutlinedInput as MuiOutlinedInput } from '@mui/material';

import { FormControl } from './../UI';

const InputBase = React.forwardRef(({ autoFocus = false, defaultValue = null, disabled = false, error = false, fullWidth = true, id = null, name = null, onChange = null, placeholder = null, readOnly = false, required = false, size = 'small', sx = {}, type = 'text', variant = 'outlined', ...props }, ref) => {
	const Component = variant == 'outlined' ? MuiOutlinedInput : variant == 'filled' ? MuiFilledInput : MuiInput;
	return <Component autoFocus={autoFocus} defaultValue={defaultValue} disabled={disabled} error={error} fullWidth={fullWidth} id={id} name={name} onChange={onChange} placeholder={placeholder} readOnly={readOnly} required={required} size={size} sx={sx} type={type} variant={variant} {...props} ref={ref} />;
});

InputBase.propTypes = {
	autoFocus: PropTypes.bool,
	defaultValue: PropTypes.any,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	fullWidth: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	size: PropTypes.string,
	sx: PropTypes.object,
	type: PropTypes.string,
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	value: PropTypes.string,
	variant: PropTypes.string,
};

InputBase.displayName = 'InputBase';

export { InputBase };

const Input = React.forwardRef(({ autoFocus, control, disabled, formControlSx, fullWidth, label, labelSx, name, onChangedValue, onChangingValue, required, size, sx, validate, variant, ...props }, ref) => {
	return (
		<FormControl
			disabled={disabled}
			control={control}
			component={(field) => {
				return (
					<InputBase
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

Input.defaultProps = {
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

Input.propTypes = {
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

Input.displayName = 'Input';

export default Input;
