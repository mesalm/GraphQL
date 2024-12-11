const typeDefs = `#graphql
type Author {
  id: ID!
  name: String!
  birth_year: Int!
  users:[User!]
}

type Location {
  country: String!
  address: String!
}

type Company {
  title: String!
  email: String!
  phone: String!
  location: Location!
}

type User {
  id: ID!
  index: Int!
  name: String!
  isActive: Boolean!
  registered: String!
  age: Int
  gender: String!
  eyeColor: String!
  favoriteFruit: String!
  company: Company!
  tags: [String!]!
}

type Book {
  id: ID!
  title: String!
  genre: String!
  author: Author!
}

type Query {
  author: [Author]
  books: [Book]
  users: [User]
}

type Mutation {
  addUser(
    name: String!,
    age: Int!,
    gender: String!,
    eyeColor: String!,
    favoriteFruit: String!,
    companyTitle: String!,
    companyEmail: String!,
    companyPhone: String!,
    companyCountry: String!,
    companyAddress: String!,
    tags: [String!]!
  ): User

    updateUser(
    id: ID!,
    name: String,
    age: Int,
    gender: String,
    eyeColor: String,
    favoriteFruit: String,
    companyTitle: String,
    companyEmail: String,
    companyPhone: String,
    companyCountry: String,
    companyAddress: String,
    tags: [String]
  ): User
}
`;

module.exports = typeDefs;
