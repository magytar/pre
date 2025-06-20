'use client'

import "./style.css"
import Image from "next/image"
import { useEffect, useState } from "react"

import ImgPre from "./imgs/pre.png"

import Img1 from "./imgs/img1.jpg"
import Img2 from "./imgs/img2.jpg"
import Img3 from "./imgs/img3.jpg"
import Img4 from "./imgs/img4.jpg"

import ImgSabor1 from "./imgs/2.png"
import ImgSabor2 from "./imgs/3.png"
import ImgSabor3 from "./imgs/4.png"

import Cardapio1 from "./imgs/cardapio1.png"
import Cardapio2 from "./imgs/cardapio2.png"

import Setadireita from "./imgs/setadireita.png"
import Setaesqueda from "./imgs/setaesquerda.png"

import Imginstagram from "./imgs/instagram.png"
import Imgfacebook from "./imgs/facebook.png"

export default function Home(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [img, setImg] = useState(Img1)
  const [count, setCount] = useState(1)
  const [cardapiolist, setCardapio] = useState(Cardapio1)
  const [cardcode, setcardcode] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth >= 600) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() =>{

    const inter = setInterval(()=>{
      
      if(count == 1){
        setImg(Img1)
        setCount(2)
        console.log("entro 1")
      }
      if(count == 2){
        setImg(Img2)
        setCount(3)
      }
      if(count == 3){
        setImg(Img3)
        setCount(4)
      }
      if(count == 4){
        setImg(Img4)
        setCount(1)
      }
      
    }, 3000)

    return () => clearInterval(inter)

  }, [count])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  function mudarc() {
    console.log(cardcode)
    if(cardcode == 1){
      setCardapio(Cardapio2)
      setcardcode(2)
    }
    if(cardcode == 2){
      setCardapio(Cardapio1)
      setcardcode(1)
    }
  }

  function irParaPedido() {
    window.location.href = "https://pedir.delivery/predilettapizzas";
  }

  function irpara(local) {
    window.location.href = "http://localhost:3000/#" + local;
  }

  return (
    <div className="display">
      <header className="header" id="inicio">
        <div className="header-container">
          <div className="logo-container">
            <Image 
              src={ImgPre} 
              className="img-logo" 
              alt="pizza"
              width={60}
              height={60}
            />
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <button onClick={() => irpara("inicio")}>Início</button>
            <button onClick={() => irpara("cardapio")}>Promoção</button>
            <button onClick={() => irpara("cardapio")}>Cardápio</button>
            <button onClick={() => irpara("localizacao")}>Localização</button>
            <button onClick={() => irpara("contato")}>Contato</button>
            <button className="btn-pedir" onClick={() => irParaPedido()}>
              Pedir Agora
            </button>
          </nav>

          <div 
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle-active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Overlay para fechar menu ao clicar fora */}
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu}></div>
        )}
      </header>
      <div className="display-imgs" id="contato">
        <h2 style={{fontSize:35}}>Prediletta Pizzas</h2>
        <Image src={img} alt="img" className="imgs"></Image>
        <h1 style={{fontSize:20}}>📞Telefone: <strong>(19) 3411.1417 (19) 3411.3833</strong></h1>
        <div className="paginas">
          <a
    href="https://www.instagram.com/predilettapiracicaba/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#E1306C',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
      textDecoration: 'none',
      gap: '8px',
      marginTop: '10px'
    }}
  >
   <Image src={Imginstagram} width={20} alt="i"></Image> Instagram
  </a>
  <a
    href="https://www.facebook.com/predilettapizzas/?locale=pt_BR"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#1877F2',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
      textDecoration: 'none',
      gap: '8px',
      marginTop: '10px'
    }}
  >
    <Image src={Imgfacebook} width={20} alt="i"></Image> Facebook
  </a>
        </div>

      </div>
      <div className="sabores">
        <div className="sabor">
          <h2 style={{fontSize:30}}><strong>Mamma Mia</strong></h2>
          <Image src={ImgSabor1} alt="1"></Image>
          <p>Pizzas com opcionais de Borda Recheada de Catupiry, Cheddar e Mista.</p>
          <p>Tortone: Qualquer pizza do cardápio coberta com uma massa, molho e parmesão salpicado.</p>
        </div>
        <div className="sabor">
          <h2 style={{fontSize:30}}><strong>Para Sobremesa</strong></h2>
          <Image src={ImgSabor2} alt="2"></Image>
          <p>Pizzas Doce com combinações deliciosas!</p>
          <p>Como opcional, borda recheada de chocolate, doce de leite e goiabada.</p>
          <p>Ainda dá pra misturar os sabores da borda!</p>
        </div>
        <div className="sabor">
          <h2 style={{fontSize:30}}><strong>Pizza é massa!</strong></h2>
          <Image src={ImgSabor3} alt="3"></Image>
          <p>Na pizza da Prediletta, a massa é especial. Sua receita é segredo absoluto, guardada por nosso pizzaiolo.</p>
          <p>Você pode escolher entre massa fina ou grossa, sem custo adicional.</p>
        </div>
      </div>
      <div className="cardapio" id="cardapio">
        <Image src={cardapiolist} style={{borderRadius:10}} className="cardapio2" alt="cardapio"></Image>
        <div style={{display:"flex"}}>
          <Image src={Setaesqueda} width={50} alt="muda" onClick={() => mudarc()} style={{cursor: "pointer"}} className="seta"></Image>
          <Image src={Setadireita} width={50} alt="muda" onClick={() => mudarc()} style={{cursor: "pointer", maxWidth:450}} className="seta"></Image>
        </div>
      </div>
      <section id="localizacao" style={{ padding: 20 }}>
      <h2 style={{fontSize:30, fontWeight:"bold"}}>Onde estamos</h2>
      <p>Rua Santa Catarina, 2202 - Água Branca
Piracicaba SP - 13425-107</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7358.575744386701!2d-47.631732506294014!3d-22.754695614671338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c630143ca2826d%3A0x8fec4228cb5456c5!2sPrediletta%20Pizzas!5e0!3m2!1spt-BR!2sbr!4v1750452727855!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        className="map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
    </div>
  )
}