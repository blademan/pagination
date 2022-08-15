const paginate = (followers) => {
 const itemPerPage = 10;
 const page = followers.length / itemPerPage;
 const newFollowers = Array.from({ length: page }, (_, index) => {
  const start = index * itemPerPage;

  return followers.slice(start, start + itemPerPage);
 });

 return newFollowers;
};
export default paginate;
