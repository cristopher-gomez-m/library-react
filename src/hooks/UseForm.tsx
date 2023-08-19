'use client'
import { useState } from "react"
export const UseForm=(initialForm:initialForm,fun:Function)=>{
    const [form,setForm] = useState(initialForm);

    return {
        form,
    }
}