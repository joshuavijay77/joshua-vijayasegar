// eslint-disable-next-line react/no-unescaped-entities
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import ImageCarousel from './ImageCarousel';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import deved from '../public/gato-removebg-preview.png'
import bible from '../public/icons8-bible-94.png'
import dumbell from '../public/icons8-dumbbell-94.png'
import presentation from '../public/icons8-presentation-94.png'
import insta485 from '../public/insta485.png'
import neuralNetwork from '../public/neuralNetwork.png'
import threeD from '../public/threeD.jpeg'
import aiCfour from '../public/aiCfour.png'
import ask485 from '../public/ask485.png'
import piazza from '../public/piazza.png'
import PortfolioCarousel from './ImageCarousel';
import Athletics from './athletics';


export default function Home() {
  const images = ['insta485', 'neuralNetwork', 'threeD', 'aiCfour', 'ask485', 'piazza'];
  return (
    <div>
      <Head>
        <meta name="description" content="Portfolio website for Joshua Vijayasegar" />
        <title>Joshua Vijayasegar Portfolio</title>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>
      <main className="bg-beige-100 px-10 md:px-20 lg:px-40">
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Built with Next.js and TailwindCSS</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="text-2xl cursor-pointer"/></li>
              <a
                className="bg-green-900 text-white px-4 py-2 rounded-md ml-8"
                href="/resume.pdf"  // Replace with the actual path to your resume file
                download="JOSHUA_VIJAYASEGAR_RESUME.pdf"  // Adjust the filename as needed
              >
                Resume
              </a>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className="text-5xl py-2 text-green-900 font-medium md:text-6xl">Joshua Vijayasegar</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Student at UMich studying CSE </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-lg mx-auto'>
              Hi, my name is Joshua Vijayasegar! I am a junior studying computer science engineering at the University of Michigan Ann Arbor with
              pretty good grades. I am interested in exploring backend development and machine learning roles. This summer, I will be working in
              New York as a software engineering intern at Capital One. In my free-time I enjoy playing sports, working out, reading, and
              hanging out with friends.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-2 text-gray-600'>
            <a href="https://github.com/joshuavijay77" target="_blank"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/joshua-v-1746b6174/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://www.instagram.com/joshua_vijay/" target="_blank"><AiFillInstagram/></a>
          </div>
          <div className='shadow-lg relative bg-gradient-to-b from-green-800 rounded-full w-80 h-80 mt-20 mb-10 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} alt='picture of me holding a cat' layout='fill' objectFit='cover'/>
          </div>
        </section>
        <section className='mb-4rem'>
          <div className='text-center py-4'>
            <h3 className='text-3xl py-1'>Areas I want to grown in: </h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Growing up, I liked to play a lot of sports, and I still do. I also enjoy going to the gym and lifting.
              Beyond those two things, I enjoy reading philosophy and the Bible and thinking critically about the world we live in
              and our place in it.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
            </p>
          </div>
          <div className='lg:flex gap-10 mb-20'>
            <Link href="/athletics">
                <div className='text-center shadow-lg p-10 rounded-xl my-10 hover:bg-gray-100 transition duration-300 hover:shadow-none mb-10'>
                  <Image src={dumbell} alt='design icon' width={100} height={100} className='mx-auto'/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Athletics</h3>
                  <p className='py-2'>
                    Athletics have always played a large role in my life and overall happiness. I enjoy a lot of sports,
                    and I also enjoy just going to the gym or going for a run. Click on this card to learn more.
                  </p>
                </div>
            </Link>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 hover:bg-gray-100 transition duration-300 hover:shadow-none'>
              <Image src={presentation} alt='code icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Career</h3>
              <p className='py-2'>
                What I think I want to do with my life, and how I am preparing for that often changes. Click on
                this card to view a timeline of how I decided to choose my career.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 hover:bg-gray-100 transition duration-300 hover:shadow-none'>
              <Image src={bible} alt='consulting icon' width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Faith</h3>
              <p className='py-2'>
                I enjoy reading about and discussing religion, philosophy, history, and science. I enjoy thinking about difficult
                questions and discussing them with my friends. Click on this link to view a timeline of my changes in life philosophy.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center mb-1'>
            <h3 className='text-3xl py-1 mb-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 '>
              I have taken many classes at the University of Michigan where I completed cool projects. Additionally, I have pursued many
              personal projects relating to my interests. Finally, I have real world experience through internship work. Here are some of
              the projects I have worked on.
            </p>
          </div>
          {/* <ImageCarousel images={images} /> */}
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/4 flex-1'>
              <Image src={insta485} width={100} height={100} layout="responsive" alt='porfolio item one' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={neuralNetwork} width={100} height={100} layout="responsive" alt='porfolio item two' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={aiCfour} width={100} height={100} layout="responsive" alt='porfolio item three' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={ask485} width={100} height={100} layout="responsive" alt='porfolio item four' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={threeD} width={100} height={100} layout="responsive" alt='porfolio item five' className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={piazza} width={100} height={100} layout="responsive" alt='porfolio item six' className='rounded-lg object-cover'/>
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}
