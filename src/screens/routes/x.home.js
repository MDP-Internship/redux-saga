import gif from '../../assets/gifs/giphy.gif'

function Home(){
    return(
    <div className="header">      
        <p>WELCOME TO STORE</p>
        <img src={gif} alt="shop" />
    </div>
    )

}

export default Home;