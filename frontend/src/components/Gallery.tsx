import { Instagram } from "lucide-react";

const galleryImages = [
  "/images/gallery/gallery-1.png",
  "/images/gallery/gallery-2.png",
  "/images/gallery/gallery-3.png",
  "/images/gallery/gallery-4.png",
  "/images/gallery/gallery-5.png",
  "/images/gallery/gallery-6.png",
  "/images/gallery/gallery-7.png",
  "/images/gallery/gallery-8.png",
  "/images/gallery/gallery-9.png",
];

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl bg-glamongo-blush/40 hover:scale-105 hover:shadow-rose-lg transition-all duration-300 cursor-pointer overflow-hidden animate-fade-in border-2 border-glamongo-purple/20"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
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
