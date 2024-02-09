import SectionTitle from "../../section title/SectionTitle";

const Sponsors = () => {
    const sponsors=['https://cdn-icons-png.flaticon.com/128/3670/3670145.png','https://cdn-icons-png.flaticon.com/128/11516/11516196.png','https://cdn-icons-png.flaticon.com/128/5969/5969323.png','https://cdn-icons-png.flaticon.com/128/732/732221.png','https://cdn-icons-png.flaticon.com/128/196/196572.png','https://cdn-icons-png.flaticon.com/128/732/732195.png','https://cdn-icons-png.flaticon.com/128/888/888835.png','https://cdn-icons-png.flaticon.com/128/888/888870.png','https://cdn-icons-png.flaticon.com/128/14063/14063019.png','https://cdn-icons-png.flaticon.com/128/214/214493.png']
    return (
        <div className="px-[120px]">
            <SectionTitle mainTitle="Our valuable clients" subTitle=""></SectionTitle>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 justify-center items-center">
                {
                    sponsors?.map((sponsor,i)=>
                        <img className="w-[50px]" key={i} src={sponsor} alt="" />
                        )
                }
            </div>
        </div>
    );
};

export default Sponsors;