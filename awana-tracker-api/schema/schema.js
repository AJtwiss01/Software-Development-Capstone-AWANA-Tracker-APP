const graphql = require("graphql");
const _ = require("lodash");
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
  GraphQLNonNull,
  GraphQLInputObjectType
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    userType: { type: GraphQLString },
    classId: {
      type: new GraphQLList(ClassType),
      resolve(parent, arg) {
        console.log(parent.classId);
        // return _.filter(classes, { classId: parent.classId });
        return Class.find({ classId: parent.classId });
      }
    },
    badge1: {
      type: new GraphQLList(BadgeType),
      resolve(parent, arg) {
        console.log("badge ", parent.badge1);
        // return _.filter(badges, { badgeId: parent.badge1 });
        return Badge.find({ badgeId: parent.badge1 });
      }
    },
    badge2: {
      type: new GraphQLList(BadgeType),
      resolve(parent, arg) {
        console.log("badge ", parent.badge2);
        // return _.filter(badges, { badgeId: parent.badge2 });
        return Badge.find({ badgeId: parent.badge2 });
      }
    },
    badge3: {
      type: new GraphQLList(BadgeType),
      resolve(parent, arg) {
        console.log("badge ", parent.badge3);
        // return _.filter(badges, { badgeId: parent.badge3 });
        return Badge.find({ badgeId: parent.badge3 });
      }
    },
    badge4: {
      type: new GraphQLList(BadgeType),
      resolve(parent, arg) {
        console.log("badge ", parent.badge4);
        // return _.filter(badges, { badgeId: parent.badge4 });
        return Badge.find({ badgeId: parent.badge4 });
      }
    },
    badge5: {
      type: new GraphQLList(BadgeType),
      resolve(parent, arg) {
        console.log("badge ", parent.badge5);
        // return _.filter(badges, { badgeId: parent.badge5 });
        return Badge.find({ badgeId: parent.badge5 });
      }
    },
    badge6: {
      type: new GraphQLList(BadgeType),
      resolve(parent, arg) {
        console.log("badge ", parent.badge6);
        // return _.filter(badges, { badgeId: parent.badge6 });
        return Badge.find({ badgeId: parent.badge6 });
      }
    }
  })
});
const ClassType = new GraphQLObjectType({
  name: "Class",
  fields: () => ({
    classId: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

const BadgeType = new GraphQLObjectType({
  name: "Badge",
  fields: () => ({
    badgeId: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const UserDeleteType = new GraphQLInputObjectType({
  name: "UserDeleteType",
  type: UserType,
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(users, { id: args.id });
        return User.findById(args.id);
      }
    },
    class: {
      type: ClassType,
      args: { classId: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(classes, { classId: args.id });
        return Class.findById(args.id);
      }
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // return users;
        return User.find({});
      }
    },
    classes: {
      type: new GraphQLList(ClassType),
      resolve(parent, args) {
        // return classes;
        return Class.find({});
      }
    },
    badges: {
      type: new GraphQLList(BadgeType),
      resolve(parent, args) {
        // return badges;
        return Badge.find({});
      }
    }
  })
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateStudentInfo: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        classId: { type: new GraphQLNonNull(GraphQLString) },
        badge1: { type: GraphQLString },
        badge2: { type: GraphQLString },
        badge3: { type: GraphQLString },
        badge4: { type: GraphQLString },
        badge5: { type: GraphQLString },
        badge6: { type: GraphQLString }
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              age: args.age,
              classId: args.classId,
              badge1: args.badge1,
              badge2: args.badge2,
              badge3: args.badge3,
              badge4: args.badge4,
              badge5: args.badge5,
              badge6: args.badge6
            }
          },
          { new: true }
        ).catch(err => new Error(err));
      }
    },
  
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        userType: { type: new GraphQLNonNull(GraphQLString) },
        classId: { type: new GraphQLNonNull(GraphQLString) },
        badge1: { type: GraphQLString },
        badge2: { type: GraphQLString },
        badge3: { type: GraphQLString },
        badge4: { type: GraphQLString },
        badge5: { type: GraphQLString },
        badge6: { type: GraphQLString }
      },
      resolve(parent, args) {
        let fillUser = new User({
          name: args.name,
          age: args.age,
          userType: args.userType,
          classId: args.classId,
          badge1: args.badge1,
          badge2: args.badge2,
          badge3: args.badge3,
          badge4: args.badge4,
          badge5: args.badge5,
          badge6: args.badge6
        });
        return fillUser.save();
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const removeduser = User.findByIdAndRemove(args.id).exec();
        if (!removeduser) {
          throw new Error("Error");
        }
        return removeduser;
      }
    },
    addBadge: {
      type: BadgeType,
      args: {
        badgeId: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let fillBadge = new Badge({
          badgeId: args.badgeId,
          name: args.name,
          url: args.url
        });
        return fillBadge.save();
      }
    },
    addClass: {
      type: ClassType,
      args: {
        classId: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let fillAuthor = new Class({
          classId: args.classId,
          name: args.name
        });
        return fillAuthor.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
