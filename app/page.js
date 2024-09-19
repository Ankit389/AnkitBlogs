"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
 

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div className="flex flex-col lg:flex-row  bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-700">
        {/* Left Section */}
        <div className="flex-1 flex items-center justify-center p-10 lg:p-20 text-center">
          <div>
            <h1 className="text-2xlxl lg:text-5xl font-bold text-white leading-tight">
              Master <span className="block">very Challenge with </span>{" "}
              Code Masters{" "}
              <span className="block">
                <span ref={el} />
              </span>
            </h1>
            <p className="mt-6 text-white text-xl">
              At CodeMasters, we provide tailored coding solutions designed to
              solve real-world problems. Whether you&#39;re debugging, learning new
              concepts, or developing full-scale applications, our resources and
              expertise are here to guide you every step of the way.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-black text-white rounded-full text-lg">
                Start now
              </button>
              <button className="ml-4 px-6 py-3  border  bg-black border-white text-white rounded-full text-lg">
                Contact sales
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center p-10 lg:p-20">
          <div className=" rounded-lg shadow-lg p-8">
            <Image
              src="/coding.png" // Make sure the file is in the &#39;public&#39; directory
              alt="3D Animation Workstation"
              width={800}
              height={600}
              className="rounded-lg"
              priority
            />
            <h3 className="text-white text-center mt-6">
              Powerful Software Developer Setup
            </h3>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>10GB Storage</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Single User</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <Button
                  className="mx-1 bg-purple-800 text-white"
                  variant="outline"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    50GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Up to 5 Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                </ul>
                <Button
                  className="mx-1 bg-purple-800 text-white"
                  variant="outline"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    200GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <Button
                  className="mx-1  bg-purple-800 text-white"
                  variant="outline"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "This service has been a game-changer for our business. Highly
                  recommend!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  John Doe
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CEO, Company A
                </p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Amazing experience! The team was professional and the results
                  were outstanding."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Jane Smith
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Marketing Director, Company B
                </p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "The best decision we made this year. Their support and
                  service are top-notch."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Michael Lee
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Product Manager, Company C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="post.png"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Front-End Development
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2 bg-purple-800   text-white" variant="outline" href="/blog-post-1">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Back-End Development
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2 bg-purple-800   text-white" variant="outline" href="/blog-post-2">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Full Stack  Web Developer
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2  bg-purple-800   text-white" variant="outline" href="/blog-post-3">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




// "use client";
// import Image from "next/image";
// import React, { useRef, useEffect } from "react";
// import Typed from "typed.js";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Coding", "Web Development", "Software Engineering", "Data Science", "Machine Learning"],
//       typeSpeed: 50,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <main>
//       {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-700">
//         <div className="flex-1 flex items-center justify-center p-10 lg:p-20 text-center">
//           <div>
//             <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
//               Master <span className="block">every Challenge with </span> CodeMasters{" "}
//               <span className="block">
//                 <span ref={el} />
//               </span>
//             </h1>
//             <p className="mt-6 text-white text-xl">
//               At CodeMasters, we provide tailored coding solutions designed to solve real-world problems. Whether you&#39;re debugging,
//               learning new concepts, or developing full-scale applications, our resources and expertise are here to guide you every step
//               of the way.
//             </p>
//             <div className="mt-8">
//               <Button className="px-6 py-3 bg-black text-white rounded-full text-lg">Start now</Button>
//               <Button className="ml-4 px-6 py-3 border bg-black border-white text-white rounded-full text-lg">Contact sales</Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 flex items-center justify-center p-10 lg:p-20">
//           <div className="rounded-lg shadow-lg p-8">
//             <Image src="/coding.png" alt="3D Animation Workstation" width={800} height={600} className="rounded-lg" priority />
//             <h3 className="text-white text-center mt-6">Powerful Software Developer Setup</h3>
//           </div>
//         </div>
//       </div>

//       {/* Pricing Plans Section */}
//       <section className="py-12 bg-gray-100 dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
//             <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {/* Basic Plan */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
//                 <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
//                 <ul className="mt-6 mb-6 space-y-4">
//                   <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
//                   <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
//                   <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
//                   <li className="text-gray-600 dark:text-gray-400">Community Access</li>
//                   <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
//                 </ul>
//                 <Button className="mx-1 bg-purple-800 text-white" variant="outline">Choose Plan</Button>
//               </div>
//             </div>

//             {/* Standard Plan */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
//                 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
//                 <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
//                 <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
//                 <ul className="mt-6 mb-6 space-y-4">
//                   <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
//                   <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
//                   <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
//                   <li className="text-gray-600 dark:text-gray-400">Community Access</li>
//                 </ul>
//                 <Button className="mx-1 bg-purple-800 text-white" variant="outline">Choose Plan</Button>
//               </div>
//             </div>

//             {/* Premium Plan */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
//                 <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
//                 <ul className="mt-6 mb-6 space-y-4">
//                   <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
//                   <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
//                   <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
//                   <li className="text-gray-600 dark:text-gray-400">Community Access</li>
//                   <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
//                 </ul>
//                 <Button className="mx-1 bg-purple-800 text-white" variant="outline">Choose Plan</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




