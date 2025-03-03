import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
const Blog = ({ blog, deletable, handleDeleteForever }) => {
  const { id, title, cover_image, social_image, description, published_at } =
    blog;
  //   console.log(blog)
  
  return (
    <Link
      to={deletable ? '#' : `/blog/${id}` }
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto relative group hover:no-underline focus:no-underline transition border-2 border-purple-300 p-2 hover:scale-105 duration-300 hover:border-secondary hover:rounded-md"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image ? cover_image : social_image}
      />
      <div className="py-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_at).toDateString()}
        </span>
        <p>{description}</p>
        {deletable && (
          <div onClick={()=>handleDeleteForever(id)} title="delete" className="p-2 -right-5 -top-3 bg-gray-200 rounded-full absolute hover:scale-105">
            <MdDeleteForever
              color="red"
            ></MdDeleteForever>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Blog;
