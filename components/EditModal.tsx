import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
interface Props{
	firstname: string
	lastname: string
	phonenumber: string
	onSubmit: any
	onClose: any
	isOpen: boolean
	onChange: Function
}

const EditModal = ({onSubmit, onClose, isOpen, firstname, lastname, phonenumber, onChange}: Props) => {
	return (
	<Dialog open={isOpen} onClose={onClose}>
		<form onSubmit={onSubmit}>
			<DialogTitle>Edit Contact</DialogTitle>
			<DialogContent sx={{
				'& > :not(style)': { mt: 1 },
			}}>

				<TextField name="firstName" fullWidth id="outlined-basic" label="First Name" value={firstname} onChange={(e) => onChange("firstname", e.target.value)}/>
				<TextField name="lastName" fullWidth id="outlined-basic" label="Last Name" value={lastname} onChange={(e) => onChange("lastname", e.target.value)} />
				<TextField name="phoneNumber" fullWidth id="outlined-basic" label="Phone Number" value={phonenumber} onChange={(e) => onChange("phonenumber", e.target.value)} />

			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button type='submit'>Submit</Button>
			</DialogActions>
		</form>
	</Dialog>
)};

export default EditModal