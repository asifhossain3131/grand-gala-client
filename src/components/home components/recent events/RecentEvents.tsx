import { useEffect, useState } from "react";
import SectionTitle from "../../section title/SectionTitle";
import axios from "axios";

type CompletedEventType={
    img:string
}
const RecentEvents = () => {
    const[completedAllEvents,setCompletedAllEvents]=useState([])
 useEffect(()=>{
    const fetchCompletedEvents=async()=>{
        try {
            const res=await axios.get(`https://grand-gala-server.vercel.app/allEvents/Completed`)
            if(res?.data?.success===true){
                setCompletedAllEvents(res?.data?.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchCompletedEvents()
 },[])
    return (
        <div className="lg:flex  items-center justify-center gap-4 lg:gap-x-14">
             <div className="lg:flex lg:flex-col">
             <SectionTitle mainTitle="Recent events" subTitle="Check out our very recent events and clients feedback on the events"></SectionTitle>
             <button className="bg-yellow-500 p-4 rounded font-semibold">Learn more</button>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                {
                    completedAllEvents?.map((event:CompletedEventType,i:number)=>
                     <img key={i} className={`max-w-[200px] max-h-[200px] ${i%2===0? 'rounded':'rounded-full'}`} src={event?.img} alt="" />
                    )
                }
             </div>
        </div>
    );
};

export default RecentEvents;