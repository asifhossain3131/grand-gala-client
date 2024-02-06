import useEventByStatus from "../../../hooks/useEventByStatus";
import SectionTitle from "../../section title/SectionTitle";

const EventItems = () => {
    const{relatedEvents}=useEventByStatus('Upcoming')
    return (
        <div>
            <SectionTitle mainTitle="Event Items" subTitle="Upcoming events on the schedule. Have a look at the plans and arrangements that will defenitely amaze you"></SectionTitle>
            <div>

            </div>
        </div>
    );
};

export default EventItems;