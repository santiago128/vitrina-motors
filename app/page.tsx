import { client } from "@/sanity/lib/client";
import { vehiclesQuery } from "@/lib/queries";
import VehicleCard from "@/components/vehicles/VehicleCard";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const allVehicles = await client.fetch(vehiclesQuery);
  const destacados = allVehicles.filter((v: any) => v.destacado).slice(0, 3);

  return (
    <main>

      {/* Hero */}
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)',
          textAlign: 'center',
          padding: '40px 16px',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <p style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '3px', marginBottom: '16px', textTransform: 'uppercase' }}>
            Bienvenido a
          </p>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: 'white', lineHeight: '1.1', marginBottom: '24px' }}>
            Vitrina<span style={{ color: '#ef4444' }}>Motors</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
            Encuentra el vehículo de tus sueños. Carros de calidad, precios justos y la mejor atención en Colombia.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/catalogo"
              style={{
                background: '#ef4444',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              Ver catálogo →
            </Link>
            <Link
              href="/contacto"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
                border: '1px solid #374151',
              }}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Vehículos destacados */}
      {destacados.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 16px' }}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
              Vehículos destacados
            </h2>
            <p style={{ color: '#9ca3af' }}>Nuestra selección especial para ti</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {destacados.map((vehicle: any) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/catalogo"
              style={{
                background: 'transparent',
                color: '#ef4444',
                padding: '12px 28px',
                borderRadius: '10px',
                fontWeight: '700',
                textDecoration: 'none',
                border: '1px solid #ef4444',
              }}
            >
              Ver todos los vehículos →
            </Link>
          </div>
        </section>
      )}

      {/* Por qué elegirnos */}
      <section style={{ background: '#111827', padding: '80px 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
              ¿Por qué elegirnos?
            </h2>
            <p style={{ color: '#9ca3af' }}>Tu confianza es nuestra prioridad</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🚗', titulo: 'Amplio catálogo', desc: 'Tenemos vehículos para todos los presupuestos y gustos.' },
              { icon: '✅', titulo: 'Vehículos verificados', desc: 'Todos nuestros carros pasan por revisión técnica.' },
              { icon: '💬', titulo: 'Atención directa', desc: 'Habla directo con nosotros por WhatsApp, sin intermediarios.' },
              { icon: '💰', titulo: 'Precios justos', desc: 'Precios transparentes, sin letra pequeña ni costos ocultos.' },
            ].map((item) => (
              <div
                key={item.titulo}
                style={{
                  background: '#1f2937',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid #374151',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontWeight: '700', marginBottom: '8px' }}>{item.titulo}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}