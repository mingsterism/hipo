const makeUser = (id, name, image) => {
    return({
      id,
      name,
      image,
      friends: [],
      posts: [],
      addFriend (friend) {
         this.friends.push(friend);
      },
      createPost (post) {
        this.posts.push(post);
      }
    })
  }

  const idCreated = makeUser ('123','John','Perfect Image')
  console.log(idCreated.name)