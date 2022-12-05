import {uri,options} from "../../lib/constants";
import { MongoClient } from 'mongodb'

export default async (req, res) => {
  const find_option = req.body.name ? {name:req.body.name}:{}
  const client = new MongoClient(uri, options)
  const db = client.db("givemeburger");

  const burgers = await db
    .collection("users")
    .findOne(find_option)

  if (burgers.password.includes(req.body.password)){
    res.json(true);
  }else{
    res.json(false);
  }
  
};