import data from "../../data/data.json";
import PostItem from "./PostItem";
export const PostList = ({title}) => {
  // console.log("props", props);
  return (
    <>
      {title && <h2 className="post-list-title">{title}</h2>}
      <ul className="post-list">
        {data.map(item=>(<PostItem key = {item.id} image={item.image} title={item.title} description={item.description} /> ))}
      </ul>
    </>
  );
};

// Создайте в папке "src" папку "components".
// Создайте компонент "PostList", который будет представлять собой такую разметку:
// <h2 class="post-list-title">Post List</h2>
// <ul class="post-list">
//     <li class="post-list-item">
//         <img class="post-list-img" src="" alt="" />
//         <h4 class="post-list-item-title">Post title</h4>
//         <p class="post-list-item-text">Post text</p>
//     </li>
// </ul>
// Разумеется внутри списка постов будет не один элемент li, а много. Если нужно разделите компонент "PostList" на несколько компонентов. 6. Подумайте, какие props должен получать компонент "PostList" и его составные части и добавьте их в код.
