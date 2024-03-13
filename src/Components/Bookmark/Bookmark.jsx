
const Bookmark = ({bookmark}) => {
    const {title} = bookmark ;
    return (
        <div className="bg-white p-3 rounded-[12px] mb-2">
            <h3 className="text-[18px] font-semibold text-[#111111]">{title}</h3>
        </div>
    );
} ;


export default Bookmark;