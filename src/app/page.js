"use client"

import { Send } from 'feather-icons-react'

import Header from './Header.js'


export default function Home() {


  return (
    <>
      <Header /> 
      <section class="mx-auto flex flex-col gap-10 w-full justify-center items-center">
   <div class="p-10 rounded-xl flex flex-col
   jstify-center items-start gap-5">
     <h3 class="text-3xl text-s font-highlight">Curso de Vocação</h3>
     <p class="text-s" >Para conhecer o mundo, é necessário se
     conhecer primeiro. Um guia gratuito de autoconhecimento pessoal e
     profissional para dar um "up" na sua carreira.</p>
     <a class="text-t bg-s p-5 rounded-xl mt-5 bg-elementary p-5 rounded-xl w-full text-center
     font-bold text-xl" target="_blank" href="/vocacao">Acessar</a>
   </div>
 </section>
    </>

  )
}