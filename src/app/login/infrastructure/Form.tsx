"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeSlashFilledIcon } from "../../../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../../icons/EyeFilledIcon";
import { UseForm } from "../application/UseForm";
import styles from "../../page.module.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikValues,
} from "formik";
const initialForm: initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form: initialForm): validatedForm => {
  let errors: validatedForm = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  }
  
  if (!form.password.trim()) {
    errors.password = "El campo 'password' es requerido";
  }
  
  return errors;
};


const form = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validationsForm}
      onSubmit={(initialForm, { resetForm }) => {
        resetForm(); // Restablece el formulario a sus valores iniciales
        console.log("Formulario enviado");
        cambiarFormularioEnviado(true);
        setTimeout(() => cambiarFormularioEnviado(false), 5000);
      }}
    >
      {({ errors }) => (
        <Form   className="formulario">
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="correo@correo.com"
            />
            <ErrorMessage
              name="email"
              component={() => <div className="error">{errors.email}</div>}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="text"
              id="password"
              name="password"
              placeholder="correo@correo.com"
            />
            <ErrorMessage
              name="password"
              component={() => <div className="error">{errors.password}</div>}
            />
          </div>

          <button type="submit">Enviar</button>
          {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
        </Form>
      )}
    </Formik>
  );
};

export default form;
