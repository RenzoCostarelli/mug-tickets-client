// form con datos de compra.
// datos de usuario autocompletados con los datos de la cuenta
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nombreApellido: string;
  dni: string;
  direccion: string;
  fechaNacimiento: string;
}

const FormPurchase: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombreApellido: '',
    dni: '',
    direccion: '',
    fechaNacimiento: ''
  });
  const [errors, setErrors] = useState<FormData>({
    nombreApellido: '',
    dni: '',
    direccion: '',
    fechaNacimiento: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log(formData);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: FormData = {
      nombreApellido: '',
      dni: '',
      direccion: '',
      fechaNacimiento: ''
    };

    if (!formData.nombreApellido) {
      newErrors.nombreApellido = 'El nombre y apellido son obligatorios';
      valid = false;
    }

    if (!formData.dni) {
      newErrors.dni = 'El DNI es obligatorio';
      valid = false;
    }

    if (!formData.direccion) {
      newErrors.direccion = 'La dirección es obligatoria';
      valid = false;
    }

    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
      valid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(formData.fechaNacimiento);

      if (birthDate >= today) {
        newErrors.fechaNacimiento = 'La fecha de nacimiento debe ser anterior a la fecha actual';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreApellido">Nombre y Apellido</label>
        <input
          type="text"
          id="nombreApellido"
          name="nombreApellido"
          value={formData.nombreApellido}
          onChange={handleChange}
          required
        />
        {errors.nombreApellido && <span className="error">{errors.nombreApellido}</span>}
      </div>
      <div>
        <label htmlFor="dni">DNI</label>
        <input
          type="text"
          id="dni"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          required
        />
        {errors.dni && <span className="error">{errors.dni}</span>}
      </div>
      <div>
        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        {errors.direccion && <span className="error">{errors.direccion}</span>}
      </div>
      <div>
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
        <input
          type="date"
          id="fechaNacimiento"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          required
        />
        {errors.fechaNacimiento && <span className="error">{errors.fechaNacimiento}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPurchase;
