import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, Phone, Clock, MapPin, Facebook, Instagram, MessageCircle, ExternalLink, Star } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/acerca' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-3 text-sm hidden md:block">
        <div className="container flex justify-start items-center space-x-8">
          <div className="flex items-center space-x-6">
            <a href="tel:8332412392" className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Citas: (833) 241 2392</span>
            </a>
            <a href="https://wa.me/528335350020" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="font-medium">WhatsApp: (833) 535 0020</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Lun - Vie: 9:00 - 20:00 | Sáb: 9:00 - 14:00</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer group">
            <img src="/images/logo-header.png" alt="Dr. Jorge Delgado - Urología Especializada" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-bold uppercase tracking-wide transition-colors hover:text-[#0ea5e9] cursor-pointer ${isActive(item.href) ? 'text-[#0ea5e9]' : 'text-[#1e3a8a]'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contacto">
              <Button size="lg" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold px-10 shadow-md">
                Agendar Cita
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-primary">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l border-border/40">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

              <div className="flex flex-col h-full bg-white">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-lg leading-none text-primary">Dr. Delgado</span>
                      <span className="text-xs text-muted-foreground font-medium">Urología</span>
                    </div>
                  </div>
                  {/* Close button is automatically rendered by SheetContent, but we can style the area around it */}
                </div>

                {/* Mobile Menu Items */}
                <nav className="flex-1 flex flex-col p-6 space-y-2 overflow-y-auto">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        group flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-200
                        ${isActive(item.href)
                          ? 'bg-primary/5 text-primary shadow-sm border border-primary/10'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary hover:translate-x-1'}
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {isActive(item.href) && <div className="h-2 w-2 rounded-full bg-secondary"></div>}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 bg-slate-50 border-t border-gray-100 space-y-4">
                  <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
                      Agendar Cita
                    </Button>
                  </Link>

                  <div className="flex justify-center space-x-6 pt-2 text-gray-400">
                    <a href="tel:8332412392" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
                      <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium">Llamar</span>
                    </a>
                    <a href="https://wa.me/528335350020" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:text-green-600 transition-colors">
                      <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium">WhatsApp</span>
                    </a>
                    <a href="https://www.doctoralia.com.mx/jorge-j-delgado-rodriguez/urologo/tampico" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors">
                      <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
                        <Star className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium">Doctoralia</span>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="mb-6">
              <img src="/images/logo-footer.png" alt="Dr. Jorge Delgado - Urología Especializada" className="h-auto w-full max-w-[280px]" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Cuidando tu salud urológica con experiencia, profesionalismo y tecnología de vanguardia para hombres, mujeres y niños.
            </p>

          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer"
                  >
                    <span className="mr-2">›</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer">
                  <span className="mr-2">›</span> Litiasis Urinaria
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer">
                  <span className="mr-2">›</span> Infecciones Urinarias
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer">
                  <span className="mr-2">›</span> Próstata
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer">
                  <span className="mr-2">›</span> Cirugía Mínima Invasión
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer">
                  <span className="mr-2">›</span> Salud Sexual
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center cursor-pointer">
                  <span className="mr-2">›</span> Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  La Bene Hospital, 4o Piso, Consultorio #407<br />
                  Av. Miguel Hidalgo 3909, Guadalupe,<br />
                  Tampico, Tamps., México
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:8332412392" className="text-primary-foreground/80 text-sm hover:text-secondary transition-colors">
                  Citas: (833) 241 2392
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400 shrink-0" />
                <a href="https://wa.me/528335350020" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-sm hover:text-secondary transition-colors">
                  WhatsApp: (833) 535 0020
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Lun - Vie: 9:00 - 20:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="https://www.doctoralia.com.mx/jorge-j-delgado-rodriguez/urologo/tampico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-secondary hover:underline transition-colors"
                >
                  Perfil en Doctoralia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-xs mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Dr. Jorge Delgado. Todos los derechos reservados. <br className="md:hidden" />
              Cédula Profesional y Aviso de Publicidad COFEPRIS en trámite.
            </p>

            {/* Disclaimer Section */}
            <p className="text-primary-foreground/40 text-[10px] text-center md:text-right max-w-2xl mx-auto md:mx-0 leading-tight">
              La información en este sitio web es solo para fines educativos y no sustituye el consejo médico profesional, diagnóstico o tratamiento. Siempre busque el consejo de su médico u otro proveedor de salud calificado con cualquier pregunta que pueda tener sobre una condición médica.
            </p>

            <div className="flex space-x-6 text-xs text-primary-foreground/60 mt-4 md:mt-0">
              <Link href="/aviso-privacidad" className="hover:text-white transition-colors cursor-pointer">Aviso de Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/528335350020"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-110 active:scale-95 animate-whatsapp flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap hidden md:block border border-gray-100 italic">
          ¡Atención inmediata! 👋
        </span>
      </a>
    </div>
  );
}
