import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
  return (
    <section className="section-glamongo bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="subheading-glamongo">
            Our <span className="text-glamongo-purple">Transformations</span>
          </h2>
          <div className="flex justify-center">
            <div className="accent-line" />
          </div>
          <p className="text-glamongo text-glamongo-charcoal/70">
            See the elegance — real clients, real results
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={item}
              className="aspect-square rounded-2xl bg-glamongo-blush/40 hover:scale-105 hover:shadow-rose-lg transition-all duration-300 cursor-pointer overflow-hidden group relative animate-fade-in border-2 border-glamongo-purple/20"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-glamongo-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-glamongo-purple flex items-center justify-center shadow-purple">
                  <span className="text-white text-xl">✨</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center space-y-4">
          <p className="text-glamongo-charcoal/70 font-poppins">Follow us for more elegant transformations</p>
          <button className="btn-glamongo-outline inline-flex items-center gap-2 group">
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>@glamongo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
