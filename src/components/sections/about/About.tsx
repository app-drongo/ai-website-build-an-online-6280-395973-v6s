import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Artisan Excellence',
      description:
        'Every piece is meticulously handcrafted by master goldsmiths with decades of experience, ensuring unparalleled quality and attention to detail.',
    },
    {
      icon: Lightbulb,
      title: 'Timeless Innovation',
      description:
        'We blend traditional goldsmithing techniques with contemporary design aesthetics to create jewelry that transcends trends.',
    },
    {
      icon: Heart,
      title: 'Personal Connection',
      description:
        "Each piece tells a story. We work closely with our clients to create meaningful jewelry that celebrates life's precious moments.",
    },
    {
      icon: Globe,
      title: 'Ethical Sourcing',
      description:
        'We source only conflict-free gold and ethically mined gemstones, supporting responsible mining practices worldwide.',
    },
  ];

  const stats = [
    { value: '1987', label: 'Established', icon: Award },
    { value: '5,000+', label: 'Satisfied Clients', icon: Users },
    { value: '18K+', label: 'Pieces Crafted', icon: TrendingUp },
    { value: '15+', label: 'Countries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Maria Goldstein',
      role: 'Master Goldsmith & Founder',
      image: 'MG',
      bio: 'Third-generation goldsmith with 35+ years creating heirloom-quality jewelry.',
    },
    {
      name: 'Alessandro Romano',
      role: 'Design Director',
      image: 'AR',
      bio: "Award-winning jewelry designer trained in Florence's finest ateliers.",
    },
    {
      name: 'Priya Sharma',
      role: 'Gemstone Specialist',
      image: 'PS',
      bio: 'Certified gemologist with expertise in rare and precious stone selection.',
    },
    {
      name: 'James Mitchell',
      role: 'Custom Design Consultant',
      image: 'JM',
      bio: 'Specializes in bespoke engagement rings and anniversary collections.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Heritage
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Dreams in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pure Gold Since 1987
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over three decades, Golden Jewels has been creating exquisite handmade gold jewelry
            that celebrates life's most precious moments with unmatched artistry and elegance.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1987 by master goldsmith Maria Goldstein, Golden Jewels began as a small
                atelier with a simple vision: to create jewelry that captures the essence of love,
                celebration, and personal milestones.
              </p>
              <p>
                What started as a passion for traditional goldsmithing has evolved into a renowned
                jewelry house, where each piece is still lovingly handcrafted using time-honored
                techniques passed down through generations.
              </p>
              <p>
                Today, we're proud to have created over 18,000 unique pieces for discerning clients
                worldwide, each one a testament to our commitment to exceptional craftsmanship and
                timeless beauty.
              </p>
            </div>
            <Button className="group">
              Explore Our Collections
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every piece we create carries the soul of the artisan and the dreams of the
                      wearer."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Maria Goldstein, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              The principles that guide our craftsmanship and define our relationship with every
              client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Master Artisans</h3>
            <p className="text-muted-foreground">
              Meet the skilled craftspeople and designers who bring each Golden Jewels creation to
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My custom engagement ring from Golden Jewels exceeded every expectation. The
                craftsmanship is extraordinary, and the personal attention made the entire
                experience unforgettable."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  ER
                </div>
                <div className="text-left">
                  <div className="font-semibold">Emma Richardson</div>
                  <div className="text-sm text-muted-foreground">Bride & Jewelry Collector</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
