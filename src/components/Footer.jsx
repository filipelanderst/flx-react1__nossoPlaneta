import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className='bg-marine py-10 text-2xl flex justify-center flex-col text-center'>
        <div className='flex justify-center'>
          <img
            className='dev-icons'
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          />

          <img
            className='dev-icons'
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
          />
        </div>

        <h2 className='text-white py-4'>Filipe Lander</h2>

        <ul className='text-white text-[16px] grid justify-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 '>
          <li className='p-2'>
            <a href='#one-planet'>Um só planeta</a>
          </li>
          <li className='p-2'>
            <a href='#frozen-worlds'>Mundos congelados</a>
          </li>
          <li className='p-2'>
            <a href='#jungles'>Selvas</a>
          </li>
          <li className='p-2'>
            <a href='#forests'>Florestas</a>
          </li>
          <li className='p-2'>
            <a href='#desert-fields'>Desertos</a>
          </li>
          <li className='p-2'>
            <a href='#fresh-water'>Água doce</a>
          </li>
          <li className='p-2'>
            <a href='#coastal-seas'>Mares costeiros</a>
          </li>
          <li className='p-2'>
            <a href='#high-seas'>Alto mar</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
