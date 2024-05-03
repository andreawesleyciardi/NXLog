import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';

import { FormControl } from './../UI';

const CheckBoxBase = React.forwardRef(({ label, labelSx = {}, ...props }, ref) => {
	return <FormControlLabel sx={labelSx} control={<Checkbox {...props} />} label={label} />;
});

CheckBoxBase.propTypes = {
	checked: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
};

CheckBoxBase.displayName = 'CheckBoxBase';

export { CheckBoxBase };

const CheckBox = React.forwardRef(({ autoFocus, control, disabled, formControlSx, fullWidth, label, labelSx, name, onChangedValue, onChangingValue, required, size, sx, validate, variant, ...props }, ref) => {
	return (
		<FormControl
			disabled={disabled}
			control={control}
			component={(field) => {
				return (
					<CheckBoxBase
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
						label={label}
						labelSx={labelSx}
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
			name={name}
			required={required}
			size={size}
			sx={formControlSx}
			validate={validate}
			variant={variant}
		/>
	);
});

CheckBox.defaultProps = {
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

CheckBox.propTypes = {
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

CheckBox.displayName = 'CheckBox';

export { CheckBox };
