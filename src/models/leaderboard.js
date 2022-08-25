class Guess {
  static async create(mongoose) {
    const leaderBoardSchema = new mongoose.Schema({
      name: String,
      score: Number,
      date: String,
      position: Number,
    });
    return mongoose.model("LeaederBoard", leaderBoardSchema);
  }
}

module.exports = Guess.create;
