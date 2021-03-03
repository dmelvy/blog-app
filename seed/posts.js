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
        "title": "Lil' Guys",
        "imgURL": "https://images.unsplash.com/photo-1526285592708-e83cf5365929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dHJpbmtldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "content": "E=MC",
        "author" : "Einstein"
      },
      {
        "title": "Vintage",
        "imgURL": "https://images.unsplash.com/photo-1523812483161-8af21dad90dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fHNpbGx5JTIwdHJpbmtldCUyMGNvbGxlY3Rpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "content": "Check out my estate",
        "author" : "grandma"
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