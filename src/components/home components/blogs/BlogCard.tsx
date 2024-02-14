type BlogType={
    blogName:string,
    blogImg:string,
    blogDescription:string,
    blogAuthor:string,
    blogPublishedDate:string
}

type PropsType={
    singleBlog:BlogType
}

const BlogCard = ({singleBlog}:PropsType) => {
    const{blogName,blogAuthor,blogDescription,blogImg,blogPublishedDate}=singleBlog
    return (
        <div className="max-w-[400px] min-h-[400px] bg-gray-100 shadow-sm rounded">
              <img className="h-[200px] w-full" src={blogImg} alt="" />
             <div className="p-4 space-y-4">
             <h1 className="font-semibold">{blogName}</h1>
              <p className="text-gray-700 text-sm">{blogDescription}</p>
              <p className="flex flex-col ">
                <span className="font-bold">{blogAuthor}</span>
                <span className="text-sm">{blogPublishedDate}</span>
              </p>
             </div>
            </div>
    );
};

export default BlogCard;