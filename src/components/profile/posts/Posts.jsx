import React from 'react'
import d from './Posts.module.css'
import Post from './post/Post'

const Posts = (props) => {

    return (
        <div className={d.posts}>
            {/* <Post send={props.messend} />              */}


            <div className={d.post}>
                <div className={d.postYour}>
                    <figure>
                        <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt="" />

                    </figure>
                    <div className={d.postValio}>
                        {props.messend}
                    </div>
                </div>
                <div className={d.postLikes}>
                    <a href="#">Like</a>
                    <a href="#">Dislike</a>
                    <a href="#">Share</a></div>
            </div>

        </div>
    )
}

export default Posts;