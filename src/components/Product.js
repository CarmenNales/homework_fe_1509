import React from 'react';

function Product({tag, image, title, price}) {

    // Return Product component
    return(

        <article className="product">
            <span>{tag}</span>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <h4>€{price},-</h4>
        </article>

    );

}

export default Product;