import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function GalleryPhotos() {
  return (
    <ImageList  sx={{ maxWidthidth: 630, maxHeight: 650 }} variant="woven" cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167261.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Bed',
  },
  {
    img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Kitchen',
  },
  {
    img: 'https://img.freepik.com/free-photo/tall-centrepiece-made-pink-flowers-crystal-chains-stands-dinner-table_1304-3336.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Sink',
  },
  {
    img: 'https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167256.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Books',
  },
  {
    img: 'https://img.freepik.com/free-photo/magic-view-prepared-evening-restaurant_8353-9910.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Chairs',
  },
  {
    img: 'https://img.freepik.com/free-photo/front-view-friends-having-lunch_23-2150598427.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Candle',
  },
  {
    img: 'https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167222.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais',
    title: 'Laptop',
  },
  {
    img: 'https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph',
    title: 'Doors',
  },
  {
    img: 'https://img.freepik.com/free-photo/waiting-room-with-monitors_1232-1390.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph',
    title: 'Coffee',
  },
  {
    img: 'https://img.freepik.com/free-photo/crowd-people-are-standing-club-with-pink-purple-lights_1340-32809.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph',
    title: 'Storage',
  },
  {
    img: 'https://img.freepik.com/free-photo/corporate-businessman-giving-presentation-large-audience_53876-101865.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph',
    title: 'Coffee table',
  },
  {
    img: 'https://img.freepik.com/free-photo/rear-view-excited-fans-having-fun-music-festival-taking-pictures-stage-with-their-smart-phones-copy-space_637285-607.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph',
    title: 'Blinds',
  },
];