"use client";
//import { UseForm } from "@/hooks/UseForm";
import { Input } from "@nextui-org/react";
//import { UseForm } from "@/hooks/UseForm";
import { Button } from "@nextui-org/react";
import React from "react";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";
const initialForm: initialForm = {
  email: "",
  password: "",
};

const validationsForm: Function = (form: initialForm) => {
  let errors: validatedForm = {};
  return errors;
};

const positions = ["inside", "outside", "outside-left"];

const form = (id: any) => {
  //const { form } = UseForm(initialForm, validationsForm);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form className="space-y-4">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            aria-describedby="email-description"
            type="email"
            placeholder="you@example.com"
          />
          <label htmlFor="password">Password</label>
          <Input
          id="password"
          aria-describedby="password-description"
            placeholder="Enter your password"
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
            type="email"
            className="max-w-xs"
          />
      <div className="flex justify-center "> {/* Agregar esta línea */}
        <Button id="test" color="primary" className="mt-6">
          Button
        </Button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default form;
