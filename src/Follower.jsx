import React from 'react';

const Follower = ({ avatar_url, login, html_url }) => {
 return (
  <article className="bg-white shadow-md rounded-md p-4 text-center flex flex-col items-center space-y-4">
   <img src={avatar_url} alt="User" className="rounded-full w-[130px] h-[130px]" />
   <h4 className="capitalize text-gray-600 text-xl">{login}</h4>
   <a
    className="px-3 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-400 tracking-wider"
    href={html_url}>
    view profile
   </a>
  </article>
 );
};

export default Follower;
