export const isoToNormalDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return `${day}/${month}/${year}`
};

export const normalDateToIso = (normalDate: string): string => {
  const parts = normalDate.split('/');

  if (parts.length !== 3) {
    throw new Error(`invalid date format. Use 'dd/mm/yyyy'.`);
  }

  const day = Number(parts[0]);
  const month = Number(parts[1]) - 1;
  const year = Number(parts[2]);

  const date = new Date(year, month, day);

  return date.toISOString();
};

export const getCurrentDate = (): string => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}
