const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(author: [], description: String, title: String, bookId: ID, image: img, link: String): User (Look into creating what's known as an input type to handle all of these parameters!)
        removeBook(bookId: ID) User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: img
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;