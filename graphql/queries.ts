import { gql } from '@apollo/client'

export const GET_CONTACTS = gql`
	{
		contacts{
			id
			firstName
			lastName
			phoneNumber
		}	
	}
`

export const ADD_CONTACT = gql`
	mutation AddContact($firstName: String,$lastName: String,$phoneNumber: String){
		addContact(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber){
			id
			firstName
			lastName
			phoneNumber
		}	
	}
`

export const DELETE_CONTACT = gql`
	mutation DeleteContact($id: String){
		deleteContact(id: $id){
			id
			firstName
			lastName
			phoneNumber
		}	
	}
`

export const EDIT_CONTACT = gql`
	mutation EditContact($id: String, $firstName: String,$lastName: String,$phoneNumber: String){
		editContact(id: $id, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber){
			id
			firstName
			lastName
			phoneNumber
		}
	}
`