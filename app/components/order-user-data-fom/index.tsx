'use client'
import { Product } from "@/app/types/product";
import { MpButton } from "../mp-button";
import s from "./order-data-form.module.scss";
import { useState } from "react";
import { Buyer } from "@/app/types/buyer";
import useStore from "@/app/store/formStore";

export default function OrderDataForm({ order }: { order: any }) {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [dni, setDni] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [terms, setTerms] = useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [buyer, setBuyer] = useState<Buyer>({
        purchaserFirstName: name,
        purchaserLastName: lastName,
        purchaserDni: dni,
        phone: phone,
        purchaserEmail: email
    });
    const isSubmitting = useStore((state) => state.isSubmitting);

    const isValidName = (str: string): boolean => /^[a-zA-Z\s]+$/.test(str);
    const isValidDNI = (str: string): boolean => /^\d{8}$/.test(str);
    const isValidEmail = (str: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

    const validateForm = (): void => {
        if (
            isValidName(name) &&
            isValidName(lastName) &&
            isValidDNI(dni) &&
            phone && 
            isValidEmail(email)
        ) {
            console.log('valid')
            setBuyer({
                purchaserFirstName: name,
                purchaserLastName: lastName,
                purchaserDni: dni,
                phone: phone,
                purchaserEmail: email
            })
            // editar order con los datos
            setIsEnabled(true);
        } else {
            setIsEnabled(false);
        }
    };

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
        validateForm();
    };

    const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.checked);
        validateForm();
    };  

    interface ValidatorFunctions {
        [key: string]: (val: string) => boolean;
    }

    const validators: ValidatorFunctions = {
        name: isValidName,
        lastName: isValidName,
        dni: isValidDNI,
        phone: (val: string) => !!val,
        email: isValidEmail,
    };

    const getInputStyle = (field: keyof ValidatorFunctions, value: string) => {
        return validators[field](value) ? 'valid' : 'invalid';
    }


  // Esto es para el <MpButton />  
  let event = order.event;

  const orderMpInfo: Product = {
    id: order._id,
    title: `${order.ticketType.type} x${order.quantity}`,
    img: "img",
    quantity: order.quantity,
    price: order.ticketType.price * order.quantity,
    description: event.title,
  };
  return (
    <div className={s.form_wrapper}>
      <form className={s.buy_form} onSubmit={e => e.preventDefault()}>
        <div className={s.row}>
          <div className={s.form_area}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`custom-input ${getInputStyle('name', name)}`}
              required
              placeholder="Nombre"
              value={name}
              onChange={handleChange(setName)}
              disabled={isSubmitting}
            />
          </div>
          <div className={s.form_area}>
            <label htmlFor="last-name">Apellido</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              className={`custom-input ${getInputStyle('lastName', lastName)}`}
              required
              placeholder="Apellido"
              value={lastName}
              onChange={handleChange(setLastName)}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className={s.row}>
          <div className={s.form_area}>
            <label htmlFor="dni">DNI</label>
            <input
              type="text"
              name="dni"
              id="dni"
              className={`custom-input ${getInputStyle('dni', dni)}`}
              required
              placeholder="DNI"
              value={dni}
              maxLength={8}
              onChange={handleChange(setDni)}
              disabled={isSubmitting}
            />
          </div>
          <div className={s.form_area}>
            <label htmlFor="phone">Telefono</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className={`custom-input ${getInputStyle('phone', phone)}`}
              required
              placeholder="Telefono"
              value={phone}
              onChange={handleChange(setPhone)}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className={`${s.form_area} ${s.full}`}>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            className={`custom-input ${getInputStyle('email', email)}`}
            required
            placeholder="email"
            value={email}
            onChange={handleChange(setEmail)}
            disabled={isSubmitting}
          />
        </div>
        {/* <div className={s.form_area_inline}>
          <input type="checkbox" checked={terms} name="terms" id="terms" onChange={handleCheckboxChange(setTerms)}/>
          <label htmlFor="terms">
            He leido y acepto los <span>Terminos y condiciones</span>
          </label>
        </div> */}
        <div className={s.form_area_inline}>
          <MpButton prod={orderMpInfo} offerId={order._id} isEnabled={isEnabled} buyer={buyer}/>
        </div>
      </form>
    </div>
  );
}
