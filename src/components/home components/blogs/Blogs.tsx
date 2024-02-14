import useBlogs from "../../../hooks/useBlogs";
import SectionTitle from "../../section title/SectionTitle";
import BlogCard from "./BlogCard";

type BlogType={
    blogName:string,
    blogImg:string,
    blogDescription:string,
    blogAuthor:string,
    blogPublishedDate:string
}
const Blogs = () => {
    const {allBlogs}=useBlogs()
    return (
        <div>
            <SectionTitle mainTitle="Our blogs" subTitle="Having interested in reading blogs? Then these section will defenitely influence you taking an initiative today"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-10/12 mx-auto gap-4">
              {
                allBlogs?.map((singleBlog:BlogType,i:number)=>
              <BlogCard key={i} singleBlog={singleBlog}></BlogCard>
                )
              }
            </div>
        </div>
    );
};

export default Blogs;