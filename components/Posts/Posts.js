import Post from "./Post/Post"

const posts = [
    {
        id:'123',
        username:'joemurua',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'LOL!!!'
    },
    {
        id:'123',
        username:'joemurua',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'LOL!!!'
    }
]
const Posts = () => {
  return (
    <div>
        {posts.map (post => (<Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>))}
        
    </div>
  )
}

export default Posts