import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userModel.js'; // Adjust path if needed

dotenv.config();

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const user = await User.findOne({ email: 'admin@example.com' });
    if (user) {
      user.isAdmin = true;
      await user.save();
      console.log('Admin user updated successfully!');
    } else {
      console.log('User not found!');
    }
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
