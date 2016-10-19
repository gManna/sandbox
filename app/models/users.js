import mongoose from "mongoose";

const Userschema = mongoose.Schema({
  name: String,
  surname: String
});

Userschema.set('toJSON', {
	getters: true,
	virtuals: true
});

export default mongoose.model('Usermodel', Userschema)
