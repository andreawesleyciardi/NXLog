import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select as MuiSelect } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import { FormControl } from './../UI';

// const SelectBase = React.forwardRef(({ children, control, disabled, formControlSx, label, labelSx, name, onChangedValue, onChangingValue, optionLabelKey, optionValueKey, options, placeholder, required, sx, validate, value, variant, ...props }, ref) => {
const SelectBase = React.forwardRef(({ autoFocus, children, displayEmpty, name, optionLabelKey, optionValueKey, options, placeholder, required, size, variant, ...props }, ref) => {
	const [hasComplexOptions, setHasComplexOptions] = useState(false);

	useEffect(() => {
		if (options != null && options.length > 0) {
			setHasComplexOptions(typeof options[0] === 'object');
		}
	}, [options]);

	return (
		<MuiSelect
			{...props}
			labelId={`${name}-select-label`}
			id={`${name}-select`}
			label={placeholder}
			ref={ref}
			displayEmpty={displayEmpty}
			inputProps={{ autoFocus: autoFocus, name: name, required: required, size: size }}
			renderValue={(selected) => {
				const placeholderComponent = <em className="form-control-placeholder">{placeholder ?? ''}</em>;
				if (selected == '' || selected?.[optionValueKey] == '') {
					return placeholder != null ? placeholderComponent : '';
				}
				return (hasComplexOptions == true ? options.find((option) => option[optionValueKey] == selected)?.[optionLabelKey] : selected) ?? placeholderComponent;
			}}
			variant={variant}
		>
			{options != null &&
				options.length > 0 &&
				options.map((option) => (
					<MenuItem value={option?.[optionValueKey] ?? option} key={option?.[optionValueKey] ?? option}>
						{option?.[optionLabelKey] ?? option}
					</MenuItem>
				))}
			{children}
		</MuiSelect>
	);
});

SelectBase.defaultProps = {
	autoFocus: false,
	displayEmpty: true,
	optionLabelKey: 'label',
	optionValueKey: 'value',
	required: false,
	size: 'small',
	sx: {},
	value: '',
	variant: 'outlined',
};

SelectBase.propTypes = {
	autoFocus: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	disabled: PropTypes.bool,
	displayEmpty: PropTypes.bool,
	name: PropTypes.string,
	optionLabelKey: PropTypes.string,
	options: PropTypes.array,
	optionValueKey: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	size: PropTypes.string,
	sx: PropTypes.object,
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	value: PropTypes.string,
	variant: PropTypes.string,
};

SelectBase.displayName = 'SelectBase';

export { SelectBase };

const Select = React.forwardRef(({ autoFocus, control, disabled, formControlSx, fullWidth, label, labelSx, name, onChangedValue, onChangingValue, required, size, sx, validate, variant, ...props }, ref) => {
	return (
		<FormControl
			disabled={disabled}
			control={control}
			component={(field) => {
				return (
					<SelectBase
						autoFocus={autoFocus}
						name={field.name}
						defaultValue={field.value}
						disabled={disabled}
						{...props}
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
						value={field.value ?? ''}
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

Select.defaultProps = {
	autoFocus: false,
	disabled: false,
	formControlSx: {},
	fullWidth: true,
	labelSx: {},
	required: false,
	size: 'small',
	sx: {},
	variant: 'outlined',
};

Select.propTypes = {
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
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	variant: PropTypes.string,
};

Select.displayName = 'Select';

export default Select;
