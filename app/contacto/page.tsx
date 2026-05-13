'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
};

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.ok) {
        setStatus('success');
        reset(); // limpia los campos
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  };

  const errorStyle = { color: '#f87171', fontSize: '13px', marginTop: '4px' };

  return (
    <main style={{ backgroundColor: '#111827', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>

        <h1 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
          Contáctanos
        </h1>
        <p style={{ color: '#9ca3af', marginBottom: '40px' }}>
          Déjanos tu mensaje y te respondemos a la brevedad.
        </p>

        {/* Mensaje de éxito */}
        {status === 'success' && (
          <div style={{
            backgroundColor: '#052e16', border: '1px solid #16a34a',
            borderRadius: '8px', padding: '16px', marginBottom: '24px', color: '#4ade80'
          }}>
            ✅ ¡Mensaje enviado! Te llegará una confirmación a tu correo.
          </div>
        )}

        {/* Mensaje de error */}
        {status === 'error' && (
          <div style={{
            backgroundColor: '#2d0a0a', border: '1px solid #dc2626',
            borderRadius: '8px', padding: '16px', marginBottom: '24px', color: '#f87171'
          }}>
            ❌ Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* Nombre + Teléfono en grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ color: '#d1d5db', fontSize: '14px', display: 'block', marginBottom: '6px' }}>
                Nombre *
              </label>
              <input
                style={inputStyle}
                placeholder="Tu nombre"
                {...register('nombre', { required: 'El nombre es requerido' })}
              />
              {errors.nombre && <p style={errorStyle}>{errors.nombre.message}</p>}
            </div>
            <div>
              <label style={{ color: '#d1d5db', fontSize: '14px', display: 'block', marginBottom: '6px' }}>
                Teléfono
              </label>
              <input
                style={inputStyle}
                placeholder="Tu teléfono"
                {...register('telefono')}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#d1d5db', fontSize: '14px', display: 'block', marginBottom: '6px' }}>
              Email *
            </label>
            <input
              type="email"
              style={inputStyle}
              placeholder="tu@email.com"
              {...register('email', {
                required: 'El email es requerido',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Formato de email inválido' }
              })}
            />
            {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
          </div>

          {/* Mensaje */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ color: '#d1d5db', fontSize: '14px', display: 'block', marginBottom: '6px' }}>
              Mensaje *
            </label>
            <textarea
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              placeholder="¿En qué vehículo estás interesado? ¿Tienes alguna pregunta?"
              {...register('mensaje', { required: 'El mensaje es requerido' })}
            />
            {errors.mensaje && <p style={errorStyle}>{errors.mensaje.message}</p>}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: status === 'loading' ? '#6b7280' : '#dc2626',
              color: 'white',
              fontWeight: 700,
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

        </form>
      </div>
    </main>
  );
}