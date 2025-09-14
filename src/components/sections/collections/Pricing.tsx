import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const collections = [
    {
      name: 'Signature Pieces',
      description: 'Timeless handcrafted gold jewelry for everyday elegance',
      price: '$299',
      period: ' - $899',
      badge: null,
      features: [
        '14k solid gold construction',
        'Hand-forged by master artisans',
        'Lifetime craftsmanship warranty',
        'Complimentary gift packaging',
        'Free resizing within 30 days',
      ],
      cta: 'Explore Collection',
      popular: false,
    },
    {
      name: 'Artisan Elite',
      description: 'Premium handcrafted gold jewelry with precious gemstones',
      price: '$899',
      period: ' - $2,499',
      badge: 'Most Coveted',
      features: [
        '18k solid gold construction',
        'Ethically sourced gemstones',
        'One-of-a-kind designs',
        'Certificate of authenticity',
        'Priority custom modifications',
        'Exclusive member previews',
        'Complimentary annual cleaning',
        'Personal jewelry consultation',
      ],
      cta: 'View Exclusive Pieces',
      popular: true,
    },
    {
      name: 'Bespoke Creations',
      description: 'Custom-designed gold jewelry crafted exclusively for you',
      price: 'Starting',
      period: ' $1,899',
      badge: 'Custom Design',
      features: [
        'Everything in Artisan Elite',
        'Personal design consultation',
        '3D design preview process',
        'Choice of 14k, 18k, or 22k gold',
        'Heirloom-quality construction',
        'Detailed creation documentation',
        'Direct artisan communication',
        'Legacy piece certification',
      ],
      cta: 'Begin Custom Journey',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Collections
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Handcrafted Gold
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Jewelry Collections
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Discover our curated collections of handmade gold jewelry, each piece meticulously
            crafted by skilled artisans using traditional techniques.
          </p>

          {/* Quality Assurance */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Ready to Ship
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Custom Orders
              <Badge variant="secondary" className="ml-2 text-xs">
                2-4 Weeks
              </Badge>
            </button>
          </div>
        </div>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collections.map((collection, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                collection.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {collection.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {collection.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {collection.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {collection.badge && !collection.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {collection.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{collection.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {collection.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{collection.price}</span>
                  {collection.period && (
                    <span className="text-muted-foreground mb-1">{collection.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {collection.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    collection.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={collection.popular ? 'default' : 'outline'}
                >
                  {collection.popular && <Zap className="size-4 mr-2" />}
                  {collection.cta}
                </Button>

                {collection.name === 'Artisan Elite' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free shipping • 30-day returns • Authenticity guaranteed
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Looking for something truly unique?</h3>
          <p className="text-muted-foreground mb-6">
            Our master artisans can create a completely custom piece tailored to your vision. From
            engagement rings to family heirlooms, we bring your dreams to life in gold.
          </p>
          <Button variant="outline" size="lg">
            Schedule Design Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
