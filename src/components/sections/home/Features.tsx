import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem, Shield, Truck, Award, Heart, Sparkles, Crown, Clock, Star } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Gem,
      title: 'Handcrafted Excellence',
      description:
        'Each piece is meticulously crafted by skilled artisans using traditional goldsmithing techniques passed down through generations.',
      badge: 'Artisan Made',
    },
    {
      icon: Shield,
      title: 'Certified 18K Gold',
      description:
        'All our jewelry is made from certified 18K solid gold with hallmark authentication for guaranteed purity and quality.',
      badge: 'Authentic',
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description:
        'Discover one-of-a-kind pieces that reflect your individual style. No mass production - only exclusive, limited collections.',
      badge: 'Exclusive',
    },
    {
      icon: Truck,
      title: 'Secure Delivery',
      description:
        'Complimentary insured shipping with signature confirmation. Your precious jewelry arrives safely in elegant packaging.',
      badge: 'Free Shipping',
    },
    {
      icon: Award,
      title: 'Lifetime Warranty',
      description:
        'Comprehensive lifetime warranty covering craftsmanship defects, plus complimentary annual cleaning and inspection.',
      badge: 'Guaranteed',
    },
    {
      icon: Heart,
      title: 'Custom Engraving',
      description:
        'Personalize your jewelry with custom engraving services. Add names, dates, or special messages to make it truly yours.',
      badge: 'Personalized',
    },
    {
      icon: Crown,
      title: 'Heirloom Quality',
      description:
        'Built to last generations with superior craftsmanship and timeless designs that never go out of style.',
      badge: 'Timeless',
    },
    {
      icon: Clock,
      title: 'Expert Restoration',
      description:
        'Professional restoration and repair services to keep your Golden Jewels pieces looking pristine for years to come.',
      badge: 'Service',
    },
    {
      icon: Star,
      title: 'VIP Experience',
      description:
        'Enjoy personalized consultations, priority access to new collections, and exclusive member-only events and previews.',
      badge: 'Premium',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Golden Jewels
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafted with Love,
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Made to Last Forever
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the Golden Jewels difference - where traditional craftsmanship meets modern
            elegance to create jewelry that tells your unique story.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to find your perfect piece of handcrafted gold jewelry?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Shop Collection
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
