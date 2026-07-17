"use client"
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-blue-50 rounded-3xl p-12 lg:p-20 border border-blue-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-euro-orange-100 rounded-full mix-blend-screen filter blur-[80px]"></div>
            <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-screen filter blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-euro-blue-900 mb-6 leading-tight tracking-tight"
            >
              Ready to Build Your Future in <span className="text-slate-900">Europe?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              Start your international career journey today or partner with us to find the exceptional global talent your business needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-euro-orange-500 hover:bg-euro-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl transition-all hover:-translate-y-1 shadow-sm"
              >
                <MessageSquare className="w-5 h-5 text-euro-blue-900" />
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
