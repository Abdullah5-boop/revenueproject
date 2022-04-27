import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-primary row d-flex d-flex justify-content-center align-items-center h-100'>
            <div className=' text-center'>
                <div className='mt-5 mb-5'>
                    <Link to='/table1'>Table-1</Link>
                </div>

               
            </div>
            <div className='bg-danger text-center'>
                <div className='mt-5 mb-5'>
                    <Link to='/table1'>Table-1</Link>
                </div>

               
            </div>
            <div className='bg-danger text-center'>
                <div className='mt-5 mb-5'>
                    <Link to='/table1'>Table-1</Link>
                </div>

               
            </div>
            <div className='bg-danger text-center'>
                <div className='mt-5 mb-5'>
                    <Link to='/table1'>Table-1</Link>
                </div>

               
            </div>
            <div className='bg-danger text-center'>
                <div className='mt-5 mb-5'>
                    <Link to='/table1'>Table-1</Link>
                </div>

               
            </div>
        </div>
    );
};

export default Header;