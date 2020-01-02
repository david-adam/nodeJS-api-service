import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
  text: {
    type: String
  },
  owner: {
    type: String
  }
});

const Messages = mongoose.model('messages', MessageSchema);

export { Messages };
