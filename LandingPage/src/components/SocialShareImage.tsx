import { Palette, Smartphone, Sparkles, Mail, Phone } from 'lucide-react';

export default function SocialShareImage() {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Main content */}
      <div className="relative z-10 text-white text-center px-16 max-w-5xl">
        {/* Icon row */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <Smartphone className="w-12 h-12" strokeWidth={1.5} />
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <Palette className="w-12 h-12" strokeWidth={1.5} />
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <Sparkles className="w-12 h-12" strokeWidth={1.5} />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-7xl font-bold mb-6 tracking-tight">
          Creative Design
          <span className="block mt-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            That Transforms
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-purple-100 mb-8 tracking-wide">
          App UI • Social Media • Branding • Logo Design
        </p>

        {/* Contact info */}
        <div className="flex items-center justify-center gap-8 text-lg">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Mail className="w-5 h-5" />
            <span>danielanyahuru20</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Phone className="w-5 h-5" />
            <span>08071678058</span>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <p className="text-xl text-purple-200">
            Daniel Anyahuru • Portfolio
          </p>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/30 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/30 rounded-br-3xl"></div>
    </div>
  );
}
