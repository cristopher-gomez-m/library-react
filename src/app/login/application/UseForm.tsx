"use client";
import { useState, FocusEvent, ChangeEvent } from "react";
export const UseForm = (
  initialForm: initialForm,
) => {
  const [form, setForm] = useState<initialForm>(initialForm);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (evt: FocusEvent<Element>) => {
    const inputEvent = evt as FocusEvent<HTMLInputElement>;
    handleChange(inputEvent);
    const { name, value } = inputEvent.target;
    //validateForm(name, value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
      alert("Enviando formulario");
      // Realiza la lógica de envío del formulario aquí
  };
  return {
    form,
    //errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
