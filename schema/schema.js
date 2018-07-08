const graphql = require('graphql');

const Country = require('../models/country');
const League = require('../models/league');
const Team = require('../models/team');

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
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return Team.find({ leagueId: parent.id });
      }
    }
  })
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    yearFounded: { type: GraphQLInt },
    league: {
      type: LeagueType,
      resolve(parent, args) {
        return League.findById(parent.leagueId);
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
    },
    league: {
      type: LeagueType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) { 
        return League.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});