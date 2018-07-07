const graphql = require('graphql');

const Country = require('../models/country');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

const CountryType = new GraphQLObjectType({
    name: 'Country',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      trigramme: { type: GraphQLString }
    })
  });

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) { 
        return Country.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});