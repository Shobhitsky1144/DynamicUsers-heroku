import React from 'react';

const Pagination = ({getItem,currentPage}) => {
      let index=[1,2,3,4,5,6,7,8,9,10]
      let lastPage=10;
 
  const handlePage=(e)=>{
    getItem(e);
  }
 return (
    <nav className="">
      <ul className='pagination justify-content-center'>
        {index.map(e=>
       <li className={`${'mt-2 p-2'} ${(currentPage==e ? 'bg-info' : 'bg-dark')}`} style={{color:'white',cursor:'pointer'}} onClick={()=>handlePage(e)}>{e}</li>
         ) }
      </ul>
    </nav>
  );
};

export default Pagination;