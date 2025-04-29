import {normalizeString} from './normalize';

export function slugify(text: string): string {
  return normalizeString(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ' ')   // Reemplaza caracteres especiales por espacios
    .replace(/\s+/g, '-')        // Reemplaza uno o más espacios por guión
    .replace(/--+/g, '-')        // Reemplaza múltiples guiones por uno solo
    .replace(/^-+/, '')          // Quita guiones al inicio
    .replace(/-+$/, '');         // Quita guiones al final
}