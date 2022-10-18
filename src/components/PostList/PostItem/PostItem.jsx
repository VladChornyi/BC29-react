const PostItem = ({ id, image, title, description }) => {
    return (
        <li className="post-list-item" key={id}>
          <img className="post-list-img" src={image} alt="" />
          <h4 className="post-list-item-title">{title}</h4>
          <p className="post-list-item-text">{description}</p>
        </li>
    )
}
export default PostItem

