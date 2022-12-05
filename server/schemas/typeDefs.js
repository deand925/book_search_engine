const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type: User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [book]
    }

    type: Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], title: String, bookId: String!, image: String, link: String, description: String): User
        removeBook:(bookId: ID!): User
    }
`

module.exports = typeDefs;