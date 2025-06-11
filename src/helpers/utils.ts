export const formatCpfCnpj = (text: string) => {
  const cleanedValue = text.replace(/\D/g, ""); // remove caracteres não numéricos

  if (cleanedValue.length <= 11) {
    return cleanedValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  if (cleanedValue.length <= 14) {
    return cleanedValue
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return text.slice(0, 14);
};

export const formatMoney = (value?: number) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value || 0);
};
