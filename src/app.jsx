import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Firmenlogo.png" alt="Logo" className="h-8 md:h-10" />
            <h1 className="ml-3 text-xl font-bold">Pundsack Maschinenbau-Mühlenbau GmbH</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">Über uns</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Leistungen</a>
            <a href="#machinery" className="hover:text-blue-400 transition-colors">Maschinenpark</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 pb-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#about" className="py-2 hover:text-blue-400 transition-colors">Über uns</a>
              <a href="#services" className="py-2 hover:text-blue-400 transition-colors">Leistungen</a>
              <a href="#machinery" className="py-2 hover:text-blue-400 transition-colors">Maschinenpark</a>
              <a href="#contact" className="py-2 hover:text-blue-400 transition-colors">Kontakt</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Präzision in der Fertigung seit Generationen
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Mit modernsten Maschinen und jahrelanger Erfahrung bieten wir Lösungen für komplexe Fertigungs- und Konstruktionsaufgaben.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">Jetzt kontaktieren</a>
                <a href="#services" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md transition-colors">Unsere Leistungen</a>
              </div>
            </div>
            <div className="relative">
              <img src="/Bauteil Fräse.jpg" alt="Frästeil" className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-md shadow-lg">
                <p className="font-bold">Seit 1985</p>
                <p>mit Leidenschaft für Präzision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Über uns</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Seit über 35 Jahren steht unser Unternehmen für Qualität, Innovation und Zuverlässigkeit in der industriellen Fertigung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Unsere Leistungen</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Wir bieten maßgeschneiderte Lösungen in der industriellen Fertigung und Konstruktion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Konstruktion</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  CAD-Konstruktion
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  3D-Modellierung
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  FEM-Analyse
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Detaillierte Zeichnungen
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 16L21 12M21 12L17 8M21 12H9M13 22V14M13 2V14M13 14L17 10M13 14L9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Rohrleitungsbau</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Planung und Auslegung
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Fertigung und Montage
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Schweißarbeiten nach Norm
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Wartung und Instandhaltung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section id="machinery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Unser Maschinenpark</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Mit modernsten Maschinen garantieren wir höchste Präzision und Effizienz bei der Fertigung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img src="/Behälterbau.jpg" alt="Matec CNC" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Matec 5-Achs CNC Maschine</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Verfahrweg X/Y/Z: 2000 mm / 800 mm / 880 mm
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    800 mm Rundtisch
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    5-Achs Bearbeitung für komplexe Geometrien
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img src="/Rohrleitungsbau.PNG" alt="Trulaser" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Trumpf Trulaser 3030</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Laserschneidanlage mit höchster Präzision
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Tafelgröße: 3000 x 1500 mm
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Schnittgenauigkeit im Mikrometerbereich
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontaktieren Sie uns</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein Angebot erhalten?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Kontaktformular</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Ihr Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Ihre E-Mail" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Nachricht</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Ihre Nachricht"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                  Nachricht senden
                </button>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Kontaktdaten</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Adresse</p>
                    <p className="text-gray-600">Musterstraße 123<br />12345 Musterstadt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.7097 3 9.12957 3.17475 9.44451 3.48969L15.5103 9.55549C15.8253 9.87043 16 10.2903 16 10.7208V14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14V11.8L6.2 5.99999C6.2 7.01443 6.98556 7.8 8 7.8C9.01444 7.8 9.8 7.01443 9.8 5.99999V3.8C9.8 3.35817 9.44183 3 9 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15.7208C21 15.2903 20.8253 14.8704 20.5103 14.5555L14.4445 8.48969C14.1296 8.17475 13.7097 8 13.2792 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13.2C14.2144 12 15 12.7856 15 13.8V16L20.8 21.8C20.8 20.7856 21.5856 20 22.6 20H23C23.5523 20 24 19.5523 24 19V5C24 3.89543 23.1046 3 22 3H19C19 4.10457 18.1046 5 17 5C15.8954 5 15 4.10457 15 3H12C12 4.10457 11.1046 5 10 5C8.89543 5 8 4.10457 8 3H5C4.44772 3 4 3.44772 4 4V5H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Telefon</p>
                    <p className="text-gray-600">+49 (0) 123 456789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">E-Mail</p>
                    <p className="text-gray-600">info@pundsack.de</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Öffnungszeiten</p>
                    <p className="text-gray-600">Mo-Fr: 07:00 - 17:00 Uhr<br />Sa: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pundsack GmbH</h3>
              <p className="text-gray-400">Präzision in der Fertigung seit Generationen</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Impressum</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Konstruktion</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Rohrleitungsbau</a></li>
                <li><a href="#machinery" className="hover:text-blue-400 transition-colors">Maschinenpark</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:+49123456789" className="hover:text-blue-400 transition-colors">+49 (0) 123 456789</a></li>
                <li><a href="mailto:info@pundsack.de" className="hover:text-blue-400 transition-colors">info@pundsack.de</a></li>
                <li>Musterstraße 123<br />12345 Musterstadt</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pundsack Maschinenbau-Mühlenbau GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
