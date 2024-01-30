import SectionTitle from "../../section title/SectionTitle";
import GalleryPhotos from "./GalleryPhotos";

const Gallery = () => {
    return (
        <div className="mx-[81px] flex items-center  justify-center gap-x-[120px]">
            <GalleryPhotos></GalleryPhotos>
            <div className="w-1/2">
                <SectionTitle mainTitle="Gallery" subTitle="Best moments with grand gala that will also amaze you how this giving so much facilities with an affordable price which you cannot even imagine. Yes, this is just we. Have a look at our photo gallery for detailed understandings"></SectionTitle>
                <ul>
            {
            ['Strong engagememt','communicative team','Skilled staffs','On time schedule','No late delivery'].map((item,i)=>
                <li key={i} className="flex gap-3 mb-2 items-center">
                    <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/9426/9426997.png" alt="" />
                    <span>{item}</span>
                </li>
                )
            }
        </ul>
            </div>
        </div>
    );
};

export default Gallery;