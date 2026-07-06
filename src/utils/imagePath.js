export function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function getImagePath(name) {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}Images/Members/${slugify(name)}.jpg`;
}
