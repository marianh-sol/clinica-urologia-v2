import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import BlurImage from '@/components/BlurImage';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  UserCheck,
  Clock,
  Star,
  CheckCircle2,
  Stethoscope,
  Microscope,
  HeartPulse,
  Phone,
  HelpCircle,
  Calendar
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const services = [
    {
      title: "Litiasis Urinaria",
      description: "Tratamiento avanzado para piedras en los riñones con tecnología de mínima invasión.",
      icon: <Activity className="h-10 w-10 text-secondary" />,
      link: "/servicios"
    },
    {
      title: "Salud Prostática",
      description: "Diagnóstico y tratamiento para enfermedades de la próstata y prevención del cáncer.",
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      link: "/servicios"
    },
    {
      title: "Infecciones",
      description: "Manejo efectivo de infecciones de vías urinarias recurrentes y complejas.",
      icon: <Microscope className="h-10 w-10 text-secondary" />,
      link: "/servicios"
    },
    {
      title: "Salud Sexual",
      description: "Tratamientos para disfunción eréctil, VPH y planificación familiar (vasectomía).",
      icon: <HeartPulse className="h-10 w-10 text-secondary" />,
      link: "/servicios"
    },
  ];

  const features = [
    "Cirugía de Mínima Invasión",
    "Atención Personalizada",
    "Tecnología de Vanguardia",
    "Certificado por el Consejo Nacional",
    "Miembro de la AUA",
    "Ubicación Céntrica"
  ];

  const faqs = [
    {
      question: "¿Qué padecimientos trata el Dr. Jorge Delgado?",
      answer: "El Dr. Delgado es especialista en Urología y trata una amplia gama de condiciones, incluyendo piedras en los riñones (litiasis), enfermedades de la próstata (crecimiento benigno y cáncer), infecciones urinarias recurrentes, disfunción eréctil, incontinencia urinaria, y padecimientos urológicos en niños como la fimosis."
    },
    {
      question: "¿Atiende a mujeres y niños?",
      answer: "Sí, absolutamente. La urología no es exclusiva de hombres. El Dr. Delgado ofrece atención especializada para mujeres (infecciones urinarias, incontinencia) y niños (circuncisión, enuresis, testículo no descendido) con un trato humano y adecuado para cada edad."
    },
    {
      question: "¿Necesito preparación especial para mi primera consulta?",
      answer: "No es estrictamente necesario, pero se recomienda traer estudios previos (laboratorios, ultrasonidos, tomografías) si cuenta con ellos, así como una lista de los medicamentos que toma actualmente. Esto ayudará al doctor a tener un panorama más completo de su salud desde la primera visita."
    },
    {
      question: "¿Realizan cirugías de emergencia?",
      answer: "Sí, atendemos urgencias urológicas como cólicos renales severos (piedras), retención urinaria aguda o torsión testicular. Si presenta una emergencia, por favor acuda directamente a urgencias de La Bene Hospital o contáctenos inmediatamente."
    },
    {
      question: "¿Dónde se encuentra ubicado el consultorio?",
      answer: "Estamos ubicados en el Consultorio #407 del 4o Piso de La Bene Hospital (Beneficencia Española), en Av. Miguel Hidalgo 3909, Colonia Guadalupe, Tampico, Tamaulipas. Contamos con estacionamiento disponible en el hospital."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] lg:h-[800px] flex items-center justify-center overflow-hidden pb-20 lg:pb-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Consultorio Urológico Moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 lg:pt-20">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Especialista Certificado
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading text-shadow animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-forwards">
              Cuidando tu Salud Urológica con <span className="text-secondary">Experiencia</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards">
              Atención especializada para hombres, mujeres y niños. Soluciones efectivas con tecnología de mínima invasión y un trato humano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-forwards">
              <Link href="/contacto" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold px-8 shadow-xl">
                  Agendar Cita Ahora
                </Button>
              </Link>
              <Link href="/servicios" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 shadow-lg">
                  Nuestros Servicios
                </Button>
              </Link>
            </div>


          </div>

          <div className="relative mt-8 lg:mt-0 animate-in fade-in slide-in-from-right-16 duration-1000 delay-500 fill-mode-forwards mx-auto max-w-sm lg:max-w-none">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <BlurImage
                src="/images/doctor.png"
                alt="Dr. Jorge Delgado"
                className="w-full h-auto object-cover bg-white/10 backdrop-blur-sm"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>


          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-background fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 lg:py-20 bg-background relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">Soluciones Integrales en Urología</h2>
            <p className="text-muted-foreground text-lg">
              Ofrecemos diagnósticos precisos y tratamientos efectivos para una amplia gama de condiciones urológicas.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md bg-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-300 mb-2">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link href={service.link} className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 mt-2">
                    Más información <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-10">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/doctor-desk.jpg"
                  alt="Dr. Jorge Delgado"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 bg-white p-6 rounded-xl shadow-xl z-20 border-l-4 border-secondary">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Experiencia</p>
                    <p className="text-xl font-bold text-gray-900">+15 Años</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Dedicados al cuidado urológico de alta especialidad.</p>
              </div>
              <div className="absolute top-10 -left-10 w-20 h-20 bg-dots-pattern opacity-30"></div>
            </div>

            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 lg:mb-4">Dr. Jorge Delgado</h2>
                <h3 className="text-lg lg:text-xl text-secondary font-medium mb-4 lg:mb-6">Urólogo Certificado</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Comprometido con la excelencia médica y el trato humano. Mi objetivo es proporcionar diagnósticos precisos y tratamientos efectivos para mejorar la calidad de vida de mis pacientes.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Especialista en cirugía de mínima invasión, endourología y salud prostática. Miembro activo de las asociaciones urológicas más prestigiosas a nivel nacional e internacional.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <img src="/images/cert-aua-hq.png" alt="American Urological Association" className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                <img src="/images/cert-consejo-hq.png" alt="Consejo Nacional Mexicano de Urología" className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                <img src="/images/cert-smu-hq.png" alt="Sociedad Mexicana de Urología" className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
              </div>

              <div className="pt-4">
                <Link href="/acerca">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    Conoce más sobre el Doctor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Lo que dicen nuestros pacientes</h2>
            <p className="text-white/80 text-lg">
              La satisfacción y recuperación de nuestros pacientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-none text-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed">
                  "Excelente atención del Dr. Delgado. Me explicó todo con mucha paciencia y la cirugía fue un éxito total. Muy recomendado."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold">
                    JL
                  </div>
                  <div>
                    <p className="font-bold">José Luis M.</p>
                    <p className="text-sm text-white/60">Paciente de Litiasis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed">
                  "Llevé a mi hijo por un problema recurrente y el trato fue increíble. El niño se sintió muy cómodo y el tratamiento funcionó de maravilla."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold">
                    MR
                  </div>
                  <div>
                    <p className="font-bold">María R.</p>
                    <p className="text-sm text-white/60">Madre de Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed">
                  "Profesionalismo puro. Las instalaciones son de primera y el doctor está muy actualizado. Me sentí en muy buenas manos."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold">
                    RG
                  </div>
                  <div>
                    <p className="font-bold">Roberto G.</p>
                    <p className="text-sm text-white/60">Paciente de Próstata</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 lg:py-20 bg-slate-50 scroll-mt-24">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10 lg:mb-16 space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <HelpCircle className="h-4 w-4 mr-2" />
              Resolvemos tus dudas
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground text-lg">
              Encuentra respuestas rápidas a las consultas más comunes de nuestros pacientes.
            </p>
          </div>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-100 last:border-0">
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-secondary hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">¿No encontraste la respuesta que buscabas?</p>
            <Link href="/contacto">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contáctanos directamente
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-blue-900 rounded-2xl lg:rounded-3xl p-6 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 lg:mb-6 text-white">¿Listo para recuperar tu bienestar?</h2>
              <p className="text-base lg:text-xl text-white/90 mb-6 lg:mb-8">
                No dejes pasar más tiempo. Agenda tu consulta hoy mismo y recibe la atención especializada que mereces.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contacto" className="w-full sm:w-auto">
                  <Button size="xl" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white shadow-2xl">
                    <Calendar className="mr-2 h-6 w-6" />
                    Agendar Cita Online
                  </Button>
                </Link>
                <a href="tel:8332412392" className="w-full sm:w-auto">
                  <Button size="xl" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl">
                    <Phone className="mr-2 h-6 w-6" />
                    Llamar al Consultorio
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
