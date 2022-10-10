import React from 'react';

const HighSeas = () => {
  return (
    <div>
      <div id='high-seas' className='grid sm:grid-cols-2'>
        <div className='relative'>
          <a href='public/video/our-planet-teaser.mp4'>
            <img
              src='https://raw.githubusercontent.com/flx-lander7/flx-react1__nossoPlaneta/main/public/img/high-seas.png'
              alt=''
            />
          </a>
          <div className='play-icon'>
            <a href='public/video/our-planet-teaser.mp4'>
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
          <h2 className='title'>Alto mar</h2>
          <p className=''>
            Aventure-se na escuridão dos profundos oceanos que são o lar de
            criaturas belas e estranhas.
          </p>

          <a
            className='btn'
            href='https://youtu.be/9FqwhW0B3tY'
            target='_blank'
          >
            <button type='button'>Assistir no Youtube</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HighSeas;
