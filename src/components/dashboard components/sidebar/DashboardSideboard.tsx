import { useLocation, useNavigate } from 'react-router-dom';


// type AdminRouteTypes={
//     infoName:string,
//     image:string,
    
// }
const DashboardSideboard = () => {
    const navigate=useNavigate()
    const isAdmin=true
    const location=useLocation()


    const adminInfo=[
        {infoName:'Event management', image:'https://cdn-icons-png.flaticon.com/128/11287/11287355.png', route:'/dashboard'},
        {infoName:'Services', route:'/dashboard/services', image:'https://cdn-icons-png.flaticon.com/128/11515/11515286.png'},
        {infoName:'Manage works', route:'/dashboard/manageWorks', image:'https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        // {infoName:'Manage bookings',  image:'https://img.freepik.com/premium-vector/calendar-date-schedule-flat-concept-design_229280-168.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        // {infoName:'All users', route:'/dashboard/allusers', image:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        // {infoName:'All orders', route:'/dashboard/allorders', image:'https://img.freepik.com/free-photo/cardboard-box-with-cargo-checklist-pencil_107791-16644.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'}
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
          
              <li onClick={()=>navigate(admin.route)} key={i} className={`cursor-pointer mb-2 flex items-center gap-x-4 p-2 hover:bg-blue-400  rounded ${location.pathname===admin.route?'bg-blue-900':''}`}>
             <img src={admin.image} alt="" className='w-10 lg:w-6' />
            <div className='flex items-center justify-between flex-grow'>
            <span className={` text-sm text-white  hidden lg:inline-block origin-left duration-200`}>{admin.infoName}</span>
             {/* {admin && <KeyboardArrowDownIcon className='text-white hidden lg:inline-block'></KeyboardArrowDownIcon>} */}
            </div>
             </li>
            )}
           </ul>
            </> :
            <>
            </>
          }
        </div>
    );
};

export default DashboardSideboard;