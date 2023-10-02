import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'students';

const connection = MongoClient.connect(url)
export default connection