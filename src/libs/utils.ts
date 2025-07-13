import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isValid, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateToMonthYear(input: string | null | undefined): string {
  if (!input) return '';

  const date = parseISO(input);
  if (!isValid(date)) return '';

  return format(date, 'MMM yyyy');
}
