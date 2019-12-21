import * as mongoose from 'mongoose';

const usersModel: mongoose.Model<mongoose.Document> = mongoose.model(
  'users',
  new mongoose.Schema({
      id: {
        type: Number
      },
      name: {
        type: String
      }
    })
);

export { usersModel };