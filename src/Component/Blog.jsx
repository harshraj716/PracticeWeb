const BlogCard = ({ author, date, title, description, tags, image, href = "#" }) => {
  return (
    <article className="flex flex-col space-y-4">
      <img src={image || "/placeholder.svg"} alt="" className="w-full aspect-[4/3] object-cover rounded-lg" />
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          <a href={href} className="group">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600">
              <span className="flex items-center gap-2">
                {title}
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M7 21L17 11M17 11H7M17 11V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h3>
          </a>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                tag.type === "purple"
                  ? "bg-[#F9F5FF] text-[#C11574]"
                  : tag.type === "blue"
                    ? "bg-[#EEF4FF] text-blue-700"
                    : tag.type === "pink"
                      ? "bg-[#FDF2FA] text-[#C01048]"
                      : "bg-[#FFF1F3] text-[#C01048]"
              }`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function BlogSection() {
  const blogs = [
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20(5)-qJN0KU5FIbWiZupY8uuHI6EPywYCW2.svg",
      tags: [
        { text: "Tax & Audit", type: "purple" },
        { text: "Management", type: "blue" },
      ],
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20(2)-EMvTGbYHs0liFOJFbpnJw7DYaFxLxg.svg",
      tags: [
        { text: "Tax", type: "blue" },
        { text: "Research", type: "purple" },
        { text: "Compliance", type: "pink" },
      ],
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and Its Principles. Learn from the best in the industry.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20(6)-j819ZCNErkYn3263Lz3eol36Zqnl8C.svg",
      tags: [
        { text: "Audit", type: "purple" },
        { text: "Money Back", type: "blue" },
      ],
    },
    {
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20(4)-pC35249vgulQ6CpTuU9D80JqHGapi7.svg",
      tags: [
        { text: "Money", type: "purple" },
        { text: "Management", type: "blue" },
      ],
    },
    {
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201000003386-N8V1U61AP0nBQ43zBcOM8EMcJohPtN.png",
      tags: [
        { text: "Tax Return", type: "blue" },
        { text: "News", type: "purple" },
        { text: "Audit", type: "pink" },
      ],
    },
    {
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20wrap-iWYXlxBjsjw8t9ne5S9Bsc9KHyLwlA.svg",
      tags: [
        { text: "Private Limited Company", type: "purple" },
        { text: "Customer Success", type: "blue" },
      ],
    },
  ]

  return (
    <div className="text-center  py-10 px-20 overflow-x-hidden">
      <p className="text-orange-500 uppercase text-sm font-bold">Explore Our Blogs</p>
      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Accelerate Digital Transformation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {blog.author} • {blog.date}
              </p>
              <h3 className="text-lg font-semibold mt-2 text-gray-800 hover:text-blue-600 cursor-pointer">
                {blog.title} <span className="ml-2">↗</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-600 py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="mt-10 inline-block text-white font-medium transition-colors"
        style={{ backgroundColor: 'rgba(28, 70, 112, 1)', padding: '10px 20px', borderRadius: '5px' }}
      >
        Show more blogs &gt;
      </a>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>

    <div className="flex justify-center mt-12">
      <button className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
        Show more blogs
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>


  )
}

