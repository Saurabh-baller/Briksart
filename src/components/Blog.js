// import React, { useState, useEffect } from "react";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch("https://dev.to/api/articles?username=coderamrin")
//       .then((res) => res.json())
//       .then((data) => setBlogs(data.slice(0, 2)))
//       .catch((error) => console.log(error.message));
//   });

//   return (
//     <section className="bg-primary text-white px-5 py-32" id="blog">
//       <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
//         <div className="about-info mb-5">
//           <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
//             Blogs
//           </h2>

//           <p className="pb-5">Some of my best blogs.</p>
//         </div>

//         <div></div>
//       </div>

//       <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
//         {blogs.map((item) => {
//           console.log(item);

//           return (
//             <div>
//               <img src={item.cover_image} alt={item.title} />
//               <h3 className="py-5 text-2xl">{item.title}</h3>
//               <a
//                 href={item.url}
//                 className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
//               >
//                 Read More
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Blog;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Blog.css";

const Blog = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Contact Details</h3>
        <p>Email: </p>
        <p>Phone: 9599494990</p>
      </div>
      <div>
        <h3>Social Media</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
      <div>
        <h3>Address</h3>
        <p>A-106 Kdp Grand Savanna Rajnagar Extension Ghazizbad</p>
      </div>
    </footer>
  );
};

export default Blog;

