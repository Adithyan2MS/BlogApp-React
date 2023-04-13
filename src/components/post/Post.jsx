import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">Lorem, ipsum dolor sit amet </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia ducimus quae est, soluta obcaecati laudantium cum iure officiis commodi magnam magni repudiandae. Numquam accusantium amet consequatur distinctio excepturi laboriosam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia ducimus quae est, soluta obcaecati laudantium cum iure officiis commodi magnam magni repudiandae. Numquam accusantium amet consequatur distinctio excepturi laboriosam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia ducimus quae est, soluta obcaecati laudantium cum iure officiis commodi magnam magni repudiandae. Numquam accusantium amet consequatur distinctio excepturi laboriosam?
        </p>
    </div>
  )
}
