const graphql = require('graphql');

const Country = require('../models/country');
const League = require('../models/league');
const Team = require('../models/team');
const Stadium = require('../models/stadium');
const City = require('../models/city');
const Competition = require('../models/competition');
const Winner = require('../models/winner');

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
    },
    stadium: {
      type: StadiumType,
      resolve(parent, args) {
        return Stadium.findById(parent.stadiumId);
      }
    }
  })
});

const StadiumType = new GraphQLObjectType({
  name: 'Stadium',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    seatedCapacity: { type: GraphQLInt },
    totalCapacity: { type: GraphQLInt },
    city: {
      type: CityType,
      resolve(parent, args) {
        return City.findById(parent.cityId);
      }
    }
  })
});

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

const CompetitionType = new GraphQLObjectType({
  name: 'Competition',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: {
      type: CountryType,
      resolve(parent, args) {
        return Country.findById(parent.countryId);
      }
    }
  })
});

const WinnerType = new GraphQLObjectType({
  name: 'Winner',
  fields: () => ({
    id: { type: GraphQLID },
    team: {
      type: TeamType,
      resolve(parent, args) {
        return Team.findById(parent.teamId);
      }
    },
    competition: {
      type: CompetitionType,
      resolve(parent, args) {
        return Competition.findById(parent.competitionId);
      }
    },
    season: { type: GraphQLString }
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
    },
    countryLeagues: {
      type: new GraphQLList(LeagueType),
      args: { countryId: { type: GraphQLID } },
      resolve(parent, args) { 
        return League.find({ countryId: args.countryId });
      }
    },
    competitions: {
      type: new GraphQLList(CompetitionType),
      resolve(parent, args) { 
        return Competition.find({});
      }
    },
    winners: {
      type: new GraphQLList(WinnerType),
      resolve(parent, args) { 
        return Winner.find({});
      }
    },
    honours: {
      type: new GraphQLList(WinnerType),
      args: { teamId: { type: GraphQLID } },
      resolve(parent, args) { 
        return Winner.find({ teamId: args.teamId });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});