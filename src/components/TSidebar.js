import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa'; // React Icons for "Follow Us"

const TSidebar = () => {
  // Data for Popular Posts
  const popularPosts = [
    {
      title: 'Opera Browser Lets You Apply Dark Mode to Web Page',
      author: 'Sora Blogging Tips',
      date: 'July 30, 2020',
      image: '/logo.jpeg',
      category: 'Apple',
    },
    {
      title: 'The 18 Practices for Building Responsive Web Applications',
      date: 'July 30, 2020',
      image: '/404ErrorImage2.webp',
    },
    {
      title: '10 Tips for You to Buy the Best Phone Right Now',
      date: 'July 30, 2020',
      image: '/NewsLogo.png',
    },
    {
      title: '11 of the Best Laptops Evaluated Based on Budget',
      date: 'July 30, 2020',
      image: '/404ErrorImage.webp',
    },
  ];

  // Data for Follow Us
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, bgColor: 'bg-blue-600', url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, bgColor: 'bg-black', url: '#' },
    { name: 'YouTube', icon: <FaYoutube />, bgColor: 'bg-red-600', url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, bgColor: 'bg-gradient-to-r from-pink-500 to-yellow-500', url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, bgColor: 'bg-blue-800', url: '#' },
    { name: 'Skype', icon: <FaSkype />, bgColor: 'bg-sky-600', url: '#' },
  ];

 

  return (
    <div className="space-y-8">
      {/* Popular Posts Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Top 10 News Headlines</h3>
        {/* Main Popular Post */}
        <div className="relative mb-4">
          <img
            src={popularPosts[0].image}
            alt={popularPosts[0].title}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-b-md">
            <span className="bg-blue-600 text-xs font-bold uppercase px-2 py-1 rounded">
              {popularPosts[0].category}
            </span>
            <h4 className="text-md font-bold mt-1">{popularPosts[0].title}</h4>
            <p className="text-xs mt-1">
              by {popularPosts[0].author} - {popularPosts[0].date}
            </p>
          </div>
        </div>

        {/* Smaller Popular Posts */}
        <div className="space-y-4">
          {popularPosts.slice(1).map((post, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-800">{post.title}</h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={`${social.bgColor} text-white flex items-center justify-center gap-2 py-2 rounded-md shadow hover:opacity-90 transition duration-200`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              <span className="text-sm font-semibold">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          Subscribe to our Weekly Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest frontend development resources delivered straight to your
          inbox for free.
        </p>
        <form className="flex flex-col gap-4">
          {/* Email Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-purple-500 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          Explore our{' '}
          <a href="#" className="text-purple-600 hover:underline">
            latest issue
          </a>{' '}
          for a sample.
        </p>
      </div>


      

      {/* Categories Section */}
<div className="bg-purple-100 text-white rounded-lg shadow-md p-6">
  <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center ">Categories</h3>
  <ul className="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
    {[
      'Baby Names',
      'Pregnancy',
      'Life as a Parent',
      'Baby Care',
      'Preschooler & Kids',
     
    ].map((category, index) => (
      <li
        key={index}
        className="relative before:absolute before:top-0 before:left-[-1rem] before:w-1 before:h-full before:bg-cyan-800 before:transition-all before:duration-500 hover:before:left-[calc(100%+1rem)]"
      >
        <a
          href={`#${category.toLowerCase().replace(/ /g, '-')}`}
          data-text={category}
          className="relative bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-cyan-600 transition-all duration-500 before:absolute before:content-[attr(data-text)] before:z-[-1] before:text-purple-400"
        >
          {category}
        </a>
      </li>
    ))}
  </ul>
</div>


{/* Tranding News Posts Section */}
<div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Tranding News</h3>
        {/* Main Popular Post */}
        <div className="relative mb-4">
          <img
            src={popularPosts[0].image}
            alt={popularPosts[0].title}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-b-md">
            <span className="bg-blue-600 text-xs font-bold uppercase px-2 py-1 rounded">
              {popularPosts[0].category}
            </span>
            <h4 className="text-md font-bold mt-1">{popularPosts[0].title}</h4>
            <p className="text-xs mt-1">
              by {popularPosts[0].author} - {popularPosts[0].date}
            </p>
          </div>
        </div>

        {/* Smaller Popular Posts */}
        <div className="space-y-4">
          {popularPosts.slice(1).map((post, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-800">{post.title}</h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>





    </div>
  );
};

export default TSidebar;
