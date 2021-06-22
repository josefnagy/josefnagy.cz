import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

import { ContactDetails } from '../../components/home-page/contact'

function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, createdAt } = req.body

    if (
      !name ||
      name.length < 3 ||
      name.length > 15 ||
      name.trim() === '' ||
      !message ||
      message.length < 3 ||
      message.length > 3000 ||
      message.trim() === '' ||
      !email ||
      !validateEmail(email)
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    const newMessage: ContactDetails = {
      name,
      email,
      message,
      createdAt,
    }

    let client

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bqp9g.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(connectionString)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to the DB' })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      res.status(500).json({ message: 'Could not save message to db' })
      return
    }

    client.close()

    res.status(201).json({ message: 'Succesfully mailed message', newMessage })
  }
}

export default handler
