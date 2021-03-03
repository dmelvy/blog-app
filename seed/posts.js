const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts =
    [
        {
            "title": "Existentialism",
            "imgURL": "https://i.imgur.com/Yd2RYuk.jpg",
            "content": "I found this in my sister's closet.",
            "author": "Daphne Melvin"
      },
      {
            "title": "Goblet of Fire",
            "imgURL": "https://i.imgur.com/aAXn2Ck.jpg",
            "content": "My cup runneth over.",
            "author": "Jessica Embury"
        }
    ]
  
    await Post.insertMany(posts)
    console.log("Created posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()