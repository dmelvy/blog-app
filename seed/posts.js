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
      },
      {
        "title": "work hard, play harder",
        "imgURL": "https://images.unsplash.com/photo-1502163736820-9bfa4575afcf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlydGJpa2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "content": "party on wayne",
        "author" : "dollydoxyfree "
    },
    ]
  
    await Post.insertMany(posts)
    console.log("Created posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()