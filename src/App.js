import React from 'react';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import './App.css';


function App() {

    return (

        <>

            <header>

                <h1>Handbags & Purses</h1>
                <nav>
                    <Button>to the collection</Button>
                    <Button>shop all bags</Button>
                    <Button disabled={true}>the trendy bags</Button>
                </nav>

            </header>


            <main>

                <Product
                    tag="Best seller"
                    image={bag1}
                    title="The handy bag"
                    price="400"
                />
                <Product
                    tag="Best seller"
                    image={bag2}
                    title="The stylish bag"
                    price="250"
                />
                <Product
                    tag="New collection"
                    image={bag3}
                    title="The simple bag"
                    price="300"
                />
                <Product
                    tag="New collection"
                    image={bag4}
                    title="The trendy bag"
                    price="150"
                />

            </main>


            <footer>

                <Tile
                    title="Brand"
                    p_text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad adipisci aut,
                    doloremque laboriosam maiores odit quaerat quasi ratione sequi tempore, vero! A consectetur
                    consequuntur deserunt dolores eaque eius, fugit, minus nisi quos rem repudiandae soluta suscipit.
                    Atque cupiditate, debitis ex laboriosam magnam placeat quibusdam voluptates! Repellendus veritatis
                    voluptas voluptate?"
                />
                <Tile
                    image={brand}
                />
                <Tile
                    image={our_story}
                />
                <Tile
                    title="Our story"
                    p_text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad adipisci aut,
                    doloremque laboriosam maiores odit quaerat quasi ratione sequi tempore, vero! A consectetur
                    consequuntur deserunt dolores eaque eius, fugit, minus nisi quos rem repudiandae soluta suscipit.
                    Atque cupiditate, debitis ex laboriosam magnam placeat quibusdam voluptates! Repellendus veritatis
                    voluptas voluptate?"
                />

            </footer>

        </>

    );

}

export default App;



