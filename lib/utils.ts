import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  return `${formattedDate} at ${formattedTime}`;
}

export function formatTime(dateTime) {
  const date = new Date(dateTime);
  const formattedTime = date.toLocaleTimeString();
  return formattedTime;
}

export function formatDate(dateTime) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
}