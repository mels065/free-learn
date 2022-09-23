import { gql } from 'apollo-server';

const userTypeDefs = gql`
    type User {
        id: ID!
        userName: String!
        email: String!
    }

    input RegisterUserInput {
        userName: String!
        email: String!
        password: String!
    }

    type Token {
        token: String!
    }

    type Query {
        getUser(id: String): User
    }

    type Mutation {
        registerUser(input: RegisterUserInput!): Token
    }
`;

export default userTypeDefs;
