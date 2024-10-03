import React from 'react';
  import Link from 'next/link';
  import { buttonVariants } from '@/components/ui/button';
  import fs from "fs";
import matter from 'gray-matter';
import Image from 'next/image';


const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})


const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-lg dark:border-2 overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                By {blog.author} on {blog.date}
              </p>
              {/* <a href={`/blogpost/${blog.slug}`} className="text-blue-500 hover:underline font-medium">
  Read more
</a> */}
<Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline"  })}>Click here</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

