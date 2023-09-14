"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeSlashFilledIcon } from "../../../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../../icons/EyeFilledIcon";
import { UseForm } from "../application/UseForm";
import styles from '../../page.module.css'
const initialForm: initialForm = {
  email: "",
  password: "",
};

const validationsForm: Function = (form: initialForm) => {
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
  const { form,errors, handleChange, handleBlur,handleSubmit } = UseForm(
    initialForm,
    validationsForm
  );

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="">
          <label className='text-red-500' htmlFor="email">Email</label>
          <Input
            id="email"
            aria-describedby="email-description"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            value={form.email}
            className="w-full"
          />
          {errors.email && <p className="mb-2">{errors.email} </p>}
          <label className='text-red-500 mt-8' htmlFor="password">Password</label>
          <Input
            id="password"
            aria-describedby="password-description"
            placeholder="Enter your password"
            type="text"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
          {errors.password && <p className="mb-8">{errors.password} </p>}
          <div className="flex justify-center ">
            {" "}
            {/* Agregar esta línea */}
            <Button type='submit' id="test" color="primary" className="mt-2 mx-auto w-1/2">
              Button
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default form;
