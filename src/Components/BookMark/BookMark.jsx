import { Link } from "react-router-dom";

const BookMark = ({ bookmark }) => {
    const { id, title, cover_image, social_image, description, published_at } = bookmark;
    console.log(bookmark)
    return (
        <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 border-purple-300 p-2 hover:scale-105 duration-300 hover:border-secondary hover:rounded-md"
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
        </div>
      </Link>
  );
};

export default BookMark;
