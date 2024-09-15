import React from 'react';

const blogs = [
  {
    title: 'How to Learn React',
    description: 'A comprehensive guide to learning React.js in 2024.',
    slug: 'learn-react-2024',
    date: '2024-09-15',
    author: 'Gaurav Saini',
    image: 'https://images.pexels.com/photos/7567561/pexels-photo-7567561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Understanding JavaScript Closures',
    description: 'Deep dive into closures in JavaScript and how they work.',
    slug: 'javascript-closures',
    date: '2024-08-25',
    author: 'John Doe',
    image: 'https://images.pexels.com/photos/3182800/pexels-photo-3182800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Exploring TypeScript',
    description: 'Why TypeScript is essential for modern JavaScript development.',
    slug: 'exploring-typescript',
    date: '2024-07-30',
    author: 'Jane Doe',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Next.js Performance Optimization Tips',
    description: 'Maximize the performance of your Next.js applications.',
    slug: 'nextjs-performance-optimization',
    date: '2024-06-15',
    author: 'Alex Smith',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Getting Started with Node.js',
    description: 'A beginner-friendly guide to understanding Node.js and backend development.',
    slug: 'getting-started-with-nodejs',
    date: '2024-05-25',
    author: 'Sarah Lee',
    image: 'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=2048x2048&w=is&k=20&c=k0HGlKZDGIpAIQCx4RUEjdT-KlPoPx5iJyU6QQt9O-8=',
  },
  {
    title: 'Advanced Git Techniques for Teams',
    description: 'Collaborative Git workflows and best practices for teams.',
    slug: 'advanced-git-techniques',
    date: '2024-04-18',
    author: 'Mark Allen',
    image: 'https://media.istockphoto.com/id/844488274/photo/website-front-end-designer-reviewing-wireframe-layout-mockup-ar-screen.jpg?s=2048x2048&w=is&k=20&c=_h978u5NCQ7ngiX5c6Z67q2bQNk-hieWbmemI-aJSqI=',
  },
  {
    title: 'Mastering CSS Grid and Flexbox',
    description: 'An in-depth look at CSS Grid and Flexbox for responsive layouts.',
    slug: 'mastering-css-grid-flexbox',
    date: '2024-03-10',
    author: 'Rachel Green',
    image: 'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Building Scalable Web Applications',
    description: 'Key strategies for building scalable, maintainable web applications.',
    slug: 'building-scalable-web-applications',
    date: '2024-02-14',
    author: 'Michael Johnson',
    image: 'https://images.pexels.com/photos/4050288/pexels-photo-4050288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Introduction to React Native',
    description: 'Learn the fundamentals of building mobile apps with React Native.',
    slug: 'introduction-to-react-native',
    date: '2024-01-20',
    author: 'Gaurav Saini',
    image: 'https://images.pexels.com/photos/3584926/pexels-photo-3584926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
  },
  {
    title: 'Securing Your Web Applications',
    description: 'Essential security practices to protect your web applications.',
    slug: 'securing-your-web-applications',
    date: '2023-12-25',
    author: 'Lisa Brown',
    image: 'https://images.pexels.com/photos/16323581/pexels-photo-16323581/free-photo-of-a-man-sitting-at-a-desk-with-two-monitors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                By {blog.author} on {blog.date}
              </p>
              <a href={`/blogpost/${blog.slug}`} className="text-blue-500 hover:underline font-medium">
  Read more
</a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

