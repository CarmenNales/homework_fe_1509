function Tile({image, title, p_text}) {

    // Check if Tile is an image-Tile
    if (image) {

        // Return image-Tile
        return (

            <section>
                <img src={image} alt={title}/>
            </section>

        )

    }


    // Return text-Tile
    return (

        <section>
            <h2>{title}</h2>
            <p>{p_text}</p>
        </section>

    );

}

export default Tile;