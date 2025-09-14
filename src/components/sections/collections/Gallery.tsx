import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Star,
  Heart,
  ShoppingBag,
} from 'lucide-react';

export default function Gallery() {
  const collections = [
    {
      id: 1,
      title: 'Celestial Dreams Collection',
      description: 'Moon and star inspired pieces',
      mainImage:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
      ],
      pieces: 12,
      priceRange: '$180 - $850',
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      title: 'Vintage Rose Collection',
      description: 'Romantic floral designs in rose gold',
      mainImage:
        'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
      ],
      pieces: 8,
      priceRange: '$220 - $650',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Minimalist Elegance',
      description: 'Clean lines and timeless beauty',
      mainImage:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      ],
      pieces: 15,
      priceRange: '$150 - $480',
      rating: 4.7,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Handcrafted Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections of artisan gold jewelry, each piece lovingly crafted to
            celebrate your unique story
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(collection => (
            <Card
              key={collection.id}
              className="group overflow-hidden hover:shadow-xl transition-shadow border-muted"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.mainImage}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured Collection
                    </div>
                  </div>
                )}

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 gap-2">
                    <Grid3x3 className="size-4" />
                    {collection.images.length} Pieces
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="size-8">
                    <Heart className="size-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="size-8">
                    <Expand className="size-4" />
                  </Button>
                </div>

                {/* Price Range Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-sm text-foreground">
                      {collection.priceRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Collection Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{collection.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="size-4 fill-accent text-accent" />
                    <span>{collection.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{collection.description}</p>

                {/* Collection Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{collection.pieces} unique pieces</span>
                  <span className="font-medium text-foreground">{collection.priceRange}</span>
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {collection.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${collection.title} piece ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full gap-2" variant="outline">
                  <ShoppingBag className="size-4" />
                  Explore Collection
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            <Grid3x3 className="size-4" />
            Browse All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
