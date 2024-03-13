import profile from '../../assets/images/boy1.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto mt-6 border-b-2 pb-5'>
             <h1 className='text-4xl font-bold text-[#111111]'>Knowledge Cafe</h1>
             <img style={{width: '40px'}} src={profile} alt="" />
        </header>
    );
};

export default Header;