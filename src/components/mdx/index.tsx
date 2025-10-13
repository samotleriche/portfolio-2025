import CustomLink from "./CustomLink";
import CodeBlock from "./CodeBlock";
import Image from "./Image";
import YouTube from "./YouTube";

// MDX components mapping
export const mdxComponents = {
  a: CustomLink,
  pre: CodeBlock,
  img: Image,
  Image,
  YouTube,
  // Add more components as needed
};

export { CustomLink, CodeBlock, Image, YouTube };
