import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-euro-blue-900 text-white pt-16 pb-8 text-xs font-medium">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center text-white">
                {/* <span className="font-bold text-xs italic">EM</span> */}
                <img src="/logo.png" alt="logo" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-white tracking-tight">EUROFIN</span>
                <span className="text-[10px] font-bold tracking-widest text-euro-orange-400">MANPOWERS</span>
              </div>
            </a>
            <p className="text-white/70 leading-relaxed mb-6">
              Helping skilled professionals find jobs in Europe, especially Luxembourg, and connecting employers with qualified international talent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-euro-blue-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-euro-blue-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-euro-blue-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-euro-blue-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">Job Openings</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Recruitment & Staffing</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">International Job Placement</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Employer Solutions</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Career Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Industry Workforce Supply</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">HR & Payroll</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block font-bold text-white mb-1">Email:</span>
                careers@eurofinmanpowerss.lu
              </li>
              <li className="text-white/70">
                <span className="block font-bold text-white mb-1">Phone:</span>
                +352 123 456 789
              </li>
              <li className="text-white/70">
                <span className="block font-bold text-white mb-1">Address:</span>
                Boulevard Royal 15, 2449 Luxembourg City, Luxembourg
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Eurofin Manpowers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-40 font-light">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
