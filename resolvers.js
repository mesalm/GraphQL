const { author, users, books } = require("./models");

const resolvers = {
  Query: {
    author: async () => {
      try {
        return await author.find();
      } catch (error) {
        throw new Error("Error fetching authors");
      }
    },
    books: async () => {
      try {
        return await books.find().populate("author_id");
      } catch (error) {
        throw new Error("Error fetching books");
      }
    },
    users: async () => {
      try {
        return await users.find();
      } catch (error) {
        throw new Error("Error fetching users");
      }
    },
  },
  Mutation: {
    addUser: async (
      _,
      {
        name,
        age,
        gender,
        eyeColor,
        favoriteFruit,
        companyTitle,
        companyEmail,
        companyPhone,
        companyCountry,
        companyAddress,
        tags,
      }
    ) => {
      try {
        const newUser = new users({
          name,
          age,
          gender,
          eyeColor,
          favoriteFruit,
          isActive: true,
          registered: new Date(),
          company: {
            title: companyTitle,
            email: companyEmail,
            phone: companyPhone,
            location: {
              country: companyCountry,
              address: companyAddress,
            },
          },
          tags,
        });
        await newUser.save();
        return newUser;
      } catch (error) {
        throw new Error("Error adding user");
      }
    },

    updateUser: async (
      _,
      {
        id,
        name,
        age,
        gender,
        eyeColor,
        favoriteFruit,
        companyTitle,
        companyEmail,
        companyPhone,
        companyCountry,
        companyAddress,
        tags,
      }
    ) => {
      try {
        const user = await users.findById(id);
        if (!user) throw new Error("User not found");

        if (name) user.name = name;
        if (age) user.age = age;
        if (gender) user.gender = gender;
        if (eyeColor) user.eyeColor = eyeColor;
        if (favoriteFruit) user.favoriteFruit = favoriteFruit;

        if (companyTitle) user.company.title = companyTitle;
        if (companyEmail) user.company.email = companyEmail;
        if (companyPhone) user.company.phone = companyPhone;
        if (companyCountry) user.company.location.country = companyCountry;
        if (companyAddress) user.company.location.address = companyAddress;

        if (tags) user.tags = tags;

        await user.save();
        return user;
      } catch (error) {
        throw new Error("Error updating user");
      }
    },
  },
};

module.exports = resolvers;
