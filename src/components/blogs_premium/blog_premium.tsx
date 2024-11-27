"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaSpinner, FaHeart, FaComment, FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

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

const BlogPremium = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [comments, setComments] = useState<{ [postId: string]: Comment[] }>({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

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
  // const handleLike = (postId: string) => {
  //   setPosts(
  //     posts.map((item) => {
  //       if (item.id === postId) {
  //         return {
  //           ...item,
  //           likes: item.isLiked ? item.likes - 1 : item.likes + 1,
  //           isLiked: !item.isLiked,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };
  const handleLike = async (postId: string) => {
    setPosts(
      posts.map((item) => {
        if (item.id === postId) {
          const updatedLikes = item.isLiked ? item.likes - 1 : item.likes + 1;
          const updatedIsLiked = !item.isLiked;

          // Update the like count and isLiked status locally
          return {
            ...item,
            likes: updatedLikes,
            isLiked: updatedIsLiked,
          };
        }
        return item;
      })
    );

    // Update the post on the API
    try {
      const updatedPost = posts.find((post) => post.id === postId);
      // If the post is not found, return early or handle the error
      if (!updatedPost) {
        console.error("Post not found with ID:", postId);
        return;
      }

      await fetch(
        `https://66fed8002b9aac9c997d9378.mockapi.io/blog/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            ...updatedPost,
            likes: updatedPost.likes,
            isLiked: updatedPost.isLiked,
          }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const formatDate = (date: any) => {
    const day = String(date.getDate()).padStart(2, "0"); // Ensure day is two digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;
    setIsLoading(true);
    try {
      const currentDate = new Date(); // Get current date
      const formattedDate = formatDate(currentDate); // Format the date

      const response = await fetch(
        "https://66fed8002b9aac9c997d9378.mockapi.io/blog",
        {
          method: "POST",
          body: JSON.stringify({
            title: newPost.title,
            content: newPost.content,
            user: userInfo[0].fullName,
            avatar:
              "https://i.pinimg.com/736x/e4/50/9d/e4509dbf81623e547be4b300036a0a7b.jpg",
            comment: [],
            date: formattedDate, // Use the formatted date here
            likes: 0,
            isLiked: false,
            image: "",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();
      const formattedPost = {
        id: data.id,
        user: userInfo[0].fullName,
        ...newPost,
        avatar:
          "https://i.pinimg.com/736x/e4/50/9d/e4509dbf81623e547be4b300036a0a7b.jpg",
        comment: [],
        date: formattedDate, // Use the formatted date here
        likes: 0,
        isLiked: false,
        image: "",
      };

      setPosts([formattedPost, ...posts]);
      setNewPost({ title: "", content: "" });
      setIsExpanded(false);
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleComment = (postId : any) => {
  //   if (newComment.trim()) {
  //     const updatedComments = {
  //       ...comments,
  //       [postId]: [...(comments[postId] || []), {
  //         id: Date.now(),
  //         text: newComment,
  //         user: "Current User",
  //         avatar: "images.unsplash.com/photo-1519244703995-f4e0f30006d5"
  //       }]
  //     };
  //     setComments(updatedComments);
  //     setPosts(posts.map(post => {
  //       if (post.id === postId) {
  //         return { ...post, comments: (post.comments || 0) + 1 };
  //       }
  //       return post;
  //     }));
  //     setNewComment("");
  //   }
  // };
  const handleComment = async (postId: string) => {
    if (newComment.trim()) {
      const updatedComments = {
        ...comments,
        [postId]: [
          ...(comments[postId] || []),
          {
            id: postId,
            text: newComment,
            user: userInfo[0].fullName, // Use the user's full name or default to 'Anonymous'
          },
        ],
      };

      // Update local state for comments
      setComments(updatedComments);

      // Update the number of comments in the post
      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comment: [
                ...post.comment,
                { id: post.id, text: newComment, user: userInfo[0].fullName },
              ],
            };
          }
          return post;
        })
      );

      // Send the new comment to the API
      try {
        const response = await fetch(
          `https://66fed8002b9aac9c997d9378.mockapi.io/blog/${postId}`,
          {
            method: "PUT",
            body: JSON.stringify({
              ...posts.find((post) => post.id === postId),
              comment: [
                ...(posts.find((post) => post.id === postId)?.comment || []),
                {
                  text: newComment,
                  user: userInfo[0].fullName                  
                },
              ],
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        );

        const data = await response.json();
        console.log("Comment added successfully:", data);
      } catch (error) {
        console.error("Error adding comment:", error);
      }

      // Reset the comment input
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Post Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div onClick={() => setIsExpanded(true)} className="cursor-pointer">
              <input
                type="text"
                placeholder="Bạn đang nghĩ gì?"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Post title"
              />
            </div>

            {isExpanded && (
              <div className="space-y-4 animate-fade-in">
                <textarea
                  placeholder="Chia sẻ những gì bạn muốn..."
                  value={newPost.content}
                  onChange={(e) =>
                    setNewPost({ ...newPost, content: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                  aria-label="Post content"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <>
                      <IoSend /> Đăng
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 mb-6">
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
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}

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

                {/* Comments Section */}
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Viết bình luận..."
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      onClick={() => handleComment(item.id)}
                    >
                      bình luận
                    </button>
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
                                  <p className="text-gray-700">
                                    {comment.text}
                                  </p>
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
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPremium;
