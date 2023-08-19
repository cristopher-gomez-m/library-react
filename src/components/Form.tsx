"use client";
//import { UseForm } from "@/hooks/UseForm";
import { Input } from "@nextui-org/react";
//import { UseForm } from "@/hooks/UseForm";
import { Button } from "@nextui-org/react";
import React from "react";
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
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form className="space-y-4">
          <label htmlFor="email">Email</label>
          <Input id="email" aria-describedby="email-description" type="email" placeholder="you@example.com" />
          <Button id="test" color="primary">
            Button
          </Button>
        </form>
      </div>
    </div>
  );
};

export default form;
