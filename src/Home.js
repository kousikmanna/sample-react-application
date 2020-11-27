
import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Nov/3000x1200_Hero-Tall_np._CB416108473_.jpg" 
                alt="" />
                <div className="home_row">
                    <Product 
                       id="4657465346436436543"
                       title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                       price ={29.99}
                       image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                       rating={5}
                    />
                    <Product 
                       id="534653654343574653454"
                       title="Kenwood Kmix Stand Mixer for baking, stylish kitchen mixture with k-beater, dough hook and whisk, 5 Litre glass bowl"
                       price ={239.00}
                       image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
                       rating={4}
                    /> 

                </div>
                
                <div className="home_row">
                    <Product 
                       id="73625664346437654365"
                       title="Samsung LF24T352FHWXXL 49' Curved Led Gaming Monitor"
                       price ={199}
                       image="https://images-na.ssl-images-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg"
                       rating={3}
                    />
                    <Product 
                        id="73625634567457643543"
                        title="Amazon Echo (3rd Generation) | smart speaker with Alexea, Charcoal Fabric"
                        price ={98.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61rT%2BxgJeDL._SL1000_.jpg"
                        rating={5}
                    /> 
                    <Product 
                      id="837465785674574635654736"
                      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                      price ={598.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SL1500_.jpg"
                      rating={4}
                    /> 
                </div>

                <div className="home_row">
                    <Product 
                    id="47675476547654744674365"
                    title="Samsung 49' Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 * 1440"
                    price ={1094.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                    rating={4}/> 
                </div>

            </div>
        </div>
    )
}




export default Home
