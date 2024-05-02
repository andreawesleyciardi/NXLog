import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as MuiAccordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionContainer = ({ children }) => <div>{children}</div>;

AccordionContainer.propTypes = { children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired };

const Accordion = ({ children, id, isExpanded, title }) => {
	return (
		<MuiAccordion defaultExpanded={isExpanded}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${id}-content`} id={`panel-${id}-header`}>
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</MuiAccordion>
	);
};

Accordion.defaultProps = {
	isExpanded: false,
};

Accordion.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	id: PropTypes.string.isRequired,
	isExpanded: PropTypes.bool,
	title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
};

Accordion.displayName = 'Accordion';

export default Accordion;

export { AccordionContainer };
