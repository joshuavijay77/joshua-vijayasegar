// eslint-disable-next-line react/no-unescaped-entities
'use client';

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import ImageCarousel from './ImageCarousel';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import deved from '../public/gato-removebg-preview.png'
import bible from '../public/icons8-bible-100.png'
import dumbell from '../public/icons8-basketball-64.png'
import presentation from '../public/icons8-teacher-80.png'
import insta485 from '../public/insta485.png'
import neuralNetwork from '../public/neuralNetwork.png'
import threeD from '../public/threeD.jpeg'
import aiCfour from '../public/aiCfour.png'
import ask485 from '../public/ask485.png'
import piazza from '../public/piazza.png'
import PortfolioCarousel from './ImageCarousel';
import Athletics from './athletics';
import {useState} from 'react';
import './globals.css';


export default function Home() {
  const images = ['insta485', 'neuralNetwork', 'threeD', 'aiCfour', 'ask485', 'piazza'];
    return (
    <div data-theme='light'>
      <Head>
        <meta name="description" content="Portfolio website for Joshua Vijayasegar" />
        <title>Joshua Vijayasegar Portfolio</title>
        <link rel="icon" href='/favicon.ico'></link>
\      </Head>
      <main className=" bg-bkg x-10 md:px-20 lg:px-40">
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-blk">Built with Next.js and TailwindCSS</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="text-2xl cursor-pointer text-blk"/></li>
              <a
                className="bg-main animate-pulse text-wht px-4 py-2 rounded-md ml-8"
                href="https://drive.google.com/file/d/16WLBchwdnbaACltUuYzRRs7umOf7vGK9/view?usp=sharing"  // Replace with the actual path to your resume file
                download="JOSHUA_VIJAYASEGAR_RESUME.pdf"  // Adjust the filename as needed
              >
                Resume
              </a>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className="hover:skew-x-12 first-letter:text-5xl py-2 text-main font-medium md:text-6xl">Joshua Vijayasegar</h2>
            <h3 className="hover:skew-x-12 text-2xl py-2 md:text-3xl text-blk">Student at UMich</h3>
            <p className='text-md py-5 leading-8 text-second md:text-xl max-lg mx-auto text-third'>
              Hi, my name is Josh! I am a junior studying computer science engineering at the University of Michigan Ann Arbor with
              pretty good grades. I am interested in operating systems and backend development, and I am actively seeking roles. This summer,
              I will be working in New York as a software engineering intern at Capital One. I try to always make time to play sports, work out, read, and
              hang out with friends.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-2 text-main'>
            <a className='animate-pulse' href="https://github.com/joshuavijay77" target="_blank"><AiFillGithub/></a>
            <a className='animate-pulse' href="https://www.linkedin.com/in/joshua-v-1746b6174/" target="_blank"><AiFillLinkedin/></a>
            <a className='animate-pulse' href="mailto:joshv@umich.edu" target="_blank"><AiFillMail/></a>
          </div>
          <div className='shadow-lg relative bg-gradient-to-b from-pic rounded-full w-80 h-80 mt-20 mb-10 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} alt='picture of me holding a cat' layout='fill' objectFit='cover'/>
          </div>
        </section>
        <section className='mb-4rem'>
          <div className='text-center py-4'>
            <h3 className='text-3xl py-1 text-blk'>Areas I want to grow in: </h3>
            <p className='text-md py-2 leading-8 text-second text-third'>
              Growing up, I liked to play a lot of sports, and I still do. I also enjoy going to the gym and lifting.
              Beyond those two things, I enjoy reading philosophy and the Bible, and thinking critically about the world we live in
              and our place in it.
            </p>
          </div>
          <div className='lg:flex gap-10 mb-20 '>
            <Link href="/athletics">
                <div className=' bg-card text-center shadow-lg p-10 rounded-xl my-10 hover:skew-x-2 transition duration-300 hover:shadow-none mb-10'>
                  <Image src={dumbell} alt='design icon' width={100} height={100} className='mx-auto'/>
                  <h3 className='text-lg font-medium pt-8 pb-2 text-blk'>Athletics</h3>
                  <p className='py-2 text-blk'>
                    I love to play sports and work out. My favorite sports are basketball, tennis, and soccer. I also want
                    to get better at running, climbing, and boxing. My current goals in the gym are to bench 2 plates,
                    squat 3 plates, and deadlift 4 plates.
                  </p>
                </div>
            </Link>
            <div className=' bg-card text-center shadow-lg p-10 rounded-xl my-10 hover:skew-x-2 transition duration-300 hover:shadow-none'>
              <Image src={presentation} alt='code icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-blk'>Career</h3>
              <p className='py-2 text-blk'>
                Right now, I want to be a software engineer at a big tech company. After doing that for a year or two
                I want to do something more significant with my life, like having kids or inventing something that helps
                people. In the long run I want to become a highschool teacher or missionary.
              </p>
            </div>

            <div className=' bg-card text-center shadow-lg p-10 rounded-xl my-10 hover:skew-x-2 transition duration-300 hover:shadow-none'>
              <Image src={bible} alt='consulting icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-blk'>Faith</h3>
              <p className='py-2 text-blk'>
                I like to read the Bible and learn about Christianity and how it bridges between philosophy, history, and science.
                I also enjoy learning about the way other people look at things and discussing difficult questions.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center mb-1'>
            <h3 className='text-3xl py-1 mb-1 text-blk'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-third'>
              I have taken many classes at the University of Michigan where I completed cool projects. Additionally, I have pursued many
              personal projects relating to my interests. Finally, I have real world experience through internship work. Here are some of
              the projects I have worked on.
            </p>
          </div>
          {/* <ImageCarousel images={images} /> */}
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/5 flex-1'>
              <Image src={insta485} width={100} height={100} layout="responsive" alt='porfolio item one' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={neuralNetwork} width={100} height={100} layout="responsive" alt='porfolio item two' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={aiCfour} width={100} height={100} layout="responsive" alt='porfolio item three' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={ask485} width={100} height={100} layout="responsive" alt='porfolio item four' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={threeD} width={100} height={100} layout="responsive" alt='porfolio item five' className='rounded-lg object-cover'/>
            </div>
          </div>
        </section>
      </main>
    </div>


  )
}
