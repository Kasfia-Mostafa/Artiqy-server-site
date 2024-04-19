import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'
import AuthRoute from './Routers/AuthRoute.js'

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// Routes


main().catch(err => console.log(err));

async function main() {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ijwgr8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    // {
    //   useNewURLParser:true,
    //   useUnifiedTopology:true
    // }
  )
  .then(()=> app.listen(port, () => {
    console.log(`Artiqy working on ${port}`);
  }))
}


// usage of routes
app.use('/auth', AuthRoute)


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ijwgr8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     const usersCollection = client.db("ArtiqyDB").collection("users");

//     //  user related
//     app.post("/users", async (req, res) => {
//       const user = req.body;
//       const query = { email: user.email };
//       const existUser = await usersCollection.findOne(query);
//       if (existUser) {
//         return res.send({ message: `user already exist`, insertedId: null });
//       }
//       const result = await usersCollection.insertOne(user);
//       res.send(result);
//     });

//     app.get("/users", async (req, res) => {
//       // console.log(req.headers);
//       const result = await usersCollection.find().toArray();
//       res.send(result);
//     });

//     //   app.delete("/users/:id", async (req, res) => {
//     //     const id = req.params.id;
//     //     const query = { _id: new ObjectId(id) };
//     //     const result = await usersCollection.deleteOne(query);
//     //     res.send(result);
//     //   });

//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Artiqy is on work");
// });

// app.listen(port, () => {
//   console.log(`Artiqy working on ${port}`);
// });
