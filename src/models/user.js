class User {
  static async create(mongoose) {
    const userSchema = new mongoose.Schema({
      email: {
        type: String,
        primaryKey: true,
      },
      name: {
        type: String,
        allowNull: false,
      },
      password: {
        type: String,
      },
    });
    return mongoose.model("User", userSchema);
  }
}

module.exports = User.create;
