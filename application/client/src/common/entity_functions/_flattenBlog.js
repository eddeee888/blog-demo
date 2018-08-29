/**
 * Convinience function to convert a typical blog object that is returned from API
 * @param {Object} blog
 */
const flattenBlog = blog => {
  let result = null;

  if (blog) {
    result = {
      id: blog.id,
      title: blog.title,
      content: blog.content,
      createdAt: blog.created_at,
      authorId: blog.user ? blog.user.id : null,
      authorEmail: blog.user ? blog.user.username : null,
    };
  }
  return result;
};

export default flattenBlog;
