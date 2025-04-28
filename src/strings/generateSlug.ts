import normalizeString from './normalize';

export function slugify(text: string): string {
  return normalizeString(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Reemplaza espacios (uno o más) por un guión
    .replace(/[^\w-]+/g, '')     // Elimina todo lo que no sea letra, número o guión
    .replace(/--+/g, '-')        // Reemplaza múltiples guiones por uno solo
    .replace(/^-+/, '')          // Quita guiones al inicio
    .replace(/-+$/, '');         // Quita guiones al final
}
