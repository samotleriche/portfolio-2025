import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";

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
    <Link
      href={href}
      className="group block rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-teal-500/20 z-10"></div>
        <Image
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/60 z-20"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-30">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-violet-500/20 backdrop-blur-sm border border-violet-400/30 text-violet-300 text-xs font-medium">
            <Tag className="w-3 h-3" />
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
          <span className="text-sm font-medium">Read more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
