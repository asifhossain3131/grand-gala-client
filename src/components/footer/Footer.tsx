
const Footer = () => {
    const footerContents=[
        {
            title:'Product',
            children:['Pricing','Overview','Browse','Accessibility']
        },
        {
            title:'Solutions',
            children:['Brainstorming','Ideation','Wireframing','Research']
        },
        {
            title:'Resources',
            children:['Help center','Blog','Tutorial','FAQS']
        },
        {
            title:'Support',
            children:['Contact us','Developer','Documentation','Integration']
        },
        {
            title:'Company',
            children:['About','Press','Event','Request demo']
        },
    ]
    return (
        <div className="bg-black text-white px-[80px] py-[40px]">
            <div className="">
            <div className="flex justify-between my-[48px]">
                <h1>Grand<span>Gala</span></h1>
                {
                    footerContents?.map(content=>
                        <ul className="">
                            <h1 className="font-semibold mb-3">{content.title}</h1>
                            {
                                content.children?.map(child=>
                                    <li className="mb-2">{child}</li>
                                    )
                            }
                        </ul>
                        
                        )
                }
            </div>
            {/* footer's footer  */}
            <div className="flex justify-between">
                <p>@2023. All rights are reserved</p>
                <div>
                    {
                        ['Teams','Privacy','Contact']?.map(item=>
                            <span className="mx-2">{item}</span>
                            )
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;