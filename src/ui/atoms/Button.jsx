import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import { Button as MuiButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Button = React.forwardRef(({ as: Component, children, ...props }, ref) => {
	return (
		<Component disableElevation {...props} ref={ref}>
			{children}
		</Component>
	);
});

Button.defaultProps = {
	as: MuiButton,
	variant: 'contained',
	size: 'medium',
};

Button.propTypes = {
	as: PropTypes.object,
	variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	loading: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Button.displayName = 'Button';

export default Button;

const ButtonsStack = ({ children, sx, ...props }) => {
	return (
		<Stack direction="row" spacing={2} sx={Object.assign({ alignItems: 'center', justifyContent: 'center' }, sx)} {...props}>
			{children}
		</Stack>
	);
};

ButtonsStack.defaultProps = {
	sx: {},
};

ButtonsStack.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	sx: PropTypes.object,
};

export { ButtonsStack };

const Submit = React.forwardRef(({ children, disabled, extraFormState: { dirtyFields }, formState: { isSubmitting, isValid, isDirty }, ...props }, ref) => {
	return (
		<Button {...props} type="submit" disabled={Object.keys(dirtyFields).length == 0 || isValid != true || isDirty != true || disabled} loading={isSubmitting} as={LoadingButton} ref={ref}>
			{children}
		</Button>
	);
});

Submit.defaultProps = {
	disabled: false,
};

Submit.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	disabled: PropTypes.bool,
	extraFormState: PropTypes.shape({
		dirtyFields: PropTypes.object,
	}).isRequired,
	formState: PropTypes.shape({
		isSubmitting: PropTypes.bool,
		isValid: PropTypes.bool,
		isDirty: PropTypes.bool,
	}).isRequired,
};

Submit.displayName = 'Submit';

export { Submit };
