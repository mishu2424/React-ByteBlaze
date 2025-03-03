import { useEffect, useState } from "react";
import { getStoredCart, removeFromCart } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
// import BookMark from "../../Components/BookMark/BookMark";
import Blog from "../../Components/Blog/Blog";
import EmptyPage from "../../Components/EmptyPage/EmptyPage";

const BookMarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const blogs = useLoaderData();
    // console.log(blogs)
    const handleDeleteForever=(id)=>{
        removeFromCart(id);
        const remainingBookMarks=bookmarks.filter(bookMark=>bookMark.id!==id);
        // console.log(remainingBookMarks);
        setBookmarks([...remainingBookMarks]);
      }
    useEffect(()=>{
        const getStoredIds = getStoredCart();
        const newCart=[]
        getStoredIds.forEach(id=>{
            const foundBlog=blogs.find(b=>b.id===id);
            newCart.push(foundBlog);
        });
        setBookmarks(newCart)
    },[])

    if(bookmarks.length<1) return <EmptyPage message={"No Bookmarks found !!!"} address={'/blogs'}></EmptyPage>
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0 my-9">
           {
            bookmarks.map((blog,idx)=><Blog deletable={true} handleDeleteForever={handleDeleteForever} key={idx} blog={blog}></Blog>)
           } 
        </div>
    );
};

export default BookMarks;