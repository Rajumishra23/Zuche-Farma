const LatestUpdates = () => (
  <section className="relative bg-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center leading-snug mb-10">
        Our Latest Updates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <a
            href="blog/Upcoming%20Participation%20in%20Medica%202024-Dusseldorf%2C%20Germany%2011%20-%2014%20November%202024.html"
            className="block"
          >
            <img
              src="/Storage/blog-uploads/01J8HRFWQG8QY8TCN64BVY8QMK.jpg"
              alt="blog"
              className="w-full h-56 object-cover"
            />
          </a>

          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <img src="/icons/message-circle.svg" alt="comments" className="w-4 h-4" />
                02 Comments
              </span>
              <span className="flex items-center gap-1">
                <img src="/icons/calendar.svg" alt="calendar" className="w-4 h-4" />
                Apr 30, 2024
              </span>
            </div>

            <h5 className="text-lg font-semibold leading-snug mt-2">
              <a
                href="blog/Upcoming%20Participation%20in%20Medica%202024-Dusseldorf%2C%20Germany%2011%20-%2014%20November%202024.html"
                className="text-blue-600 hover:underline"
              >
                Upcoming Participation in Medica 2024 – Dusseldorf, Germany
              </a>
            </h5>

            <p className="text-gray-700 mt-2">
              Agra Pharmaceuticals Private Limited, a company incorporate...
            </p>

            <hr className="my-4" />

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <img src="/icons/user.png" alt="user" className="w-4 h-4" />
                Agra Pharmaceuticals Pvt. Ltd.
              </span>
              <a
                href="blog/Upcoming%20Participation%20in%20Medica%202024-Dusseldorf%2C%20Germany%2011%20-%2014%20November%202024.html"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                See More
                <img src="/icons/next.png" alt="next" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="blog.html"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
        >
          View ALL
        </a>
      </div>
    </div>
  </section>
);

export default LatestUpdates;