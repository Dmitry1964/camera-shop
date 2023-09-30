
export const totalPages = (total : number, limit : number) => {
  const result = [];
  const pages = Math.ceil(total / limit);
  for(let i = 1; i <= pages; i++) {
    result.push(i);
  }
  return result;
};
