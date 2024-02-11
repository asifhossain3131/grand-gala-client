import useEventByStatus from "../../../hooks/useEventByStatus";
import SectionTitle from "../../section title/SectionTitle";

const RecentEvents = () => {
    const{relatedEvents}=useEventByStatus('Completed')
    return (
        <div>
             <div className="flex flex-col">
             <SectionTitle mainTitle="Recent events" subTitle="Check out our very recent events and clients feedback on the events"></SectionTitle>
             <button>Learn more</button>
             </div>
        </div>
    );
};

export default RecentEvents;