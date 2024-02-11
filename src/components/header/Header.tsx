import './Header.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const Header = () => {
    const routes=[
        {path:'/',pathName:'Home'},
        {path:'/about',pathName:'About'},
        {path:'/contact',pathName:'Contact us'},
        {path:'/dashboard',pathName:'Dashboard'},
    ]

    const [isAnimated, setIsAnimated] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const headerHeight = document.querySelector('.header-bg').offsetHeight;
            setIsScrolled(scrollPosition > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsAnimated(true);
    }, []);
    return (
        <header >
          <nav className={`fixed z-20 w-full p-4 flex items-center justify-between ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <h2 className='font-semibold text-2xl text-yellow-500'>Grand<span className='text-yellow-600 font-bold text-4xl'>Gala</span></h2>
                <ul className='flex items-center justify-around space-x-4 text-yellow-600 font-bold'>
                    {routes.map(({pathName,path},i) =>
                        <Link key={i} to={path}><li>{pathName}</li></Link>    
                    )}
                </ul>
            </nav>
           <div className='relative header-bg min-h-[510px] w-full'>
            <div className='absolute top-48 left-60  lg:w-7/12 mx-auto text-center'>
            <motion.div
                    initial={{ y: -90 }}
                    animate={isAnimated ? { y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                   className='space-y-3'
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={isAnimated ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className='uppercase text-center font-semibold text-4xl text-white'
                    >
                        Brand new event packages <br /><span className='text-[#FFD600]'>for winter</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isAnimated ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-gray-200 text-center'
                    >
                        Want to deal with something amazing that will always remind you the best moment? If so, then visit our latest offers and plans to be a part of the best thing
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={isAnimated ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='bg-[#FFD600] font-semibold px-8 py-2 rounded-sm'
                    >
                        Explore
                    </motion.button>
                </motion.div>
            </div>
           </div>
        </header>
    );
};

export default Header;