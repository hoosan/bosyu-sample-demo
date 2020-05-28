export const formatDate = d => {
  const date = new Date(d);
  const yyyy = new String(date.getFullYear());
  const mm = new String(date.getMonth() + 1).padStart(2, '0');
  const dd = new String(date.getDate()).padStart(2, '0');
  return `${yyyy}年${mm}月${dd}日`;
};