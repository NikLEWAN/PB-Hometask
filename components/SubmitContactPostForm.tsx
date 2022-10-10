import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const SubmitContactPostForm = ({ onSubmit }: any) => {

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
	
	return (
		<>
			<Grid container alignItems="center" justifyContent='space-between' sx={{
							'& > :not(style)': { mt: 1 },
						}}>
				<Grid item>
				<Typography variant="h6" sx={{ color: 'text.primary' }}>
					Contacts
				</Typography>
				</Grid>
				<Grid item>
					<Button variant="contained" onClick={handleClickOpen}>
						+ Add Contacts
					</Button>
				</Grid>
			</Grid>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add new Contact</DialogTitle>
				<DialogContent>
					<Box onSubmit={onSubmit}
						component="form"
						sx={{
							'& > :not(style)': { mt: 1 },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField name="firstName" fullWidth id="outlined-basic" label="First Name" />
						<TextField name="lastName" fullWidth id="outlined-basic" label="Last Name" />
						<TextField name="phoneNumber" fullWidth id="outlined-basic" label="Phone Number" />
						
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button variant="contained" color='primary' type="submit">Submit</Button>
						</DialogActions>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default SubmitContactPostForm