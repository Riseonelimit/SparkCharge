import { useState } from "react"

export const useToggler = (initialState)=>{
    const [isOpen,setIsOpen] = useState(initialState)
    return [isOpen,setIsOpen];
}

export const useLoading = (initialState)=>{
    const [loading,setLoading] = useState(initialState)
    return [loading,setLoading];
}
