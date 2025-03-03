import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const {
    title,
    cover_image,
    social_image,
    description,
    tags,
    body_html,
    url,
  } = blog;
  console.log(url);
  return (
    <div
      className="mx-auto group"
    >
      <div className="border border-gray-200 rounded-md p-2 text-wrap overflow-x-hidden">
        <img
          role="presentation"
          className="object-cover w-full h-full rounded h-44"
          src={cover_image ? cover_image : social_image}
        />
        <div className="py-6 space-y-2">
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
            {tags.map((tag, idx) => (
              <a
                key={idx}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
              >
                #{tag}
              </a>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-2xl font-semibold group-hover:underline group-focus:underline"
          >
            {title}
          </a>
          <p>{description}</p>
        </div>
        {/* this body html is in html form which is not jsx, to convert it from html to jsx, we have to install react markdown and rehype raw  */}
        {/* React Markdown -> https://www.npmjs.com/package/react-markdown*/}
        {/* Rehype raw -> https://www.npmjs.com/package/rehype-raw */}
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
