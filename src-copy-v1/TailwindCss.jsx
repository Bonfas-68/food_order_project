import React from 'react'
import img2 from './tailwind-sandbox-starter/assets/img/warning.svg'
import img4 from './tailwind-sandbox-starter/assets/img/img4.jpg'
import img5 from './tailwind-sandbox-starter/assets/img/img5.jpg'
import Colors from './Colors'


export default function TailwindCss() {
  return (
    <>
    <Colors />
    <button className="rounded-lg  m-2 px-6 py-2 text-white bg-blue-500 hover:bg-blue-700">Hello</button>
    <button className="rounded-lg  m-2 px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-1000">Hello</button>
    <button className="rounded-lg  m-2 px-6 py-2 text-white hover:rotate-12 bg-blue-500 hover:bg-blue-700 transition-transform duration-1000">Hello</button>
    <img className='rounded-full border-4 border-green-500/20 animate-pulse duration-1000 w-64 h-64' src={img5} alt="" />
    <div className='flex bg-white items-center p-6 max-w-sm mx-auto shadow-lg rounded-xl space-x-4 mt-12'>
    <img className='rounded-full border-4 border-red-500/20 animate-bounce w-12 h-12' src={img2} alt="" />
    <div className="">
    <h4 className='text-xl text-yellow font-medium'>Are you sure?</h4>
    <p className="text-slate-500">You are about to delete a post</p></div>
    </div>

    <div className="flex h-72 w-full bg-gray-100 items-center justify-center flex-wrap">
      <div className="p-10 flex-none w-64 border-blue-300 bg-blue-100">01</div>
      <div className="p-10 flex-initial border-blue-300 bg-blue-100">02</div>
      <div className="p-10 flex-1 border-blue-300 bg-blue-100">03</div>
      <div className="p-10 flex-auto border-blue-300 bg-blue-100">04</div>
    </div>
    <div className="flex flex-col gap-4 h-72 w-full bg-gray-100 items-center justify-center flex-wrap">
      <div className="order-2 p-10 border-blue-300 bg-blue-100">01</div>
      <div className="order-3 p-10 border-blue-300 bg-blue-100">02</div>
      <div className="order-4 p-10 border-blue-300 bg-blue-100">03</div>
      <div className="order-1 p-10 border-blue-300 bg-blue-100">04</div>
    </div>
    <div className="flex flex-col gap-4 h-72 w-full bg-gray-100 items-center justify-center flex-wrap">
      <div className="p-10 border-blue-300 bg-blue-100">01</div>
      <div className="p-10 border-blue-300 bg-blue-100">02</div>
      <div className="p-10 border-blue-300 bg-blue-100">03</div>
      <div className="p-10 border-blue-300 bg-blue-100">04</div>
    </div>

    <div className="grid md:grid-cols-3 md:gap-2">
    <div className=" md:col-span-2 p-10 border-blue-300 bg-blue-100">01</div>
    <div className="md:row-span-5 p-10 border-blue-300 bg-blue-100">02</div>
    <div className="p-10 border-blue-300 bg-blue-100">03</div>
    <div className="p-10 border-blue-300 bg-blue-100">04</div>
    <div className="p-10 border-blue-300 bg-blue-100">05</div>
    <div className="p-10 border-blue-300 bg-blue-100">06</div>
    <div className="p-10 border-blue-300 bg-blue-100">07</div>
    </div>

    <p className="text-red-900">Hallo guys</p>
    <p className="text-green-200 bg-emerald-500">Hallo guys</p>
    <p className="text-green-200 bg-slate-500">Hallo guys</p>
      <input type="checkbox" className='accent-purple-500' />
      <input type="text" className='accent-purple-500 border border-green-600' />
    <p className="underline decoration-emerald-400">Hallo guys</p><div className="divide-y">
      <div className="shadow-lg bg-cyan-500 shadow-yellow-500/50">item 1</div>
      <div className="bg-[#feddae]">item 3</div>
      <div className="bg-[yellow]">item 2</div>
    </div>
<div className="container mx-auto">
  <article>
      <h3>Hello</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur necessitatibus, alias nisi beatae delectus asperiores labore nostrum, voluptate ipsam ad dolor voluptatibus provident sunt quae cupiditate totam veritatis nemo assumenda maiores suscipit at sit! Nisi nesciunt aut eligendi illo dolorum totam aspernatur labore voluptates. Obcaecati, unde? Esse quos quibusdam quaerat?</p>
    </article>
</div>

<div className="bg-slate-100 p-2">Hello world</div>
<div className="bg-slate-100 pl-4">Hello world</div>
<div className="bg-slate-100 pr-4">Hello world</div>
<div className="bg-slate-100 pt-[20px]">Hello world</div>
<div className="bg-slate-100 pt-4">Hello world</div>
<div className="bg-slate-100 p-12">
<div className="bg-slate-100 p-2">Hello world</div>
<div className="bg-slate-100 pl-4">Hello world</div>
<div className="bg-slate-100 mr-4">Hello world</div>
<div className="bg-slate-100 pt-[20px]">Hello world</div>
<div className="bg-slate-100 pt-4">Hello world</div>
</div>
{/* Flex row */}
<div className="flex mx-auto max-w-xl shadow-blue-500/50 rounded-lg shadow-lg p-6 mt-24 space-x-2">
  <div>Hello buddy</div>
  <div>Hello buddy</div>
  <div>Hello buddy</div>
  <div>Hello buddy</div>
  <div>Hello buddy</div>
</div>
{/* flex-d col */}
<div className="flex flex-col mt-24 space-y-4">
  <div>Hello buddy</div>
  <div>Hello buddy</div>
  <div>Hello buddy</div>
  <div>Hello buddy</div>
  <div>Hello buddy</div>
</div>
<div className="bg-yellow flex space-y-4 flex-col shadow-lg shadow-cyan-200/70 max-w-2xl py-12 px-6 mx-auto">
  <p className="font-sans">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-xs">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-sm">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-base">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-lg">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-xl">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-2xl">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-3xl">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-lg font-normal">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-lg font-semibold">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-lg font-bold">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-lg font-bold ">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-left ">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-center ">Hello guys seen me there over the networ...</p>
  <p className="font-sans text-right ">Hello guys seen me there over the networ...</p>
  <p className="font-sans underline decoration-4 decoration-blue-400 ">Hello guys seen me there over the networ...</p>
  <p className="font-sans underline decoration-4 decoration-doubled ">Hello guys seen me there over the networ...</p>
  <p className="font-sans underline decoration-4 decoration-dashed ">Hello guys seen me there over the networ...</p>
  <p className="font-sans underline decoration-4 decoration-wavy ">Hello guys seen me there over the networ...</p>
  <p className="normal-case">Hello guys seen me there over the networ...</p>
  <p className="uppercase">Hello guys seen me there over the networ...</p>
  <p className="lowercase">Hello guys seen me there over the networ...</p>
  <p className="capitalize">Hello guys seen me there over the networ...</p>
</div>
    
<div className="bg-yellow flex space-y-4 flex-col shadow-lg shadow-cyan-200/70 max-w-2xl py-12 px-6 mx-auto">
  <div className="bg-yellow text-red w-0">Heeeey!!</div>
  <div className="bg-yellow text-red w-4">Heeeey!!</div>
  <div className="bg-yellow text-red w-96">Heeeey!!</div>
  <div className="bg-green-700 text-red w-1/2">Heeeey!!</div>
  <div className="bg-green-700 text-red w-1/3">Heeeey!!</div>
  <div className="bg-green-700 text-red w-1/4">Heeeey!!</div>
  <div className="bg-blue-700 text-red w-screen">Heeeey!!</div>
  <div className="bg-gray-700 text-red w-screen"> 100vw w Heeeey!!</div>
  <div className="bg-gray-700 text-red w-full"> 100% w Heeeey!!</div>
  <div className="bg-cyan-700 my-4 max-w-sm mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id recusandae iure aut quia sint, soluta porro cumque sunt voluptas voluptate architecto qui impedit molestiae maiores dolorem, beatae cupiditate facere laboriosam.</div>


  <div className="flex items-end w-full">
    <div className="bg-orange-500 w-20 h-24">Hello!</div>
    <div className="bg-orange-500 w-20 h-32">Hello!</div>
    <div className="bg-orange-500 w-20 h-40">Hello!</div>
    <div className="bg-orange-500 w-20 h-48">Hello!</div>
    <div className="bg-orange-500 w-20 h-64">Hello!</div>
    <div className="bg-orange-500 w-20 h-96">Hello!</div>
  </div>
  
</div>
<div className="bg-orange-500/20 max-w-lg mx-auto h-screen">
  <h1 className="text-9xl flex text-center">Heey Man</h1>
</div>
<div className="relative bg-red-200 w-1/2 h-12">
  <p className="text-white text-4">Parent element</p>
  <div className="absolute bottom-0 right-0 bg-red-500">
    <p className="text-[#ddd] p-2">Absolute Child</p>
  </div>
</div>
<div className="relative w-32 h-32 bg-yellow-100">
  <div className="absolute w-16 h-16 bg-yellow-500 left-0 top-0">hello</div>
</div>
<div className="relative w-full h-screen bg-green-100">
  <div className="absolute inset-x-0 h-16 bg-green-900 left-0 top-0 text-[#fff]">Navbar</div>
  <div className="absolute w-64 inset-y-0  bg-green-900 left-0 top-16 text-[#fff]">Sidebar</div>
  <div className="absolute w-full mx-auto max-w-5xl inset-y-0  bg-green-200 left-64 top-16 text-[#111] p-6">
    <h1 className="font-bold">Content</h1>
    <p>
    <img className='float-left h-64 w-64 m-4' src={img4} alt="" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit facilis, ex repellendus deserunt alias eaque laboriosam ipsam<span className="inline font-bold"> Display inline</span> illum consequuntur ratione sit quam eum culpa,<span className="inline font-bold"> Display inline</span> reiciendis perspiciatis nobis rem nihil sequi quod corporis numquam voluptate. Quos doloremque possimus dicta maxime alias, ipsum magnam, et dignissimos nemo rem, eos placeat odit.</p>

    <div className="relative top-0 h-36 w-full">
      <div className="absolute left-10 w-40 h-40 bg-blue-300 z-40">1</div>
      <div className="absolute left-20 w-24 h-24 bg-blue-400 ">2</div>
      <div className="absolute left-40 w-24 h-24 bg-blue-500 z-10">3</div>
      <div className="absolute left-60 w-24 h-24 bg-blue-600 z-20">4</div>
      <div className="absolute left-80 w-24 h-24 bg-blue-700 z-30">5</div>
    </div>
    <div style={{backgroundImage:`url(${img4})`}} className="h-72 bg-no-repeat bg-center bg-cover"></div>
    <div className=" h-32 bg-gradient-to-r from-green-300 to-green-900"></div>
  </div>
  <div className="absolute h-16 inset-x-0  bg-green-900 left-64 bottom-0 text-[#fff]">Footer</div>
</div>
<div className="shadow-lg w-full p-6 text-left mt-4">
  <div className="flex justift-center max-w-lg">

  <div className="mix-blend-multiply bg-green-300 w-1/2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet exercitationem non voluptatem iste amet explicabo consequatur esse officiis nobis?
  </div>
  <div className="mix-blend-multiply bg-green-900 w-1/2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet exercitationem non voluptatem iste amet explicabo consequatur esse officiis nobis?
  </div>
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-md">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-lg">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-xl">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-2xl">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-inner">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-md shadow-blue-300">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
  <div className="w-96 mt-4 ml-4 p-3 shadow-md shadow-[#ccc]-500/50">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae voluptate quaerat a, expedita non error sit sequi impedit dignissimos.
  </div>
</div>

<div className="shadow shadow-cyan-500 rounded rounded-md">
  <div className="w-1/2 border border-2 border-red-500">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa laboriosam nam saepe ad est.
  </div>
  <div className="w-1/2  m-2 shadow shadow-lg p-2 shadow-cyan-500/50 border-t-2 border-red-500 rounded-lg">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa laboriosam nam saepe ad est.
  </div>
  <div className=" m-2 w-1/2 border border-2 border-red-500 rounded-lg">
  <img className='w-24 h-24 border-4 border-green-500/300 rounded-full float-left' src={img4} alt="" />
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium facilis minus dolorem eos non sequi alias nam incidunt eaque impedit corrupti repudiandae, voluptates saepe neque repellendus deserunt ratione praesentium. Sunt veniam ipsa est blanditiis odio ad cumque magni culpa architecto doloremque, laudantium dolores facere reiciendis consequuntur praesentium libero, amet voluptate.
  </div>
</div>
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 blur-sm ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 blur-lg ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 blur-xl ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 brightness-50 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 brightness-75 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 brightness-100 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 brightness-150 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 brightness-200 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 contrast-100 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 contrast-50 ' src={img4} alt="" />
<img className='w-24 h-24 rounded-full border-4 border-green-500/50 contrast-0 ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 grayscale ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 sepia ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 invert ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 hue-rotate-0 ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 hue-rotate-15 ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 hue-rotate-30 ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 hue-rotate-60 ' src={img4} alt="" />
<img className='w-40 h-40  border-4 border-green-500/50 hue-rotate-90 ' src={img4} alt="" />

<div className="font-bold">
  <h1 className="font-bold my-1">
  HOVER Effect
  </h1>
<button className="bg-blue border-2 border-red text-white rounded-lg m-3 py-3 px-5 hover:text-red ">Say Hello!</button>
</div>
    </>

    
  )
}
