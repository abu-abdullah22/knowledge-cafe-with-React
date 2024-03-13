import propTypes from 'prop-types' ;
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog , handleAddToBookMark, handleReadTime}) => {
    const {title,cover, reading_time, author, author_image, posted_date, hashtags, id} = blog ;
    return (
        <div className='space-y-6 mt-6 mb-10'>
            <img className='w-full' src={cover} alt="cover" />
        <div className='flex justify-between items-center'>
            <div className='flex gap-6 items-center'>
                <img src={author_image} alt="" />
                <div>
                    <h3 className='text-2xl font-bold text-[#111111]'>{author}</h3>
                    <p className='text-[#11111199]'>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center text-[#11111199] font-semibold'>
                <span>{reading_time} min read</span>
                <button onClick={()=> handleAddToBookMark(blog)} className='text-xl'><CiBookmark /></button>
            </div>
        </div>


            <h2 className="text-4xl font-bold text-[#111111] w-[737px]">{title}</h2>
            <p className='text-xl font-semibold text-[#11111199]'>{hashtags[0]} {hashtags[1]}</p>

            <button onClick={()=> handleReadTime(reading_time, id)} className='text-[#6047EC] underline'>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: propTypes.object.isRequired ,
    handleAddToBookMark : propTypes.func,
    handleReadTime : propTypes.func
}
export default Blog;