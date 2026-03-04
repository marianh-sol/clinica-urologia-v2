import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldCheck, Lock, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container relative z-10 text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">Ley de Protección de Datos</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Su privacidad y confianza son fundamentales para nosotros.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 space-y-10">
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <ShieldCheck className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Cumplimiento Legal</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                En cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, el <strong>Dr. Jorge J. Delgado Rodríguez</strong> se compromete a proteger la confidencialidad y seguridad de la información personal de sus pacientes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <Lock className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Compromiso de Seguridad</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <ShieldCheck className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Confidencialidad Médica</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Toda la información médica y personal recabada durante las consultas está protegida por el secreto profesional médico y las normativas de salud vigentes en México. Sus datos no serán compartidos con terceros sin su consentimiento expreso, salvo en los casos previstos por la Ley (ej. emergencias médicas, requerimientos de autoridades sanitarias).
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <Globe className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Uso de Información Digital</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Al utilizar nuestro sitio web y formulario de agenda, sus datos son transmitidos de forma segura. No utilizamos cookies de rastreo invasivas ni vendemos información a anunciantes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <Mail className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Contacto para Dudas</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Si tiene alguna duda sobre cómo protegemos sus datos o desea ejercer sus derechos sobre la información que resguardamos, por favor contáctenos directamente al correo: <a href="mailto:jdelgado.uro@gmail.com" className="text-secondary font-bold hover:underline">jdelgado.uro@gmail.com</a>.
              </p>
            </div>

            <div className="pt-8 text-center border-t border-gray-100 mt-8">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Volver al Inicio
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
