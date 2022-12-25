'use strict';

let numero = document.querySelector('.numero');
let trocar = document.querySelectorAll('.conte');
let content = document.querySelector('.content');
let dice = document.querySelector('.dice');
let imagem =document.querySelector('.imagem');

let conteudo = [
  '"They will always pretend, untill they do not, so, be smart, because been bad is borring."',
  '<br>"I knew it, but i did not care, love make us blind, bad."',
  '"Making love, is better than making war, think twice when you decide to kick ass of someone."',
  '<br>"It is easy to sit up and take notice, what is difficult is geting up and take action."',
  '<br>"Either you run the day, or the day runs you!"',
  '"Sex is always about emotions. Good sex is about free emotuons; bad sex is about blocked emotions."',
  '"Even when you did lost everything you thought there was to lo lose, somebody came along and gave you something for free."',
  '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
  '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it is beauty."',
  '"Maybe some women arnoe t meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
  '<br>"Man cannot be freed by the same injustice that enslaved it."',
  '"...The church, the state, the school, the magazine, think they are liberal and free! It is the freedom of a prison-yard."',
  '<br>"Bury us, and mark our names above. Let us be free."',
  '"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
  '"If all men are born free, how is it that all women are born slaves?"'

]

dice.addEventListener('click', function(){

  let contador = Math.floor(Math.random()*conteudo.length);

  let display = conteudo[contador];

  content.innerHTML = display;
  numero.textContent = contador;
  /*
  numero.textContent = contador;
  content.textContent = trocar[contador].textContent; */

  console.log(contador)
  console.log(display)

})





