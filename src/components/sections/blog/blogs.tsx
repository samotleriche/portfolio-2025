import React from "react";
import BlogCard from "@/components/ui/BlogCard";

const filters = ["all", "finance", "software", "misc"];
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis architecto, accusamus minus vitae consequuntur asperiores ex omnis impedit, nam ducimus fugiat? Quaerat odit voluptate aspernatur. Quos minima totam fugiat!
const blogData = [
  {
    title: "Lorem ipsum dolor sit amet",
    key: "first-blog",
    imgUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "nsequuntur asperiores ex omn uuntur asperiores ex omnis asdf asd i",
    category: "finance",
    date: "2021-10-01",
    href: "/blog/first-blog",
  },
  {
    title: "Quaerat odit voluptate aspernatur",
    key: "second-blog",
    imgUrl:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "nsequuntur asperiores ex omn uuntur asperiores ex omnis impedit, nam ducimus fugiat? Quaerat odit voluptate aspernatur. Quos minima totam fugiat!",
    category: "finance",
    date: "2021-10-01",
    href: "/blog/second-blog",
  },
  {
    title: "Quos minima totam fugiat",
    key: "third-blog",
    imgUrl:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "nsequuntur asperiores ex omn uuntur asperiores ex omnis i uuntur asperiores ex omnis i",
    category: "finance",
    date: "2021-10-01",
    href: "/blog/third-blog",
  },
];

function Blogs() {
  return (
    <div className="flex items-center p-section">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="text-gray-400 cursor-pointer hover:text-violet-400"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogData.map((blog, idx) => (
            <BlogCard {...blog} key={blog.title + idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
