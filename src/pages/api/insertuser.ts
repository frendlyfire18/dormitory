import {uri,options} from "../../lib/constants";
import { MongoClient } from 'mongodb'

export default async (req, res) => {
  const find_option = req.body.name ? {name:req.body.name,password:req.body.password}:{}
  const client = new MongoClient(uri, options)
  const db = client.db("givemeburger");

  const burgers = await db
    .collection("users")
    .insertOne(find_option)

  res.json(burgers);
};