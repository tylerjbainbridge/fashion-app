import mongoose, { Schema } from 'mongoose';

const Image = new Schema({
  username: String,
  userid: Schema.Types.ObjectId,
  key: String,
  imageURL: String,
  ext: String,
  type: String,
});

export default mongoose.model('Image', Image);
