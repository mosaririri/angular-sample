import * as mongoose from 'mongoose';

const usersModel: mongoose.Model<mongoose.Document> = mongoose.model(
  'users',
  new mongoose.Schema({
      id: {
        type: Number, require: true, unique: true
      },
      name: {
        type: String
      },
      password: {
        type: String
      },
      positionCd: {
        type: Number
      },
      storeCd: {
        type: Number
      }
    })
);

export { usersModel };