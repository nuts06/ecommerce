import React from 'react'
import './Search.css'
import Button from '@mui/material/Button'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e2e2e2] rounded-[5px] relative p-2'>
        <input type="text" placeholder='Search for products' className='w-full h-[40px] outline-none bg-inherit p-2 text-[15px]'/>
        <Button className="!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w-[37px] h-[37px] !rounded-full !text-black"><FaSearch className='text-[#000] text-[20px]'/></Button>
    </div>
  )
}

export default Search