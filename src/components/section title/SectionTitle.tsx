const SectionTitle = ({mainTitle,subTitle}:{mainTitle:string,subTitle:string}) => {
    return (
        <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-[48px] font-bold mb-3">{mainTitle}</h1>
            <p className="text-[15px]  text-center font-semibold text-[#566B84]">{subTitle}</p>
            </div>
    );
};

export default SectionTitle;