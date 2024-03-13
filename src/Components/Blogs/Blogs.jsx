import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types' ;

const Blogs = ({handleAddToBookMark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]) ;

    useEffect(()=>{
        fetch('./public/blog.json')
        .then(res=> res.json())
        .then(data =>setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog=> <Blog blog={blog} key={blog.id} handleReadTime={handleReadTime} handleAddToBookMark={handleAddToBookMark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookMark: propTypes.func ,
    handleReadTime : propTypes.func
}
export default Blogs;