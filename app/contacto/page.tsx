export default function ContactoPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div style={{ width: '100%', maxWidth: '560px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
            ¿Hablamos?
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
            Déjanos tu mensaje y te contactamos a la brevedad.
          </p>
        </div>

        {/* Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                style={{ width: '100%', background: '#1f2937', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Teléfono</label>
              <input
                type="text"
                name="telefono"
                placeholder="Tu teléfono"
                style={{ width: '100%', background: '#1f2937', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              style={{ width: '100%', background: '#1f2937', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Mensaje</label>
            <textarea
              name="mensaje"
              rows={5}
              placeholder="¿En qué vehículo estás interesado?"
              style={{ width: '100%', background: '#1f2937', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white', fontSize: '0.9rem', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            style={{ width: '100%', background: '#dc2626', color: 'white', fontWeight: '700', padding: '14px', borderRadius: '10px', border: 'none', fontSize: '1rem', cursor: 'pointer', marginTop: '8px' }}
          >
            Enviar mensaje →
          </button>

        </form>
      </div>
    </div>
  );
}