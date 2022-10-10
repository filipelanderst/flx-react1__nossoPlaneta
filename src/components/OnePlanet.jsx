import React from 'react';

const OnePlanet = () => {
  return (
    <div id='one-planet' className='grid sm:grid-cols-2'>
      <div className='relative'>
        <a href='src/video/our-planet-teaser.mp4'>
          <img src='src/img/one-planet.png' alt='' />
        </a>
        <div className='play-icon'>
          <a href='src/video/our-planet-teaser.mp4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={0.25}
              stroke='white'
              className='w-24 h-24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
              />
            </svg>
          </a>
        </div>
      </div>
      <div className='mb-7'>
        <h2 className='title'>Um só planeta</h2>
        <p className=''>
          Com imagens nunca vistas, esse ambicioso documentário mostra a beleza
          natural da Terra e mostra como as mudanças climáticas têm impacto
          sobre todas as criaturas vivas.
        </p>
        <a className='btn' href='https://youtu.be/GfO-3Oir-qM' target='_blank'>
          <button type='button'>Assistir no Youtube</button>
        </a>
      </div>
    </div>
  );
};

export default OnePlanet;
