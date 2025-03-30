import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  href: string;
  title: string;
  imgUrl: string;
  description: string;
  date: string;
  category: string;
};

function BlogCard({
  href,
  title,
  imgUrl,
  description,
  date,
  category,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={href} className="flex rounded-2xl group flex-col pb-4 gap-4">
      <div className="bg-gray-700 h-80 group-hover:outline-violet-400 outline outline-transparent transition-colors duration-300 rounded-2xl  relative">
        <Image
          className="inset-0 border border-gray-500 object-cover rounded-2xl"
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <div className="inset-0 bg-gradient-to-b from-gray-500 to-gray-500/0 z-10"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex text-gray-400 gap-1">
          <p>{formattedDate}</p>-<p>{category}</p>
        </div>
        <h2 className="text-2xl line-clamp-2">{title}</h2>
        <p className="text-gray-400 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
