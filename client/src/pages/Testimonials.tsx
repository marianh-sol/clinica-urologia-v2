import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Paciente Verificado",
      source: "Doctoralia",
      text: "Estoy muy agradecido con el Dr. Jorge por su excelente atención. Desde la primera consulta, mostró un gran conocimiento y me explicó todo con mucha claridad. Su trato humano y su dedicación hicieron que todo el proceso fuera mucho más llevadero.",
      rating: 5,
      initial: "P"
    },
    {
      name: "Alberto G.",
      source: "Google Reviews",
      text: "El Dr. Jorge es excepcional. Su profesionalismo y atención al detalle me hicieron sentir muy seguro durante todo mi tratamiento. Gracias a él, pude resolver mi problema de salud de manera rápida y efectiva. Lo recomiendo ampliamente a cualquier persona que busque un urólogo de confianza en Tampico.",
      rating: 5,
      initial: "A"
    },
    {
      name: "María F.",
      source: "Consulta Directa",
      text: "Excelente doctor, muy profesional y amable. Me explicó detalladamente mi padecimiento y el tratamiento a seguir. Las instalaciones son muy limpias y modernas. Totalmente recomendado.",
      rating: 5,
      initial: "M"
    },
    {
      name: "Roberto S.",
      source: "Doctoralia",
      text: "Fui por una segunda opinión y me quedé con el Dr. Delgado. Su diagnóstico fue certero y la cirugía láser fue un éxito. La recuperación fue muy rápida. Gracias doctor.",
      rating: 5,
      initial: "R"
    },
    {
      name: "Laura M.",
      source: "Google Reviews",
      text: "Llevé a mi hijo y el trato fue increíble. Tiene mucha paciencia con los niños y nos dio mucha tranquilidad. Un gran especialista.",
      rating: 5,
      initial: "L"
    },
    {
      name: "Carlos D.",
      source: "Consulta Directa",
      text: "Muy buena atención, puntualidad y profesionalismo. Resuelve todas tus dudas y te da seguimiento puntual. Se nota que le importa la salud de sus pacientes.",
      rating: 5,
      initial: "C"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Testimonios | Opiniones de Pacientes"
        description="Conoce las historias de éxito y testimonios de pacientes atendidos por el Dr. Jorge Delgado en Tampico. Salud urológica con calidad y calidez."
      />
      {/* Header Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Historias de Éxito</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            La satisfacción y salud de nuestros pacientes es nuestra mejor carta de presentación.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Quote className="h-24 w-24 text-primary transform rotate-12" />
                </div>
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 flex items-center space-x-4 border-t border-gray-100">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-secondary font-medium uppercase tracking-wide">{testimonial.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/30 text-center">
        <div className="container space-y-8">
          <h2 className="text-3xl font-bold text-primary">Tu opinión es importante</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos esforzamos cada día por brindar la mejor atención. Si ya eres paciente, nos encantaría conocer tu experiencia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-10 shadow-lg">
                Agendar Cita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
