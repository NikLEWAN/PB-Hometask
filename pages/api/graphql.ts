import { gql, ApolloServer } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'

interface Props{
	_parent: any
	_args: object
	_context: any
	id: string
	firstName: string
	lastName: string
	phoneNumber: string
}

const prisma = new PrismaClient()

const typeDefs = gql`
	type Contact{
		id: String
		firstName: String 
		lastName: String 
		phoneNumber: String 		
	}
	type Query{
		contacts: [Contact]
	}
	type Mutation {
		addContact(firstName: String, lastName: String, phoneNumber: String): Contact
		editContact(id: String, firstName: String, lastName: String, phoneNumber: String): Contact
		deleteContact(id: String): Contact
	}
`

const resolvers = {
	Query: {
		contacts: (_parent, _args, _context) => {
			return prisma.contact.findMany()
		},
	},
	Mutation: {
		addContact: (_parent, {firstName, lastName, phoneNumber}, _context) => {
			return prisma.contact.create({data: {firstName, lastName, phoneNumber}})
		},
		editContact: (_parent, {id, firstName, lastName, phoneNumber}, _context) => {
			return prisma.contact.update({where: {id}, data: {firstName, lastName, phoneNumber}})
		},
		deleteContact: (_parent, {id}, _context) => {
			return prisma.contact.delete({where: {id}})
		},
	},
}

const apolloServer = new ApolloServer({ typeDefs, resolvers})

const handler = apolloServer.createHandler({ path: "/api/graphql"})

export const config = { api: { bodyParser: false} }

export default handler

