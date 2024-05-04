import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export function Component() {
	return (
		<div id="project" className="container">
			<Stack spacing={3}>
				<Typography variant="h1">Create `Password generator` component.</Typography>
				<Stack spacing={2}>
					<Typography variant="h3">Description</Typography>
					<Typography variant="body1">
						General component structure is: input(type text) where generated password will be stored.
						<br />
						Copy button inside the input in order to copy generated password.
						<br />
						Input (type range) for selecting character length for the password.
						<br />
						Inputs (type checkbox) for selecting different password generator options:
					</Typography>
					<ul>
						<li>
							<Typography variant="body1">`Include Lowercase`</Typography>
						</li>
						<li>
							<Typography variant="body1">`Include Uppercase`</Typography>
						</li>
						<li>
							<Typography variant="body1">`Include Numbers`</Typography>
						</li>
						<li>
							<Typography variant="body1">`Include Symbols`</Typography>
						</li>
					</ul>
				</Stack>
				<Typography variant="body1">
					At least on of the options above should be selected, so user can`t unselect all of them.
					<br />
					By default `Include Lowercase` is selected.
				</Typography>
				<Typography variant="body1">
					`Generate` button which triggers actual password generation.
					<br />
					Every time you click `Generate` button - new password should be generated based on selected parameters.
				</Typography>
				<Stack>
					<Typography variant="body1">Images for better understanding of what should be done:</Typography>
					<ul>
						<li>
							<Typography variant="body1">
								<a href="https://prnt.sc/5aORmPCsZgA3" target="_blank" style={{ marginRight: '10px', fontStyle: 'italic' }}>
									https://prnt.sc/5aORmPCsZgA3
								</a>
								default view
							</Typography>
						</li>
						<li>
							<Typography variant="body1">
								<a href="https://prnt.sc/X3LB_0lV52tr" target="_blank" style={{ marginRight: '10px', fontStyle: 'italic' }}>
									https://prnt.sc/X3LB_0lV52tr
								</a>
								generated password using `Lowercase` and `Number` filters + character length set to 10.
							</Typography>
						</li>
					</ul>
				</Stack>
				<Stack spacing={2}>
					<Typography variant="h3">Acceptance criteria</Typography>
					<ol>
						<li>
							<Typography variant="body1">All functionality from the description above is done</Typography>
						</li>
						<li>
							<Typography variant="body1">Use React hooks for internal component state (useState)</Typography>
						</li>
						<li>
							<Typography variant="body1">Use Functional component type</Typography>
						</li>
						<li>
							<Typography variant="body1">Ideally implement it using `React create app` or any other way you prefer</Typography>
						</li>
						<li>
							<Typography variant="body1">Would be nice to add some `handy` and `nice` styling using SASS/SCSS</Typography>
						</li>
					</ol>
				</Stack>
			</Stack>
		</div>
	);
}
