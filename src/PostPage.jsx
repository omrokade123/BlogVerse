import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'>
      <article className='post'>
            {post && 
                <>
                   <h2>{post.title}</h2>
                   <p className='postDate'>{post.dateTime}</p>
                   <p className='postBody'>{post.body}</p>
                   <Link to={`/edit/${post.id}`}><button className='editButton' style={{backgroundColor: "skyblue"}}>Edit Post</button></Link>&nbsp;
                   <button onClick={(e) => handleDelete(post.id)}>Delete post</button>

                </>
            } 
            {!post &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing</p>
                    <p>
                      <Link to='/'>Visit Our HomePage</Link>
                    </p>
                </>
            }
      </article>
    </main>
  )
}

export default PostPage