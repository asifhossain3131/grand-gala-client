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
            <nav className='fixed z-20 w-full p-4 flex items-center justify-between'>
                  <h2 className='font-semibold text-2xl text-blue-800'>Grand<span className='text-yellow-900 font-bold text-4xl'>Gala</span></h2>
                  <ul className='flex items-center justify-around space-x-4 text-yellow-600 font-bold'>
                    {
                        routes.map(({pathName,path},i)=>
                        <Link key={i} to={path}><li>{pathName}</li></Link>    
                            )
                    }
                  </ul>
            </nav>
           <div className='relative'>
           <img className=' header-bg h-[510px] w-full' src="https://s3-alpha-sig.figma.com/img/4393/7760/c5034ee21592b00665072e9f1d9d7a5d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBr0MrmrKzwarg1-LkFweH43HxQc6vaRGnhVsHIGMfWW~w1SRdGLtxzU~SzCnGXp~jWSOmh6ZT04-s~nzvgsB0vltiPrrw1-m0WvngGLCqudh2QnFIHR3tatnnE-zo9WJFeTvNoOcB7YlaC3u6wDLQQ1vD1bKlfMo~E5KdWgpe30bUDMXQJoQyhRQlbsCtF~cOdn7AAx9uWxOJKjt6CxyFzDJvpOatZ8Or3vZXwGLODol5YDBLTPUiWIgdUXebbpS0sqAEbNwR8Z-duBCla-kBDPLL3K9CikKdvyJaS2luMp3FIL6D4zdOO0WoxpBmCi160auEzAzvuc8e5bxLB5JA__" alt="" />
            <div className='absolute '>
                dfdf
            </div>
           </div>
        </header>
    );
};

export default Header;