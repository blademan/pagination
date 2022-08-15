import Follower from './Follower.jsx';
import { useFetch } from './useFetch';
import { useState, useEffect } from 'react';

function App() {
 const { data, loading } = useFetch();
 const [page, setPage] = useState(0);
 const [followers, setFollowers] = useState([]);

 useEffect(() => {
  if (loading) return;
  setFollowers(data[page]);
 }, [loading, data, page]);

 const handlePage = (id) => {
  setPage(id);
 };

 const prevPage = () => {
  const circularPage = (page - 1 + data.length) % data.length;
  setPage(circularPage);
 };

 const nextPage = () => {
  const circularPage = (page + 1) % data.length;
  console.log(page + 1);
  setPage(circularPage);
 };

 return (
  <main className="bg-gray-100 py-10">
   <h1 className="text-3xl text-center font-bold py-10 tracking-widest">
    {loading ? 'loading' : 'Pagination'}
   </h1>
   <section className="container mx-auto ">
    <div className="grid grid-cols-4 gap-10">
     {followers.map((item) => (
      <Follower key={item.id} {...item} />
     ))}
    </div>
    {!loading && (
     <div className="flex space-x-2 justify-center pt-6">
      <button onClick={prevPage} className="font-bold tracking-widest hover:text-gray-600">
       Prev
      </button>
      {data.map((item, index) => (
       <button
        key={index}
        onClick={() => handlePage(index)}
        className={`${
         index === page ? 'bg-blue-600' : 'bg-blue-400'
        }  hover:bg-blue-600 text-white rounded-md px-[10px] py-1`}>
        {index + 1}
       </button>
      ))}
      <button onClick={nextPage} className="font-bold tracking-widest hover:text-gray-600">
       Next
      </button>
     </div>
    )}
   </section>
  </main>
 );
}

export default App;
