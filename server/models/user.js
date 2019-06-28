// const mongoose = require('mongoose');

// const Schema = mongoose.Schema

// const userSchema = new Schema({
//   name: String,
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   location: String,
//   created_at: Date,
//   updated_at: Date
// });

// export const User = mongoose.model('User', userSchema);

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

const userSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    account: {
          local: {
            uid: String,
            username: String,
            password: String
          },
          facebook: {
            uid: String,
            username: String,
            password: String
          },
          google: {
            uid: String,
            username: String,
            password: String
          }
    }
  }
)

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.account.local.password);
};

// create the model for users and expose it to our app
export default mongoose.model('User', userSchema);