const graphql = require('graphql');

const Country = require('../models/country');
const League = require('../models/league');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    trigramme: { type: GraphQLString },
    leagues: {
      type: new GraphQLList(LeagueType),
      resolve(parent, args) {
        return League.find({ countryId: parent.id });
      }
    }
  })
});

const LeagueType = new GraphQLObjectType({
  name: 'League',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    level: { type: GraphQLInt },
    country: {
      type: CountryType,
      resolve(parent, args) {
        return Country.findById(parent.countryId);
      }
    }
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
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) { 
        return Country.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});