import useEventByStatus from "../../../hooks/useEventByStatus";
import SectionTitle from "../../section title/SectionTitle";
import EventItemCard from "./EventItemCard";

const EventItems = () => {
  const { relatedEvents } = useEventByStatus("Upcoming");
  type EventType = {
    event_name: string;
    img: string;
  };

  return (
    <div>
      <SectionTitle
        mainTitle="Event Items"
        subTitle="Upcoming events on the schedule. Have a look at the plans and arrangements that will definitely amaze you"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[500px] mx-12">
        {/* first column  */}
        <div className="bg-[#D9D9D9] max-w-[412px] p-4 h-full col-span-12 lg:col-span-4 rounded">
          {relatedEvents?.slice(0, 1)?.map((event: EventType, i: number) => (
            <EventItemCard key={i} event={event} classnames={''} imgHeight="min-h-[450px]"></EventItemCard>
          ))}
        </div>
        {/* second column  */}
        <div className="max-w-[412px] h-full col-span-12 lg:col-span-4">
          <div className="lg:flex flex-col gap-4">
            <>
              {relatedEvents
                ?.slice(1, 2)
                ?.map((event: EventType, i: number) => (
                  <EventItemCard imgHeight="max-h-[200px] min-w-full" event={event} classnames="h-[253px] rounded bg-[#D9D9D9] p-4" key={i}></EventItemCard>
                ))}
            </>
            <div className="min-h-[253px] w-full lg:flex gap-4">
                {
                    relatedEvents?.slice(2,4)?.map((event:EventType,i:number)=>
                    <EventItemCard key={i} event={event} classnames="min-h-full mt-3 lg:mt-0 rounded lg:max-w-[196px] bg-[#D9D9D9] p-4" imgHeight="min-h-[200px] min-w-full"></EventItemCard>
                    )
                }
            </div>
          </div>
        </div>
          {/* third column  */}
        <div className="max-w-[412px] h-full col-span-12 lg:col-span-4">
        <div className="flex flex-col gap-4">
            <>
              {relatedEvents
                ?.slice(4, 5)
                ?.map((event: EventType, i: number) => (
                  <EventItemCard imgHeight="max-h-[200px] min-w-full" event={event} classnames="h-[253px] bg-[#D9D9D9] rounded p-4" key={i}></EventItemCard>
                ))}
            </>
            <>
              {relatedEvents
                ?.slice(4,5)
                ?.map((event: EventType, i: number) => (
                  <EventItemCard imgHeight="max-h-[200px] min-w-full" event={event} classnames="rounded h-[253px] bg-[#D9D9D9] p-4" key={i}></EventItemCard>
                ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItems;
