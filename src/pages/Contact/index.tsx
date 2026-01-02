import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary-light py-16 text-center">
        <h1 className="text-4xl font-bold text-dark">Contact</h1>
        <p className="text-dark mt-2">Home &gt; Contact</p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-dark mb-4">Get In Touch With Us</h2>
          <p className="text-gray-500">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-dark flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-dark mb-2">Address</h3>
                <p className="text-dark">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-dark flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-dark mb-2">Phone</h3>
                <p className="text-dark">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-dark flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-dark mb-2">Working Time</h3>
                <p className="text-dark">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-dark font-medium mb-2">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-dark font-medium mb-2">Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-dark font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-dark font-medium mb-2">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-12 py-3 rounded hover:bg-primary/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features */}
      <div className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'High Quality', desc: 'crafted from top materials' },
              { title: 'Warranty Protection', desc: 'Over 2 years' },
              { title: 'Free Shipping', desc: 'Order over 150 $' },
              { title: '24 / 7 Support', desc: 'Dedicated support' },
            ].map((feature) => (
              <div key={feature.title}>
                <h3 className="text-xl font-semibold text-dark">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
