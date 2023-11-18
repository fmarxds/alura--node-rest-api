import mongoose from 'mongoose';

async function connect() {
    mongoose.connect(process.env.DB_CONNECTION_URI)
        .then(() => console.log('Connected to database!'))
        .catch(err => console.error(err));
}

export default connect;
