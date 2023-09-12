"use client";
import { useState,FocusEvent, ChangeEvent } from "react";
export const UseForm = (initialForm: initialForm, func: Function) => {
  const [form, setForm] = useState<initialForm>(initialForm);
  const [errors, setErrors] = useState<validatedForm>({});

  const handleChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [evt.target.name]: evt.target.value,
    });
  };

  const handleBlur = (evt: FocusEvent<Element>) => {
    const inputEvent = evt as FocusEvent<HTMLInputElement>;
    handleChange(inputEvent); // Llama a la función handleChange para actualizar el estado del formulario
    setErrors(func(form)); // Actualiza los errores después del cambio o desenfoque
  };
  return {
    form,
    errors,
    handleChange,
    handleBlur
  };
};
