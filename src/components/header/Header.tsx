import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const routes=[
        {path:'/',pathName:'Home'},
        {path:'/about',pathName:'About'},
        {path:'/contact',pathName:'Contact us'},
        {path:'/dashboard',pathName:'Dashboard'},
    ]
    return (
        <header >
            <nav className='fixed bg-white z-20 w-full p-4 flex items-center justify-between'>
                  <h2 className='font-semibold text-2xl text-blue-800'>Grand<span className='text-yellow-900 font-bold text-4xl'>Gala</span></h2>
                  <ul className='flex items-center justify-around space-x-4 text-yellow-600 font-bold'>
                    {
                        routes.map(({pathName,path},i)=>
                        <Link key={i} to={path}><li>{pathName}</li></Link>    
                            )
                    }
                  </ul>
            </nav>
           <div className='relative header-bg min-h-[510px] w-full'>
            <div className='absolute top-48 left-72'>
                <h1 className='uppercase text-center font-semibold text-4xl text-white'>Brand new event packages <br /><span className='text-[#FFD600]'>for winter</span></h1>
                <p></p>
            </div>
           </div>
        </header>
    );
};

export default Header;