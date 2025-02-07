import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { useSubmit } from 'react-router-dom';
import { FormControl as MuiFormControl } from '@mui/material';

import { FieldLabel } from './../UI';

const Form = ({ children, defaultValues = null, method = 'post', validationMode = 'onChange', ...props }) => {
	const submit = useSubmit();
	const { register, handleSubmit, control, formState, watch, setValue } = useForm({ mode: validationMode, defaultValues: defaultValues });
	const extraFormState = useFormState({ control });

	return (
		<form
			method={method}
			onSubmit={(event) => {
				const target = event.currentTarget;
				handleSubmit(() => {
					submit(target, { method: method });
				})(event);
			}}
		>
			{children(register, control, formState, extraFormState, { watch, setValue })}
		</form>
	);
};

Form.propTypes = {
	children: PropTypes.func.isRequired,
	defaultValues: PropTypes.object,
	method: PropTypes.string,
	validationMode: PropTypes.string,
};

export default Form;

const FormControl = React.forwardRef(({ control, component, disabled = false, error = false, focused = false, fullWidth = false, label, labelSx, name, required = false, size = 'medium', sx = {}, validate, variant = 'standard', ...props }, ref) => {
	return (
		<MuiFormControl disabled={disabled} error={error} fullWidth={fullWidth} required={required} size={size} sx={sx} variant={variant}>
			{label != null && (
				<FieldLabel shrink={false} htmlFor={name} sx={Object.assign({ position: 'relative', transform: 'none' }, labelSx)}>
					{label}
				</FieldLabel>
			)}
			<Controller name={name} control={control} rules={{ required: required, validate: validate }} render={({ field }) => component(field)} />
		</MuiFormControl>
	);
});

FormControl.propTypes = {
	control: PropTypes.object,
	component: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	focused: PropTypes.bool,
	fullWidth: PropTypes.bool,
	label: PropTypes.string,
	labelSx: PropTypes.object,
	name: PropTypes.string,
	onChangedValue: PropTypes.func,
	onChangingValue: PropTypes.func,
	required: PropTypes.bool,
	size: PropTypes.string,
	sx: PropTypes.object,
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	variant: PropTypes.string,
};

FormControl.displayName = 'FormControl';

export { FormControl };
