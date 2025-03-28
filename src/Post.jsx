import React from 'react'
import { Link } from 'react-router'

const Post = ({post}) => {
  return (
    <article className='post'>
        
           <h2>{post.title}</h2>
           <p className='postDate'>{post.dateTime}</p>
        <p className='postBody'>{
          (post.body).length <= 30
           ? post.body
           : `${(post.body).slice(0,35)}`    
        }</p>
         <Link to={`/post/${post.id}`}>
           <button style={{backgroundColor:"skyblue",color: "white",height: "30px",padding: "5px",borderRadius: "10px",fontWeight: "bold"}}>View in detail</button>
        </Link>
    </article>
  )
}

export default Post