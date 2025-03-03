import { createBrowserRouter } from "react-router-dom";
import Blogdetails from "../Components/Blogdetails/Blogdetails";
import Root from "../MainlayOut/Root/Root";
import Blogs from "../Pages/Blogs/Blogs";
import BookMarks from "../Pages/BookMarks/BookMarks";
import Home from "../Pages/Home/Home";
import Content from "../Components/Content/Content";
import Author from "../Components/Author/Author";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/bookmarks',
          element:<BookMarks></BookMarks>,
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path:'/blogs',
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element:<Blogs></Blogs>,
        },
        {
          path:'/blog/:blogId',
          element:<Blogdetails></Blogdetails>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.blogId}`),
          children:[
            {
                index:true,
                element:<Content></Content>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.blogId}`),
            },
            {
                path:'author',
                element:<Author></Author>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.blogId}`),
            }
          ]
        }
      ]
    }
  ])