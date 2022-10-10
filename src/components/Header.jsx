import React from 'react';
const x = 'public/one-planet.png';

const Header = () => {
  return (
    <div className=''>
      <nav className='bg-marine py-10 text-2xl'>
        <h1 className='font-semibold text-5xl sm:text-7xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-sky-400 to-cyan-300'>
          Nosso Planeta
        </h1>
        <ul className='flex xl:justify-center overflow-x-auto'>
          <li>
            <a href='#one-planet'>
              <img src={x} />
              <img
                className='img-icons'
                src='public/um-so-planeta.png'
                alt='Um só planeta'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200'>
                Um só planeta
              </h2>
            </a>
          </li>
          <li>
            <a href='#frozen-worlds'>
              <img
                className='img-icons'
                src='public/mundos-congelados.png'
                alt='Mundos Congelados'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-200'>
                Geleiras
              </h2>
            </a>
          </li>
          <li>
            <a href='#jungles'>
              <img className='img-icons' src='public/selvas.png' alt='Selvas' />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-200'>
                Selvas
              </h2>
            </a>
          </li>
          <li>
            <a href='#forests'>
              <img
                className='img-icons'
                src='public/florestas.png'
                alt='Florestas'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200'>
                Florestas
              </h2>
            </a>
          </li>
          <li>
            <a href='#desert-fields'>
              <img
                className='img-icons'
                src='public/desertos-campos.png'
                alt='Campos'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200'>
                Desertos
              </h2>
            </a>
          </li>
          <li>
            <a href='#fresh-water'>
              <img
                className='img-icons'
                src='public/agua-doce.png'
                alt='Água doce'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-200'>
                Água Doce
              </h2>
            </a>
          </li>
          <li>
            <a href='#coastal-seas'>
              <img
                className='img-icons'
                src='public/mares-costeiras.png'
                alt='Marés Costeiras'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-200'>
                Mares Costeiros
              </h2>
            </a>
          </li>
          <li>
            <a href='#high-seas'>
              <img
                className='img-icons'
                src='public/alto-mar.png'
                alt='O alto mar'
              />
              <h2 className='text-center text-[16px] uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-200'>
                O alto mar
              </h2>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
