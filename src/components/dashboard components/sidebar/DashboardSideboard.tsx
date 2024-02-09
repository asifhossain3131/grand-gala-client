import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DashboardSideboard = () => {
    const [open,setOpen]=useState(true)
    const navigate=useNavigate()
    const isAdmin=true
    const usersInfo=[
        {infoName:'User Home', image:'https://img.freepik.com/free-photo/home-sign-icon-front-side-white-background_187299-40318.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'My Cart', route:'/dashboard/cart', image:'https://img.freepik.com/free-vector/shopping-cart-vector-technology-icon-silver-gradient-background_53876-112159.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'My Reservation', image:'https://img.freepik.com/premium-vector/calendar-black-white-icon_118813-10405.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Payment History', route:'/dashboard/paymenthistory', image:'https://img.freepik.com/premium-vector/business-investment-with-money-cash-dollar-paper-receipt-invoice-briefcase-3d-icon-isometric-vector-illustration-financial-account-management-budget-funds-currency-banking-corporate-documents_93487-3783.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Reviews', image:'https://img.freepik.com/free-icon/chat_318-565502.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'}
    ]

    const adminInfo=[
        {infoName:'Event management', image:'https://cdn-icons-png.flaticon.com/128/11287/11287355.png',dropdown:true},
        {infoName:'Services', route:'/dashboard/services', image:'https://cdn-icons-png.flaticon.com/128/11515/11515286.png'},
        {infoName:'Manage food', route:'/dashboard/managefood', image:'https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Manage bookings',  image:'https://img.freepik.com/premium-vector/calendar-date-schedule-flat-concept-design_229280-168.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'All users', route:'/dashboard/allusers', image:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'All orders', route:'/dashboard/allorders', image:'https://img.freepik.com/free-photo/cardboard-box-with-cargo-checklist-pencil_107791-16644.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'}
    ]
    return (
        <div className={`w-20 lg:w-72 bg-black bg-opacity-80 duration-300  relative min-h-screen`}>
           <div className='flex items-center gap-x-2 p-4'>
            <img src={'https://cdn-icons-png.flaticon.com/128/9512/9512709.png'} alt="" className='w-10' />
            <h1 className={`font-semibold text-white text-sm lg:text-xl origin-left hidden lg:inline-block duration-500`}>{isAdmin? 'Admin Dashboard':'User Dashboard'}</h1>
           </div>
          {
            isAdmin? <>
             <ul className='p-3 lg:p-4'>
             {adminInfo.map((admin,i)=>
          
              <li onClick={()=>navigate(admin.route)} key={i} className='cursor-pointer mb-2 flex items-center gap-x-4 p-2 hover:bg-blue-800 rounded'>
             <img src={admin.image} alt="" className='w-10 lg:w-6' />
            <div className='flex items-center justify-between flex-grow'>
            <span className={` text-sm text-white  hidden lg:inline-block origin-left duration-200`}>{admin.infoName}</span>
             {admin.dropdown && <KeyboardArrowDownIcon className='text-white hidden lg:inline-block'></KeyboardArrowDownIcon>}
            </div>
             </li>
            )}
           </ul>
            </> :
            <>
             <ul className='p-6'>
             {usersInfo.map((userInfo,i)=>
          
              <li onClick={()=>navigate(userInfo.route)} key={i} className='cursor-pointer flex items-center gap-x-4 p-2 hover:bg-yellow-500 rounded'>
             <img src={userInfo.image} alt="" className='w-8' />
             <span className={`font-semibold text-white ${!open && 'hidden origin-left duration-200'}`}>{userInfo.infoName}</span>
             </li>
            
            )}
           </ul>
            </>
          }
          {/* <span onClick={()=>navigate(-1)} className='text-white text-center underline font-semibold  lg:text-2xl cursor-pointer'>Go Back</span> */}
        </div>
    );
};

export default DashboardSideboard;