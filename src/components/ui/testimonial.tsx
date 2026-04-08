import { User } from "lucide-react";

export default function TestimonialSection() {
  return (
    <div className="w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Hero Testimonial Section (from demo.tsx) */}
      <div className="flex flex-col items-center justify-center p-12 md:p-20 w-full bg-blue-700 text-white">
        <a className="mb-8 md:mb-12" href="https://prebuiltui.com">
          <img className="h-10 opacity-80 hover:opacity-100 transition-opacity" src="https://prebuiltui.com/logo.svg?p=white&s=white&t=white" alt="logo white" />
        </a>
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <p className="md:text-4xl text-2xl text-center font-light leading-snug">
            “Our learners are at the heart of everything we do. Explore their inspiring stories of growth, success, and how we helped them achieve their goals.”
          </p>
          <div className="flex items-center gap-4 mt-12 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
              <User size={32} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-xl">Donald Jackman</p>
              <p className="text-blue-200">SWE 1 @ Amazon</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-12">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-white/40 rounded-full"></div>
        </div>
      </div>

      {/* Cards Testimonial Section (from testimonial.tsx) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Card 1 */}
            <div className="max-w-80 w-full bg-black text-white rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 border border-white/5">
              <div className="relative h-48 w-full bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <User size={48} className="text-white/50" />
                </div>
                <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
              </div>
              <div className="px-6 pb-8 pt-2">
                <p className="font-medium border-b border-gray-800 pb-6 text-gray-300 leading-relaxed italic">
                  “Radiant made undercutting all of our competitors an absolute breeze.”
                </p>
                <div className="mt-6">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
                    Content Marketing
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-80 w-full bg-black text-white rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 border border-white/5">
              <div className="relative h-48 w-full bg-gradient-to-br from-blue-900 via-black to-indigo-900 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <User size={48} className="text-white/50" />
                </div>
                <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
              </div>
              <div className="px-6 pb-8 pt-2">
                <p className="font-medium border-b border-gray-800 pb-6 text-gray-300 leading-relaxed italic">
                  “Radiant made undercutting all of our competitors an absolute breeze.”
                </p>
                <div className="mt-6">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
                    Content Marketing
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-80 w-full bg-black text-white rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 border border-white/5">
              <div className="relative h-48 w-full bg-gradient-to-br from-pink-900 via-black to-purple-900 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <User size={48} className="text-white/50" />
                </div>
                <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
              </div>
              <div className="px-6 pb-8 pt-2">
                <p className="font-medium border-b border-gray-800 pb-6 text-gray-300 leading-relaxed italic">
                  “Radiant made undercutting all of our competitors an absolute breeze.”
                </p>
                <div className="mt-6">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
                    Content Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
