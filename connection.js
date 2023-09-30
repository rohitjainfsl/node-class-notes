import mongoose from "mongoose";

const connection = mongoose.connect(
  "mongodb+srv://mongodbuser:zFMYcFgVV4SS7jA6@cluster0.4ont6qs.mongodb.net/?retryWrites=true&w=majority"
);
export default connection
