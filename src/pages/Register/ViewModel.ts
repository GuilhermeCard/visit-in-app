import { useState } from "react";


export const useRegisterViewModel = () => {
  const [selectedType, setSelectedType] = useState("default");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Selecione seu tipo de registro', value: 'default' },
    { label: 'Cliente', value: 'CUSTOMER' },
    { label: 'Estabelecimento comercial', value: 'ESTABLISHMENT' },
  ]);

  return {
    setSelectedType,
    setPasswordVisible,
    setConfirmPasswordVisible,
    setOpen,
    setItems,
    selectedType,
    open,
    items,
    passwordVisible,
    confirmPasswordVisible,
  };
};
