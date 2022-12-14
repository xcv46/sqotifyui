import React from 'react';
import '../Body/index.css';
import { Route, Routes } from 'react-router-dom';
import Categories from '../Categories';
import PlaylistPage from '../../pages/Playlistpages';
import Search from '../Search';
import Collection from '../Collection';
const Body = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/search' element={<Search />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='playlist/:id' element={<PlaylistPage />} />
      </Routes>
    </div>
  )
}

export default Body
