"use client"
import React, { useState } from 'react';
import Aboutpage from './Aboutpage';
import Howitworks from './Howitworks';
import Selectgame from './Selectgame';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import "tailwindcss/tailwind.css";

export default function Landingpage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover" >

            <div className="h-screen w-full bg-white relative flex overflow-hidden" style={{
                backgroundImage: "url('https://images2.alphacoders.com/130/1301855.jpg')",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-transparent text-white">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <svg className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
                    </div>
                    <Link href="/Aboutpage">
                        <div className="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                    </Link>
                    <Link href="/Howitworks">
                        <div className="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                    </Link>
                </aside>
                <div className="w-full h-full flex flex-col justify-center">
                    <div className='flex flex-col text-center justify-center items-center h-full  font-bold'>

                        <div className='text-5xl'>
                        Copyright Quest
                        </div>
                        <div className='mt-4'>
                            <Link href="/Selectgame" onClick={() => {
                                console.log('Page is loading...');
                            }} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Lets Go</span>
                                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
