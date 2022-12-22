import getOpenSanidadPosts from '../logic/getOpenSanidadPosts'
import OpenSanidadPosts from './OpenSanidadPosts'
import OpenObrasPosts from './OpenObrasPosts'
import OpenEmpleoPosts from './OpenEmpleoPosts'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryPosts = () => {

  return (
    <>
    <div  className="w-full bg-gray-300 rounded border-t-4 border-[#CA649E]">
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-1 justify-center"
        id="tabs-tab3"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a href="#tab-sanidad" className="w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 text-[#CA649E] hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tab-sanidad" role="tab" aria-controls="tab-sanidad" aria-selected="true">Sanidad</a>
        </li>
        <li className="nav-item" role="presentation">
          <a href="#tab-obras" className="w-full block font-bold text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 text-[#7FCACE] hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tab-obras" role="tab" aria-controls="tab-obras" aria-selected="false">Obras</a>
        </li>
        <li className="nav-item" role="presentation">
          <a href="#tab-empleo" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tab-empleo" role="tab" aria-controls="tab-empleo" aria-selected="false">Empleo</a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent3">

      <div className="tab-pane fade show active" id="tab-sanidad" role="tabpanel" aria-labelledby="tabs-home-tab3">
        <OpenSanidadPosts />
      </div>

      <div className="tab-pane fade" id="tab-obras" role="tabpanel" aria-labelledby="tabs-profile-tab3">
        <OpenObrasPosts />
      </div>

      <div className="tab-pane fade" id="tab-empleo" role="tabpanel" aria-labelledby="tabs-profile-tab3">
        <OpenEmpleoPosts />
      </div>
      </div>
      </div>
    </>
  );
};

export default CategoryPosts;
