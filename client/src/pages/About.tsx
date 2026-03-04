import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Award, BookOpen, Users } from 'lucide-react';
import SEO from '@/components/SEO';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Sobre el Dr. Jorge Delgado | Urólogo Certificado"
        description="Conoce al Dr. Jorge J. Delgado Rodríguez, cirujano urólogo certificado en Tampico. Especialista en cirugía de mínima invasión con un enfoque humano y profesional."
      />
      {/* Header Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Conoce al Dr. Jorge Delgado</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Compromiso, experiencia y calidad humana al servicio de tu salud.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-8">
                <img
                  src="/images/doctor-profile-stylized.png"
                  alt="Dr. Jorge Delgado"
                  className="w-full h-auto object-cover bg-gray-100"
                />
              </div>

              {/* Certification Logos Moved Here */}
              <div className="flex flex-wrap gap-4 justify-center">
                <img src="/images/certification-aua.png" alt="AUA" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/certification-conameu.png" alt="Consejo Nacional" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/certification-smu.png" alt="Sociedad Mexicana" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
              </div>

              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Dr. Jorge J. Delgado Rodríguez</h2>
                <h3 className="text-xl text-secondary font-medium mb-6">Cirujano Urólogo - Mínima Invasión</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  El Dr. Jorge Delgado es un especialista certificado en urología, dedicado a proporcionar atención médica de la más alta calidad a hombres, mujeres y niños. Su enfoque se centra en el diagnóstico preciso y tratamientos efectivos, utilizando las técnicas más avanzadas de mínima invasión.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Con una sólida formación académica y continua actualización en los últimos avances urológicos, el Dr. Delgado se distingue por su trato humano, ético y profesional, asegurando que cada paciente reciba una atención personalizada y comprensiva.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none shadow-md bg-accent/20">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <Award className="h-10 w-10 text-secondary" />
                    <h4 className="font-bold text-gray-900">Certificado</h4>
                    <p className="text-sm text-muted-foreground">Consejo Nacional Mexicano de Urología</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-accent/20">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <Users className="h-10 w-10 text-secondary" />
                    <h4 className="font-bold text-gray-900">Miembro Activo</h4>
                    <p className="text-sm text-muted-foreground">Sociedad Mexicana de Urología & AUA</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-primary">Formación y Credenciales</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700">Especialidad en Urología</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entrenamiento en Cirugía de Mínima Invasión</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700">Socio Titular de la Sociedad Mexicana de Urología</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700">Miembro de la American Urological Association (AUA)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Educación Continua</h3>
              <p className="text-blue-100">
                Mantenerse actualizado con las últimas técnicas y tratamientos para ofrecer la mejor atención posible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Trato Humano</h3>
              <p className="text-blue-100">
                Entender y escuchar al paciente es la base de un diagnóstico correcto y un tratamiento exitoso.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Excelencia Médica</h3>
              <p className="text-blue-100">
                Compromiso inquebrantable con los más altos estándares éticos y profesionales en la práctica médica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/30 text-center">
        <div className="container space-y-6">
          <h2 className="text-3xl font-bold text-primary">Tu salud en manos expertas</h2>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-12 shadow-xl">
              Agendar Cita con el Dr. Delgado
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
