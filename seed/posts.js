const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts =
    [
        {
            "title": "To code this weekend, or not to code...that is the question.",
            "imgURL": "https://www.unsplash.com/92hd.png",
            "content": "5 more weeks, you can do it.",
            "author": "Daphne Melvin"
      },
      {
            "title": "Oh the joys of back-end code.",
            "imgURL": "https://www.unsplash.com/64ea.png",
            "content": "Time to go FULL CRUD.",
            "author": "Daphne Melvin"
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