export default function authorName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, '-').replace('.', '-');
}
