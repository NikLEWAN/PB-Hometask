import type { NextPage } from 'next'
import {useState} from 'react';
import Head from 'next/head'
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../graphql/queries'
import { useMutation } from '@apollo/client'
import Contacts from '../components/Contacts'
import Container from '@mui/material/Container'
import SubmitContactPostForm from '../components/SubmitContactPostForm'
import EditModal from '../components/EditModal'
import ContactsIcon from '@mui/icons-material/Contacts';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {

	//ADD
	const [addContact] = useMutation(ADD_CONTACT, {
		onCompleted: (data) => {
			window.location.reload()
		}
	})
	const onSubmit = (e: any) => {
		e.preventDefault()
		console.log(e.target.firstName.value)
		if(e.target.firstName.value.length < 3 || e.target.lastName.value.length < 3 || e.target.phoneNumber.value.length < 8) return false
		addContact({ variables: { 
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
			phoneNumber: e.target.phoneNumber.value
		} })
	}

	//DELETE
	const [deleteContact] = useMutation(DELETE_CONTACT, {
		onCompleted: (data) => {
			window.location.reload()
		}
	})
	const onDelete = (id: string) => deleteContact({ variables: { id } })

	//EDIT
	const [editId, setEditId] = useState('')

	const onClose = () => setEditId('')
	const openModal = (id: string , firstName: string, lastName: string, phoneNumber: string) => {
		setEditId(id)
		setFirstName(firstName)
		setLastName(lastName)
		setPhoneNumber(phoneNumber)
	}
	const [editContact] = useMutation(EDIT_CONTACT, {
		onCompleted: () => setEditId('')
	})
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const onChange = (e: string, value: string) => {
		switch(e){
			case "firstname":
				setFirstName(value)
				break
			case "lastname":
				setLastName(value)
				break
			case "phonenumber":
				setPhoneNumber(value)
				break
		}
	}

	const onSaveEdit = (e: any) => {
		e.preventDefault()
		if(e.target.firstName.value.length < 3 || e.target.lastName.value.length < 3 || e.target.phoneNumber.value.length < 8) return false
		editContact({ variables: { 
			id: editId,
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
			phoneNumber: e.target.phoneNumber.value
		} })
	}
  return (
    <>
		<Head>
			<title>Phonebook Hometask</title>
			<meta name='Phonebook Hometask' content='This is a hometask using Nextjs, Typescript, MaterialUI, Graphql, Apollo, Prisma, Postgresql, Docker'></meta>
			<link rel='icon' href='/favicon.ico'></link>
		</Head>
		<Container maxWidth='xs'>
			<Typography variant='h3' align='center' sx={{ color: 'text.primary' }}>
				<ContactsIcon fontSize='large'/> Phonebook
			</Typography>
			<EditModal onChange={onChange} firstname={firstName} lastname={lastName} phonenumber={phoneNumber} isOpen={!!editId} onClose={onClose} onSubmit={onSaveEdit}/>
			<SubmitContactPostForm onSubmit={onSubmit}/>
			<Contacts onDelete={onDelete} openModal={openModal}/>
		</Container>
	</>
  )
}

export default Home