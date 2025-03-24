import Link from "next/link";
import React from "react";

type BlogCardProps = {
  href: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

function BlogCard({ href, title, description, date, category }: BlogCardProps) {
  return (
    <Link href={href} className="flex rounded-2xl group flex-col pb-4 gap-4">
      <div className="bg-gray-700 h-80 group-hover:outline-violet-400 outline outline-transparent transition-colors duration-300 rounded-2xl border border-gray-500"></div>
      <div className="flex flex-col gap-1">
        <div className="flex text-gray-400 gap-3">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <h2 className="text-2xl line-clamp-2">{title}</h2>
        <p className="text-gray-400 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
