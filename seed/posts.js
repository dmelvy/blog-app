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
<<<<<<< HEAD
        "title": "Oh the joys of back-end code.",
        "imgURL": "https://www.unsplash.com/64ea.png",
        "content": "Time to go FULL CRUD.",
        "author": "Daphne Melvin"
      },
      {
        "title": "Lil' Guys",
        "imgURL": "https://images.unsplash.com/photo-1526285592708-e83cf5365929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dHJpbmtldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "content": "E=MC",
        "author": "Einstein"
      },
      {
        "title": "Vintage",
        "imgURL": "https://images.unsplash.com/photo-1523812483161-8af21dad90dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fHNpbGx5JTIwdHJpbmtldCUyMGNvbGxlY3Rpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "content": "Check out my estate",
        "author": "grandma"
      },
      {
        "title": "Never to be Forgotten",
        "imgURL": "https://images.unsplash.com/photo-1536604673810-81370412626d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHNpbGx5JTIwdHJpbmtldCUyMGNvbGxlY3Rpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "content": "what used to be is now just memories past...",
        "author": "RIPFloppyDisk"
      },
      {
        "title": "Stuff",
        "imgURL": "https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHNpbGx5JTIwdHJpbmtldCUyMGNvbGxlY3Rpb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
        "content": "Working hard",
        "author": "handyman"
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