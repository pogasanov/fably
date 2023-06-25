"use client"

import { FiPlusCircle } from "react-icons/fi";
import * as React from "react";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'


const AddNewSessionButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="text-nobleblack-200 flex items-center disabled:text-nobleblack-500 disabled:cursor-not-allowed" disabled={pending}><FiPlusCircle/> Add new
      project</button>
  )
}

export { AddNewSessionButton }