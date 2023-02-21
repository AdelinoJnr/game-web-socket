import { MongoClient, Db } from 'mongodb';
const { 
    MONGO_DB_URL = 'mongodb://localhost:27017/gameWebSocket', 
    DB_NAME 
} = process.env;

const OPTIONS: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db: null | Db = null;

const connection = async () => {
  if (db) return Promise.resolve(db);
  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
  db = conn.db(DB_NAME);
  return db;
};

export default connection;