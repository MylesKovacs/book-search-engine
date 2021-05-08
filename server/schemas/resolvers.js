const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: () => {
            return //not sure
        }
    }
};

module.exports = resolvers;