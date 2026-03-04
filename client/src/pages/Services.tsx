import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Activity,
  ShieldCheck,
  Microscope,
  HeartPulse,
  Baby,
  Stethoscope,
  Syringe,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: "litiasis",
      title: "Litiasis Urinaria",
      description: "Diagnóstico y tratamiento de piedras en los riñones, uréteres y vejiga. Utilizamos tecnología láser de última generación para procedimientos mínimamente invasivos.",
      icon: <Activity className="h-12 w-12 text-secondary" />,
      details: ["Ureteroscopia flexible láser", "Nefrolitotricia percutánea"]
    },
    {
      id: "prostata",
      title: "Enfermedades de Próstata",
      description: "Atención integral para el crecimiento prostático benigno y detección temprana de cáncer de próstata.",
      icon: <ShieldCheck className="h-12 w-12 text-secondary" />,
      details: ["Cirugía láser de próstata", "REZUM", "Biopsia de Próstata", "Prostatectomía Radical de Próstata"]
    },
    {
      id: "infecciones",
      title: "Infecciones Urinarias",
      description: "Manejo de infecciones recurrentes y complicadas en hombres y mujeres, con enfoque en la prevención y tratamiento efectivo.",
      icon: <Microscope className="h-12 w-12 text-secondary" />,
      details: ["Cistitis recurrente", "Pielonefritis", "Prostatitis"]
    },
    {
      id: "sexual",
      title: "Salud Sexual Masculina",
      description: "Tratamientos confidenciales y efectivos para disfunción eréctil, eyaculación precoz y otras condiciones.",
      icon: <HeartPulse className="h-12 w-12 text-secondary" />,
      details: ["Tratamiento Médico", "Implantes Peneanos", "Prótesis de Pene", "Tratamiento Hormonal"]
    },
    {
      id: "vph",
      title: "VPH y ETS",
      description: "Diagnóstico, tratamiento y prevención de enfermedades de transmisión sexual, incluyendo el Virus del Papiloma Humano.",
      icon: <Syringe className="h-12 w-12 text-secondary" />,
      details: ["Vacunación VPH", "Eliminación de verrugas", "Check-up sexual"]
    },
    {
      id: "cancer",
      title: "Cáncer Urológico",
      description: "Oncología urológica para el tratamiento de cáncer de riñón, vejiga, próstata y testículo con enfoque multidisciplinario.",
      icon: <Zap className="h-12 w-12 text-secondary" />,
      details: ["Cirugía oncológica", "Inmunoterapia", "Seguimiento oncológico"]
    },
    {
      id: "pediatria",
      title: "Urología Pediátrica",
      description: "Atención especializada para niños con problemas urológicos congénitos o adquiridos.",
      icon: <Baby className="h-12 w-12 text-secondary" />,
      details: ["Fimosis (Circuncisión)", "Criptorquidia", "Enuresis (orina en la cama)"]
    },
    {
      id: "mujer",
      title: "Urología Femenina",
      description: "Tratamiento de incontinencia urinaria y prolapso de órganos pélvicos.",
      icon: <Stethoscope className="h-12 w-12 text-secondary" />,
      details: ["Incontinencia urinaria", "Vejiga hiperactiva", "Infecciones recurrentes"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Nuestros Servicios</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Soluciones médicas avanzadas para tu salud urológica con tecnología de mínima invasión.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 border border-border/50 overflow-hidden group">
                <CardHeader className="bg-accent/30 pb-8 pt-8 relative">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "h-24 w-24 text-primary" })}
                  </div>
                  <div className="bg-white p-4 rounded-full w-fit shadow-sm mb-4 z-10 relative">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary z-10 relative">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 pt-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/contacto" className="inline-flex items-center text-primary font-bold text-sm hover:text-secondary transition-colors cursor-pointer">
                      Agendar consulta <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/30">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold text-primary">¿No encuentras lo que buscas?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para recibir información personalizada sobre tu padecimiento. Estamos aquí para ayudarte.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 shadow-lg">
              Contactar al Doctor
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
