"use client";
import React, { useState, useEffect } from "react";
import { FaSpinner, FaHeart, FaComment, FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

// Define the Post type
interface Post {
  id: string;
  user: string;
  title: string;
  content: string;
  date: string;
  comment: Comment[];
  image: string;
  avatar: string;
  likes: number;
  isLiked: boolean;
}

interface Comment {
  id: string;
  user: string;
  text: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch the posts from the API
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://66fed8002b9aac9c997d9378.mockapi.io/blog"
      );
      const data: Post[] = await response.json();
      setPosts(data); // Set the state with the fetched posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const filteredPost = posts.filter((item) => {
    const matchesSearch =
      (item as { title: string })?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (item as { content: string })?.content
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Handle the like/unlike functionality
  const handleLike = (postId: string) => {
    setPosts(
      posts.map((item) => {
        if (item.id === postId) {
          return {
            ...item,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
            isLiked: !item.isLiked,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex-1 mb-6">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="flex justify-center py-8">
              <FaSpinner className="animate-spin text-4xl text-blue-600" />
            </div>
          ) : filteredPost.length === 0 ? (
            <div className="flex justify-center py-8">
              <p className="text-xl text-gray-400">
                Không tìm thấy bài viết nào liên quan.
              </p>
            </div>
          ) : (
            filteredPost.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.user}</h3>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <div
                  className={`prose ${
                    expandedPost === item.id ? "" : "line-clamp-3"
                  }`}
                  onClick={() =>
                    setExpandedPost(expandedPost === item.id ? null : item.id)
                  }
                >
                  <p className="text-gray-600">{item.content}</p>
                </div>
                {item.content.length > 200 && (
                  <button
                    className="text-blue-600 hover:text-blue-800 text-sm mt-2"
                    onClick={() =>
                      setExpandedPost(expandedPost === item.id ? null : item.id)
                    }
                  >
                    {expandedPost === item.id ? "Show less" : "Read more"}
                  </button>
                )}
                <div className="flex justify-center bg-gray-100">
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="w-[90%] h-90 object-cover rounded-lg"
                  />
                )}
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                      aria-label={item.isLiked ? "Unlike post" : "Like post"}
                    >
                      {item.isLiked ? (
                        <FaHeart className="w-6 h-6 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-6 h-6" />
                      )}
                      <span>{item.likes}</span>
                    </button>
                    <button
                      onClick={() =>
                        setSelectedPost(
                          selectedPost === item.id ? null : item.id
                        )
                      }
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
                      aria-label="Toggle comments"
                    >
                      <FaComment className="w-6 h-6" />
                      <span>{item.comment.length}</span>
                    </button>
                  </div>
                </div>
                {selectedPost === item.id && (
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <h4 className="text-lg font-semibold mb-4">Bình luận</h4>
                    <div className="space-y-4 mb-4">
                      {item.comment.length > 0 ? (
                        <div>
                          {item.comment.map((comment) => (
                            <div
                              key={comment.id}
                              className="flex items-start space-x-3"
                            >
                              <img
                                src={`https://i.pinimg.com/736x/e4/50/9d/e4509dbf81623e547be4b300036a0a7b.jpg`}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div className="flex-1 bg-gray-50 rounded-lg p-3">
                                <p className="font-medium text-gray-900">
                                  {comment.user}
                                </p>
                                <p className="text-gray-700">{comment.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">Chưa có bình luận.</p>
                      )}
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="min-h-screen p-4 sm:p-6 lg:p-8">
  //     <div className="max-w-4xl mx-auto">
  //       <div className="relative flex-1 mb-6">
  //         <input
  //           type="text"
  //           placeholder="Search news..."
  //           value={searchTerm}
  //           onChange={(e) => setSearchTerm(e.target.value)}
  //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //         />
  //         <FiSearch className="absolute right-3 top-3 text-gray-400" />
  //       </div>

  //       {/* Posts List */}
  //       <div className="space-y-6">
  //         {posts.length === 0 ? (
  //           <div className="flex justify-center py-8">
  //             <FaSpinner className="animate-spin text-4xl text-blue-600" />
  //           </div>
  //         ) : filteredPost.length === 0 ? (
  //           <div className="flex justify-center py-8">
  //             <p className="text-xl text-gray-600">Không tìm thấy bài viết nào.</p>
  //           </div>
  //         ) : (
  //           filteredPost.map((item) => (
  //             <article
  //               key={(item as { id: string })?.id}
  //               className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:transform hover:scale-[1.02]"
  //             >
  //               <div className="flex items-center space-x-4 mb-4">
  //                 <img
  //                   src={(item as { avatar: string })?.avatar}
  //                   alt=""
  //                   className="w-12 h-12 rounded-full object-cover"
  //                 />
  //                 <div>
  //                   <h3 className="font-semibold text-lg">
  //                     {(item as { user: string })?.user}
  //                   </h3>
  //                   <p className="text-gray-500 text-sm">
  //                     {(item as { date: string })?.date}
  //                   </p>
  //                 </div>
  //               </div>
  //               <h2 className="text-xl font-bold mb-2">
  //                 {(item as { title: string })?.title}
  //               </h2>
  //               <div
  //                 className={`prose ${
  //                   expandedPost === (item as { id: string })?.id
  //                     ? ""
  //                     : "line-clamp-3"
  //                 }`}
  //                 onClick={() =>
  //                   setExpandedPost(
  //                     expandedPost === (item as { id: string })?.id
  //                       ? null
  //                       : (item as { id: string })?.id
  //                   )
  //                 }
  //               >
  //                 <p className="text-gray-600">
  //                   {(item as { content: string })?.content}
  //                 </p>
  //               </div>
  //               {(item as { content: string })?.content.length > 200 && (
  //                 <button
  //                   className="text-blue-600 hover:text-blue-800 text-sm mt-2"
  //                   onClick={() =>
  //                     setExpandedPost(
  //                       expandedPost === (item as { id: string })?.id
  //                         ? null
  //                         : (item as { id: string })?.id
  //                     )
  //                   }
  //                 >
  //                   {expandedPost === (item as { id: string })?.id
  //                     ? "Show less"
  //                     : "Read more"}
  //                 </button>
  //               )}
  //               {item.image ? (
  //                 <img
  //                   src={(item as { image: string })?.image}
  //                   alt=""
  //                   className="w-full h-64 object-cover rounded-lg mb-4"
  //                 />
  //               ) : (
  //                 <></>
  //               )}

  //               <div className="flex items-center justify-between border-t border-gray-200 pt-4">
  //                 <div className="flex items-center space-x-6">
  //                   <button
  //                     onClick={() => handleLike((item as { id: string })?.id)}
  //                     className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
  //                     aria-label={item.isLiked ? "Unlike post" : "Like post"}
  //                   >
  //                     {item.isLiked ? (
  //                       <FaHeart className="w-6 h-6 text-red-500" />
  //                     ) : (
  //                       <FaRegHeart className="w-6 h-6" />
  //                     )}
  //                     <span>{item.likes}</span>
  //                   </button>
  //                   <button
  //                     onClick={() =>
  //                       setSelectedPost(
  //                         selectedPost === item.id ? null : item.id
  //                       )
  //                     }
  //                     className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
  //                     aria-label="Toggle comments"
  //                   >
  //                     <FaComment className="w-6 h-6" />
  //                     <span>{item.comment.length}</span>
  //                   </button>
  //                 </div>
  //               </div>
  //               {selectedPost === item.id && (
  //                 <div className="mt-6 border-t border-gray-200 pt-4">
  //                   <h4 className="text-lg font-semibold mb-4">Bình luận</h4>
  //                   <div className="space-y-4 mb-4">
  //                     {item.comment.length > 0 ? (
  //                       <div>
  //                         {item.comment.map((comment) => (
  //                           <div
  //                             key={(comment as { id: string })?.id}
  //                             className="flex items-start space-x-3"
  //                           >
  //                             <img
  //                               src={`https://i.pinimg.com/736x/e4/50/9d/e4509dbf81623e547be4b300036a0a7b.jpg`}
  //                               alt=""
  //                               className="w-8 h-8 rounded-full object-cover"
  //                             />
  //                             <div className="flex-1 bg-gray-50 rounded-lg p-3">
  //                               <p className="font-medium text-gray-900">
  //                                 {comment.user}
  //                               </p>
  //                               <p className="text-gray-700">{comment.text}</p>
  //                             </div>
  //                           </div>
  //                         ))}
  //                       </div>
  //                     ) : (
  //                       <p className="text-gray-600">Chưa có bình luận.</p>
  //                     )}
  //                   </div>
  //                 </div>
  //               )}
  //             </article>
  //           ))
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Blogs;
