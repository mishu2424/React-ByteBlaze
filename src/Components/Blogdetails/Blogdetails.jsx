import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { addToStorage } from "../../Utility/localStorage";
const Blogdetails = () => {
  const blog = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
//   console.log(blog);
  const {
    slug,
    comments_count,
    reading_time_minutes,
    published_timestamp,
    public_reactions_count,
  } = blog;

  const handleBookMarks=(blog)=>{
    addToStorage(blog.id)
  }
  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 ">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {slug}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm text-black">
                {reading_time_minutes} min read •{" "}
                {new Date(published_timestamp).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0 text-black">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
          <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
            <Link to=''
              onClick={()=>setTabIndex(0)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              to={`author`}
              onClick={()=>setTabIndex(1)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div onClick={()=>handleBookMarks(blog)} className="rounded-full bg-pink-300 text-primary p-2 ml-3 cursor-pointer hover:scale-110 duration-100 overflow-hidden">
            <MdBookmarkAdd size={20}></MdBookmarkAdd>
            </div>
          </div>
        </div>
      </article>
      <Outlet></Outlet>
    </div>
  );
};

export default Blogdetails;
