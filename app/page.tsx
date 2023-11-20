// eslint-disable-next-line react/no-unescaped-entities

import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import deved from '../public/gato-removebg-preview.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import React, { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Portfolio website for Joshua Vijayasegar" />
        <title>Joshua Vijayasegar Portfolio</title>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Joshua Vijayasegar</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="text-2xl cursor-pointer"/></li>
              <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Joshua Vijayasegar</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-lg mx-auto'>
              Hi, my name is Joshua Vijayasegar! I am a junior studying computer science engineering at the University of Michigan Ann Arbor with
              pretty good grades. I am interested in exploring backend development and machine learning roles. This summer, I will be working in
              New York as a software engineering intern at Capital One. In my free-time I enjoy playing basketball, working out, playing tennis, and
              watching various forms of media with my friends.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className='shadow-lg relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} alt='picture of me holding a cat' layout='fill' objectFit='cover'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I have experience doing various things such as teaching tennis, tutoring, and full-stack development.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Here is some more text relating to my experiences.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} alt='design icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                words words words words words words words words words words words words words words words
                words words words words words words words words words words words words words words words
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gra-800 py-1'>Photoshop</p>
              <p className='text-gra-800 py-1'>Illustrator</p>
              <p className='text-gra-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} alt='code icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Epic Code</h3>
              <p className='py-2'>
                words words words words words words words words words words words words words words words
                words words words words words words words words words words words words words words words
              </p>
              <h4 className='py-4 text-teal-600'>Languages I use</h4>
              <p className='text-gra-800 py-1'>Python</p>
              <p className='text-gra-800 py-1'>C++</p>
              <p className='text-gra-800 py-1'>React.js</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} alt='consulting icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Fantastic Consulting</h3>
              <p className='py-2'>
                words words words words words words words words words words words words words words words
                words words words words words words words words words words words words words words words
              </p>
              <h4 className='py-4 text-teal-600'>Qualities I have</h4>
              <p className='text-gra-800 py-1'>Fun</p>
              <p className='text-gra-800 py-1'>Nice</p>
              <p className='text-gra-800 py-1'>Kind</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 '>
              I have taken many classes at the University of Michigan where I completed cool projects. Additionally, I have pursued many
              personal projects relating to my interests. Finally, I have real world experience through internship work. Here are some of
              the projects I have worked on.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Here is some more text relating to my experiences.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1 || '../public/monday-cat.jpg'} width={100} height={100} layout="responsive" alt='porfolio item one' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} width={100} height={100} layout="responsive" alt='porfolio item two' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} width={100} height={100} layout="responsive" alt='porfolio item three' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} width={100} height={100} layout="responsive" alt='porfolio item four' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} width={100} height={100} layout="responsive" alt='porfolio item five' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} width={100} height={100} layout="responsive" alt='porfolio item six' className='rounded-lg object-cover'/>
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}
