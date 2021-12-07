const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    horaAtual: String
`;

const resolvers = {
    horaAtual() {
        return `${new Date}`
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
});