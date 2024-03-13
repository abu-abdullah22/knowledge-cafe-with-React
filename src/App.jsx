import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/Bookmarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]) ;
  const[readTime, setReadTime] = useState(0) ;
  const handleAddToBookMark = blog => {
    // console.log(blog);
    const newBookMarks = [...bookmarks, blog] ;
    setBookmarks(newBookMarks) ;
  } 

  const handleReadTime = (time,id) =>{
    const newReadTime = readTime + time ;
    setReadTime(newReadTime) ;
    // remove the bookmark 
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks) ;
  }



  return (
    <>
     <Header></Header>
    <div className='md:flex container mx-auto mt-6 justify-between'>
    <Blogs handleReadTime={handleReadTime} handleAddToBookMark={handleAddToBookMark}></Blogs>
    <BookMarks bookmarks={bookmarks} readTime={readTime}></BookMarks>
    </div>
    </>
  )
}

export default App
