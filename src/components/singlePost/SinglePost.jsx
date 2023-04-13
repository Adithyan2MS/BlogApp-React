import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit, amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1> 
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Adi</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>   
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in cumque consectetur debitis distinctio voluptatem eos aperiam earum soluta tenetur, similique velit, ea sed accusantium iste eum, culpa fuga. Eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in cumque consectetur debitis distinctio voluptatem eos aperiam earum soluta tenetur, similique velit, ea sed accusantium iste eum, culpa fuga. Eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in cumque consectetur debitis distinctio voluptatem eos aperiam earum soluta tenetur, similique velit, ea sed accusantium iste eum, culpa fuga. Eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in cumque consectetur debitis distinctio voluptatem eos aperiam earum soluta tenetur, similique velit, ea sed accusantium iste eum, culpa fuga. Eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in cumque consectetur debitis distinctio voluptatem eos aperiam earum soluta tenetur, similique velit, ea sed accusantium iste eum, culpa fuga. Eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in cumque consectetur debitis distinctio voluptatem eos aperiam earum soluta tenetur, similique velit, ea sed accusantium iste eum, culpa fuga. Eum.
            </p>
        </div>
    </div>
  )
}
