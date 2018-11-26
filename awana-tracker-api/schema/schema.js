const graphql = require("graphql");
const _ = require("lodash");
const Book = require("../models/book");
const Author = require("../models/author");
const User = require("../models/user");
const Class = require("../models/class");
const Badge = require("../models/badge");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const users = [
  {
    id: "1",
    name: "AJ Twiss",
    age: 40,
    userType: "Teacher",
    class: "T&T"
  },
  {
    id: "2",
    name: "Caden Twiss",
    age: 10,
    userType: "Student",
    class: "T&T"
  },
  {
    id: "3",
    name: "Ava Twiss",
    age: 7,
    userType: "Student",
    class: "Sparkies"
  }
];

const classes = [
  {
    id: "1",
    name: "Cubies"
  },
  {
    id: "2",
    name: "Sparkies"
  },
  {
    id: "3",
    name: "T&T"
  }
];

const badges = [
  {
    id: 1,
    name: "Section 1",
    url: "assets/img/badge1.png"
  },
  {
    id: 2,
    name: "Section 2",
    url: "assets/img/badge1.png"
  },
  {
    id: 3,
    name: "Section 3",
    url: "assets/img/badge1.png"
  },
  {
    id: 4,
    name: "Seciton 4",
    url: "assets/img/badge1.png"
  }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    userType: { type: GraphQLString }
    // books: {
    //   type: new GraphQLList(BookType),
    //   resolve(parent, args) {
    //     console.log(parent);
    //     // return _.filter(books, { authorId: parent.id})
    //     return Book.find({ authorId: parent.id });
    //   }
    // }
  })
});
const ClassType = new GraphQLObjectType({
  name: "Class",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
    // books: {
    //   type: new GraphQLList(BookType),
    //   resolve(parent, args) {
    //     console.log(parent);
    //     // return _.filter(books, { authorId: parent.id})
    //     return Book.find({ authorId: parent.id });
    //   }
    // }
  })
});

const BadgeType = new GraphQLObjectType({
  name: "Badge",
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    url: { type: GraphQLString}
  })
})
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(users, { id: args.id });
        // return Book.findById(args.id);
      }
    },
    class: {
      type: ClassType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(classes, { id: args.id });
        // return Author.findById(args.id);
      }
    },

  
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
        // return Users.find({});
      }
    },
    classes: {
      type: new GraphQLList(ClassType),
      resolve(parent, args) {
        return classes;
        // return Users.find({});
      }
    },
    badges: {
      type: new GraphQLList(BadgeType),
      resolve(parent, args){
        return badges;
      }
    }
  })
});



module.exports = new GraphQLSchema({
  query: RootQuery,
});
