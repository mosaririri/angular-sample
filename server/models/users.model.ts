import * as mongoose from 'mongoose';

const usersModel: mongoose.Model<mongoose.Document> = mongoose.model(
  'users',
  new mongoose.Schema({
      _id: {
        type: String
      },
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
        type: String
      },
      storeCd: {
        type: String
      }
    })
);

export { usersModel };