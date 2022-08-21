import Post from "./Post/Post";
import { collection, onSnapshot, query, orderBy} from "@firebase/firestore"
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect (()=> {

    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot =>
    {
      setPosts(snpashot.docs);
    });
    return () => {
      
    }
  }, [])
  return (
    <div>
        {posts.map (post => (<Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>))}
        
    </div>
  )
}

export default Posts