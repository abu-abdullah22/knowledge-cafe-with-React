import Bookmark from "../Bookmark/Bookmark";
import propTypes from 'prop-types' ;
const BookMarks = ({bookmarks, readTime}) => {
    return (
       <div className="w-1/3">
        <div className="bg-[#EFEDFD] border-2 border-[#6047EC] text-center p-4 rounded-xl mb-5">
            <h2 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readTime}</h2>
        </div>
         <div className="w-full bg-[#F3F3F3] p-5 rounded-[12px]">
            <h2 className="text-2xl font-bold mb-4">Bookmarked Blogs :  {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
       </div>
    );
};
BookMarks.propTypes = {
  bookmarks : propTypes.array ,
  readTime : propTypes.number
}

export default BookMarks;