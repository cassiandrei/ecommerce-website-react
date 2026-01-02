import { Calendar, User, Tag } from 'lucide-react'

export default function Blog() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary-light py-16 text-center">
        <h1 className="text-4xl font-bold text-dark">Blog</h1>
        <p className="text-dark mt-2">Home &gt; Blog</p>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className="group">
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="flex items-center gap-6 text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    14 Oct 2022
                  </span>
                  <span className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Wood
                  </span>
                </div>

                <h2 className="text-2xl font-medium text-dark mb-4 group-hover:text-primary transition-colors cursor-pointer">
                  Going all-in with millennial design
                </h2>

                <p className="text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                </p>

                <a href="#" className="text-dark font-medium border-b-2 border-dark hover:text-primary hover:border-primary transition-colors">
                  Read more
                </a>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-4 pt-8">
              <button className="w-12 h-12 bg-primary text-white rounded">1</button>
              <button className="w-12 h-12 bg-primary-light text-dark rounded hover:bg-primary hover:text-white transition-colors">2</button>
              <button className="w-12 h-12 bg-primary-light text-dark rounded hover:bg-primary hover:text-white transition-colors">3</button>
              <button className="w-12 h-12 bg-primary-light text-dark rounded hover:bg-primary hover:text-white transition-colors">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </button>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-medium text-dark mb-6">Categories</h3>
              <ul className="space-y-4">
                {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((cat) => (
                  <li key={cat} className="flex justify-between text-gray-500 hover:text-dark cursor-pointer">
                    <span>{cat}</span>
                    <span>2</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-medium text-dark mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex gap-4 cursor-pointer group">
                    <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0" />
                    <div>
                      <h4 className="text-dark group-hover:text-primary transition-colors">
                        Going all-in with millennial design
                      </h4>
                      <p className="text-gray-500 text-sm">03 Aug 2022</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
