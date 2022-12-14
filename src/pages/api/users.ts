import {uri,options} from "../../lib/constants";
import { MongoClient } from 'mongodb'

export default async (req, res) => {
  const find_option = req.query.q ? {name:req.query.q}:{}
  const client = new MongoClient(uri, options)
  const db = client.db("givemeburger");

  const burgers = await db
    .collection("users")
    .find(find_option)
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(burgers);
};