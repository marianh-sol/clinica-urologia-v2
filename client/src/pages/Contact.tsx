import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MapView } from '@/components/Map';

export default function Contact() {
  
  useEffect(() => {
    // Cargar el script del formulario dinámicamente
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Contacto y Ubicación</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos listos para atenderte. Agenda tu cita o visítanos en nuestro consultorio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Ponte en contacto</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Si tienes alguna duda sobre nuestros servicios o deseas agendar una consulta, no dudes en contactarnos por teléfono, correo o visitándonos directamente.
                </p>
                
                <div className="space-y-6">
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Dirección</h3>
                        <p className="text-muted-foreground">
                          La Bene Hospital, 4o Piso, Consultorio #407<br />
                          Av. Miguel Hidalgo 3909, Guadalupe,<br />
                          Tampico, Tamps., México
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Teléfono</h3>
                        <p className="text-muted-foreground mb-1">Llámanos para agendar tu cita:</p>
                        <a href="tel:8332412392" className="text-primary font-bold text-xl hover:text-secondary transition-colors">
                          (833) 241 2392
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Correo Electrónico</h3>
                        <a href="mailto:jdelgado.uro@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors">
                          jdelgado.uro@gmail.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Horario de Atención</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p><span className="font-medium text-gray-700">Lunes - Viernes:</span> 9:00 AM - 8:00 PM</p>
                          <p><span className="font-medium text-gray-700">Sábado:</span> 9:00 AM - 2:00 PM</p>
                          <p><span className="font-medium text-gray-700">Domingo:</span> Cerrado</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Form & Map */}
            <div className="space-y-10">
              <Card className="shadow-lg border-t-4 border-t-secondary overflow-hidden">
                <CardContent className="p-0 h-[600px] bg-white">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/IJMAd0lubS54RX4u0cjr"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-IJMAd0lubS54RX4u0cjr" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Agenda Consulta"
                    data-height="undefined"
                    data-layout-iframe-id="inline-IJMAd0lubS54RX4u0cjr"
                    data-form-id="IJMAd0lubS54RX4u0cjr"
                    title="Agenda Consulta"
                  >
                  </iframe>
                </CardContent>
              </Card>
              
              <div className="h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <MapView 
                  className="w-full h-full"
                  onMapReady={(map: google.maps.Map) => {
                    const location = { lat: 22.255, lng: -97.865 }; // Coordenadas aproximadas de Tampico (La Bene)
                    map.setCenter(location);
                    map.setZoom(15);
                    new google.maps.Marker({
                      position: location,
                      map: map,
                      title: "Dr. Jorge Delgado - Urólogo",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
