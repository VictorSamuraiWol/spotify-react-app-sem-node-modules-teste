import React from 'react';
import './HeaderMain.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';
import imgCard1 from '../../assets/playlist/1.jpeg'
import imgCard2 from '../../assets/playlist/2.jpg'
import imgCard3 from '../../assets/playlist/3.jpeg'
import imgCard4 from '../../assets/playlist/4.jpeg'
import imgCard5 from '../../assets/playlist/5.jpg'
import imgCard6 from '../../assets/playlist/6.jpeg'
import imgCard7 from '../../assets/playlist/7.jpeg'
import imgCard8 from '../../assets/playlist/8.jpeg'
import imgCard9 from '../../assets/playlist/9.jpeg'
import imgCard10 from '../../assets/playlist/10.jpeg'
import imgCard11 from '../../assets/playlist/11.jpeg'
import imgCard12 from '../../assets/playlist/12.jpeg'
import imgCard13 from '../../assets/playlist/13.jpeg'
import imgCard14 from '../../assets/playlist/14.jpeg'
import imgCard15 from '../../assets/playlist/15.jpeg'

const HeaderMain = () => {
    return (
        <div class="main-container">
            <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="Seta esquerda"/>
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight}/>
                    </button>
                
                    <button className="header__search">
                        <img src={search} alt=""/>
                        <input id="search-input" type="text" maxlength="800" placeholder="Escolha o personagem..."/>
                    </button>
                </div>
            
                <div className="header__login">
                    <button class="subscribe">Inscreva-se</button>
                    <button class="login">Entrar</button>
                </div>
            </nav>
            

            <div class="playlist-container">
                <div id="result-playlists">
                <div class="playlist">
                    <h1 id="greeting">Olá</h1>
                    <h2 class="session">Navegar por todos os personagens</h2>
                </div>

                <div class="offer__scroll-container">
                    <div class="offer__list">
                    <section class="offer__list-item">

                        <a href="" class="cards">
                        <div class="cards card1">
                            <img src={imgCard1} alt="" />
                            <span>Wolverine</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card2">
                            <img src={imgCard2} alt="" />
                            <span>Batman</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card3">
                            <img src={imgCard3} alt="" />
                            <span>Hulk</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card4">
                            <img src={imgCard4} alt="" />
                            <span>Homem de Ferro</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card5">
                            <img src={imgCard5} alt="" />
                            <span>Thor</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card6">
                            <img src={imgCard6} alt="" />
                            <span>Tartarugas Ninja</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card7">
                            <img src={imgCard7} alt="" />
                            <span>Super Man</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card8">
                            <img src={imgCard8} alt="" />
                            <span>Ciclope</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card9">
                            <img src={imgCard9} alt="" />
                            <span>Flash</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card10">
                            <img src={imgCard10} alt="" />
                            <span>Capitão América</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card11">
                            <img src={imgCard11} alt="" />
                            <span>Sub Zero</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card12">
                            <img src={imgCard12} alt="" />
                            <span>Scorpion</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card13">
                            <img src={imgCard13} alt="" />
                            <span>Raiden</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card14">
                            <img src={imgCard14} alt="" />
                            <span>Ryu</span>
                        </div>
                        </a>

                        <a href="" class="cards">
                        <div class="cards card15">
                            <img src={imgCard15} alt="" />
                            <span>Ken</span>
                        </div>
                        </a>
                    </section>
                    </div>
                </div>
                </div>

                <div class="hidden res" id="result-character">
                    <div class="grid-container">
                        <div class="character-card" id="">
                        <div class="card-img">
                            <img id="character-img" class="character-img" />
                            <div class="simbol">
                            <img src="./src/assets/playlist/simbols/png-superHero.png" class="simbolHero" alt="simbolHero"/>
                            </div>
                        </div>
                        <div class="card-text">
                            <a title="" class="" href="">
                            <span class="character-name" id="character-name"></span>
                            <span class="character-categorie">Super Héroi</span>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div id="descriptionHero" class="hidden">
                        <span id="descriptionHeroSpan" class=""></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeaderMain;