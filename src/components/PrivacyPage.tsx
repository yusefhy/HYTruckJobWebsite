import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <main style={{ background: '#0C0C0C', color: '#F0F0F0', minHeight: '100vh', fontFamily: 'Barlow, sans-serif' }}>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 leading-relaxed">
        <Link to="/" style={{ color: '#00A8E1' }}>← H&Y Truck Job</Link>
        <h1 className="text-4xl font-bold">Privacidad de candidaturas / Application privacy</h1>
        <p><strong>Responsable / Controller:</strong> H&Y MOTORWORKS PERFORMANCE S.L., CIF B25868878, Avenida de Fuenlabrada 62, Humanes de Madrid, España. Contacto para protección de datos / Data protection contact: <a href="mailto:n.hadouchi@avanti-dl.com" className="underline">n.hadouchi@avanti-dl.com</a>.</p>
        <section className="space-y-3" lang="es">
          <h2 className="text-2xl font-bold">Información en español</h2>
          <p>Tratamos el nombre, teléfono, ciudad elegida, idioma y respuestas sobre permiso C+E, CAP, experiencia y autorización para trabajar en Alemania para gestionar tu candidatura y contactarte sobre esta oferta. La base jurídica es tu consentimiento al enviar la solicitud tras leer esta información. Puedes retirarlo en cualquier momento.</p>
          <p>Compartiremos los datos con la empresa de transporte contratante únicamente cuando sea necesario para valorar tu candidatura. El formulario utiliza EmailJS como proveedor técnico de envío de correo. No utilizamos las respuestas del formulario para crear audiencias publicitarias.</p>
          <p>Conservaremos la candidatura durante el proceso de selección y, como máximo, 12 meses desde su recepción, salvo que solicites antes su supresión o debamos conservarla por una obligación legal. Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad, así como retirar tu consentimiento, escribiendo al contacto indicado. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
          <p>Si aceptas las cookies de medición, cargamos la etiqueta de Google Ads para atribuir solicitudes enviadas a nuestros anuncios. Puedes rechazarla o cambiar tu elección mediante «Configurar cookies» en el pie de la página. Rechazarla no impide enviar la candidatura.</p>
        </section>
        <section className="space-y-3" lang="en">
          <h2 className="text-2xl font-bold">Information in English</h2>
          <p>We process your name, phone number, preferred city, language and answers about your C+E licence, driver qualification, experience and authorization to work in Germany to manage your application and contact you about this role. The legal basis is your consent when you submit the form after reading this notice. You can withdraw it at any time.</p>
          <p>We share the data with the hiring transport company only where necessary to assess your application. The form uses EmailJS as a technical email delivery provider. We do not use application answers to build advertising audiences.</p>
          <p>We retain applications during recruitment and for no longer than 12 months after receipt, unless you request earlier deletion or a legal duty requires retention. You may request access, correction, deletion, objection, restriction or portability, and withdraw consent, through the contact above. You may also complain to the Spanish Data Protection Agency (aepd.es).</p>
          <p>If you accept measurement cookies, we load the Google Ads tag to attribute submitted applications to our ads. You can reject it or change your choice through “Cookie settings” in the page footer. Rejecting does not prevent you from applying.</p>
        </section>
      </div>
    </main>
  );
}