// "use client";
// import Image from "next/image";
// import React, { useRef, useEffect } from "react";
// import Typed from "typed.js";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   // Create reference to store the DOM element containing the animation
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "Coding",
//         "Web Development",
//         "Software Engineering",
//         "Data Science",
//         "Machine Learning",
//       ],
//       typeSpeed: 50,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <main>
//       <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-700">
//         {/* Left Section */}
//         <div className="flex-1 flex items-center justify-center p-10 lg:p-20 text-center">
//           <div>
//             <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
//               Master <span className="block">very Challenge with </span>{" "}
//               CodeMasters{" "}
//               <span className="block">
//                 <span ref={el} />
//               </span>
//             </h1>
//             <p className="mt-6 text-white text-xl">
//               At CodeMasters, we provide tailored coding solutions designed to
//               solve real-world problems. Whether you&#39;re debugging, learning new
//               concepts, or developing full-scale applications, our resources and
//               expertise are here to guide you every step of the way.
//             </p>
//             <div className="mt-8">
//               <button className="px-6 py-3 bg-black text-white rounded-full text-lg">
//                 Start now
//               </button>
//               <button className="ml-4 px-6 py-3  border  bg-black border-white text-white rounded-full text-lg">
//                 Contact sales
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex-1 flex items-center justify-center p-10 lg:p-20">
//           <div className=" rounded-lg shadow-lg p-8">
//             <Image
//               src="/coding.png" // Make sure the file is in the &#39;public&#39; directory
//               alt="3D Animation Workstation"
//               width={800}
//               height={600}
//               className="rounded-lg"
//               priority
//             />
//             <h3 className="text-white text-center mt-6">
//               Powerful Software Developer Setup
//             </h3>
//           </div>
//         </div>
//       </div>

//       <section className="py-12 bg-gray-100 dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
//               Pricing Plans
//             </h2>
//             <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
//               Choose the plan that suits you best
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {/* Basic Plan */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//                   Basic
//                 </h3>
//                 <p className="mt-4 text-gray-500 dark:text-gray-300">
//                   $10/month
//                 </p>
//                 <ul className="mt-6 mb-6 space-y-4">
//                   <li className="text-gray-600 dark:text-gray-400">
//                     <s>10GB Storage</s>
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     <s>Basic Support</s>
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     <s>Single User</s>
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Community Access
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Weekly Updates
//                   </li>
//                 </ul>
//                 <Button
//                   className="mx-1 bg-purple-800 text-white"
//                   variant="outline"
//                 >
//                   Choose Plan
//                 </Button>
//               </div>
//             </div>
//             {/* Standard Plan */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
//                 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//                   Standard
//                 </h3>
//                 <p className="mt-4 text-gray-500 dark:text-gray-300">
//                   $20/month
//                 </p>
//                 <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
//                   Bestseller
//                 </span>
//                 <ul className="mt-6 mb-6 space-y-4">
//                   <li className="text-gray-600 dark:text-gray-400">
//                     50GB Storage
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Priority Support
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Up to 5 Users
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Community Access
//                   </li>
//                 </ul>
//                 <Button
//                   className="mx-1 bg-purple-800 text-white"
//                   variant="outline"
//                 >
//                   Choose Plan
//                 </Button>
//               </div>
//             </div>
//             {/* Premium Plan */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//                   Premium
//                 </h3>
//                 <p className="mt-4 text-gray-500 dark:text-gray-300">
//                   $30/month
//                 </p>
//                 <ul className="mt-6 mb-6 space-y-4">
//                   <li className="text-gray-600 dark:text-gray-400">
//                     200GB Storage
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     24/7 Support
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Unlimited Users
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Community Access
//                   </li>
//                   <li className="text-gray-600 dark:text-gray-400">
//                     Real-time Updates
//                   </li>
//                 </ul>
//                 <Button
//                   className="mx-1  bg-purple-800 text-white"
//                   variant="outline"
//                 >
//                   Choose Plan
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-12 bg-white dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
//               What Our Clients Say
//             </h2>
//             <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
//               Hear from our satisfied customers
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {/* Testimonial 1 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   "This service has been a game-changer for our business. Highly
//                   recommend!"
//                 </p>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   John Doe
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-300">
//                   CEO, Company A
//                 </p>
//               </div>
//             </div>
//             {/* Testimonial 2 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   "Amazing experience! The team was professional and the results
//                   were outstanding."
//                 </p>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Jane Smith
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-300">
//                   Marketing Director, Company B
//                 </p>
//               </div>
//             </div>
//             {/* Testimonial 3 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   "The best decision we made this year. Their support and
//                   service are top-notch."
//                 </p>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Michael Lee
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-300">
//                   Product Manager, Company C
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-gray-100 dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
//               Top Blogs
//             </h2>
//             <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
//               Check out our most popular blog posts
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {/* Blog 1 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//                 <img
//                   src="post.png"
//                   className="w-full h-64 object-cover rounded-t-lg"
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Front-End Development
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-400">
//                     A brief description of the blog post goes here. It should be
//                     engaging and informative.
//                   </p>
//                   <Button className="m-2 bg-purple-800   text-white" variant="outline" href="/blog-post-1">
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             {/* Blog 2 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//                 <img
//                   src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Blog 2"
//                   className="w-full h-64 object-cover rounded-t-lg"
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Back-End Development
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-400">
//                     A brief description of the blog post goes here. It should be
//                     engaging and informative.
//                   </p>
//                   <Button className="m-2 bg-purple-800   text-white" variant="outline" href="/blog-post-2">
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             {/* Blog 3 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//                 <img
//                   src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
//                   alt="Blog 3"
//                   className="w-full h-64 object-cover rounded-t-lg"
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Back-End Development
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-400">
//                     A brief description of the blog post goes here. It should be
//                     engaging and informative.
//                   </p>
//                   <Button className="m-2  bg-purple-800   text-white" variant="outline" href="/blog-post-3">
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }