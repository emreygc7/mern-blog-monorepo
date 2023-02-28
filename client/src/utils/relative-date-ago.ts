export default (date: string) => {
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDays === 1 ? 'Yesterday' : `${diffDays} days ago`;

};