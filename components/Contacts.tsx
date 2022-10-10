import { useQuery } from '@apollo/client'
import { GET_CONTACTS } from '../graphql/queries'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PhoneIcon from '@mui/icons-material/Phone';
import Grid from '@mui/material/Grid';

interface Props{
	id: string
	firstName: string
	lastName: string
	phoneNumber: string
	onDelete: any
	openModal: any
	contactData: [
		id: string,
		firstName: string,
		lastName: string,
		phoneNumber: string
	]
}

const Contact = ({ id, firstName, lastName, phoneNumber, onDelete, openModal }: Props) => {
  return (
    <Card sx={{ marginTop: '15px' }}>
		<Grid container alignItems="center" justifyContent='space-between' sx={{ padding: '16px' }}>
			<Grid item xs={7}>
				<Typography>
					{firstName} {lastName} 
				</Typography>
				<Grid container direction="row" alignItems="center">
					<Grid item>
						<PhoneIcon sx={{ height: '16px', color: 'text.secondary' }}/>
					</Grid>
					<Grid item>
						<Typography alignItems="center" variant="button" display="block" gutterBottom sx={{ color: 'text.secondary' }}>
							{phoneNumber}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Button onClick={() => openModal(id, firstName, lastName, phoneNumber)} size="small">Edit</Button>
				<Button color='warning' onClick={() => onDelete(id)} size="small"><DeleteForeverIcon /></Button>
			</Grid>
		</Grid>
    </Card>
  );
}


const Contacts = ({ onDelete, openModal }: any) => {
	const {loading, error, data} = useQuery(GET_CONTACTS)
	if(loading){
		return 'loading'
	}
	if(error){
		return error.message
	}
	return data.contacts.map((contactData: Props) => (
	<Contact {...contactData} key={contactData.id} onDelete={onDelete} openModal={openModal} />
	))
}

export default Contacts