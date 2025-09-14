import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  RefreshCw,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

export default function Productshowcase() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop"
                alt="Handcrafted 18K Gold Celestial Ring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/api/placeholder/150/150"
                    alt={`Celestial Ring Detail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              <Badge variant="destructive">Artisan Special</Badge>
              <Badge variant="secondary">One-of-a-Kind</Badge>
            </div>

            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Celestial Dreams 18K Gold Ring
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">5.0 (47 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">$1,299</span>
                <span className="text-xl text-muted-foreground line-through">$1,599</span>
              </div>
              <p className="text-sm text-accent">Handcrafted pricing - includes artisan premium</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Exquisitely handcrafted 18K solid gold ring featuring celestial motifs with
              hand-engraved star patterns. Each piece is individually created by master artisans
              using traditional goldsmithing techniques passed down through generations.
            </p>

            {/* Size Options */}
            <div className="space-y-2">
              <span className="text-sm font-medium">Ring Size: 7</span>
              <div className="flex gap-2 flex-wrap">
                {['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5'].map((size, i) => (
                  <button
                    key={i}
                    className={`px-3 py-2 rounded-lg border text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                      size === '7' ? 'bg-primary text-primary-foreground' : 'bg-background'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="icon" className="rounded-r-none">
                  <Minus className="size-4" />
                </Button>
                <span className="px-4 py-2 min-w-[50px] text-center">1</span>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="size-5" />
                Add to Collection
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="size-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-muted">
              <div className="flex items-center gap-2">
                <Truck className="size-5 text-primary" />
                <span className="text-sm">Insured Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-primary" />
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="size-5 text-primary" />
                <span className="text-sm">30-Day Exchange</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-5 text-accent" />
                <span className="text-sm">Ready to Ship</span>
              </div>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="craftsmanship" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="craftsmanship">Craftsmanship</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>
              <TabsContent value="craftsmanship" className="mt-4 space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Hand-forged by master artisans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      Traditional goldsmithing techniques
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Hand-engraved celestial details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Mirror-polished finish</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="materials" className="mt-4">
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Gold Purity:</dt>
                    <dd className="font-medium">18K (75% pure gold)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Weight:</dt>
                    <dd className="font-medium">4.2 grams</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Band Width:</dt>
                    <dd className="font-medium">3.5mm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Origin:</dt>
                    <dd className="font-medium">Ethically sourced</dd>
                  </div>
                </dl>
              </TabsContent>
              <TabsContent value="testimonials" className="mt-4">
                <p className="text-muted-foreground">
                  "Absolutely stunning craftsmanship! The attention to detail is incredible and it's
                  become my most treasured piece." - Sarah M.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
