type EventType = {
    event_name: string;
    img: string;
  };
type propType = {
    event:EventType,
    classnames:string,
    imgHeight:string
  };

const EventItemCard = ({event,classnames, imgHeight}:propType) => {
    return (
        <div className={classnames}>
        <img className={imgHeight} src={event?.img} alt="" />
        <h1 className="font-semibold mt-2">{event?.event_name}</h1>
    </div>
    );
};

export default EventItemCard;