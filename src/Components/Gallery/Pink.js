import React,{useState} from 'react'
import Masonry from "react-responsive-masonry"
const images = [
    "/img/Mandap/PINK/P1.jpg",
    "/img/Mandap/PINK/P2.jpg", 
    "/img/Mandap/PINK/P3.jpg",
    "/img/Mandap/PINK/P4.jpg",
    "/img/Mandap/PINK/P5.jpg",
    "/img/Mandap/PINK/P6.jpg",
    "/img/Mandap/PINK/P7.jpg",
    "/img/Mandap/PINK/P8.jpg", 
    "/img/Mandap/PINK/P9.jpg",
    "/img/Mandap/PINK/P10.jpg",
    "/img/Mandap/PINK/P11.jpg",
    "/img/Mandap/PINK/P12.jpg",
    "/img/Mandap/PINK/P13.jpg",
    "/img/Mandap/PINK/P14.jpg", 
    "/img/Mandap/PINK/P15.jpg",
    "/img/Mandap/PINK/P16.jpg",
    "/img/Mandap/PINK/P17.jpg",
    "/img/Mandap/PINK/P18.jpg",
    "/img/Mandap/PINK/P19.jpg",
    "/img/Mandap/PINK/P20.jpg", 
    "/img/Mandap/PINK/P21.jpg",
    "/img/Mandap/PINK/P22.jpg",
    "/img/Mandap/PINK/P23.jpg",
    "/img/Mandap/PINK/P24.jpg",
    "/img/Mandap/PINK/P25.jpg",
    "/img/Mandap/PINK/P26.jpg", 
    "/img/Mandap/PINK/P27.jpg",
    "/img/Mandap/PINK/P27.jpg",
    "/img/Mandap/PINK/P29.jpg",
    "/img/Mandap/PINK/P30.jpg",
    "/img/Mandap/PINK/P31.jpg",
    "/img/Mandap/PINK/P32.jpg", 
    "/img/Mandap/PINK/P33.jpg",
    "/img/Mandap/PINK/P34.jpg",
    "/img/Mandap/PINK/P35.jpg",
    "/img/Mandap/PINK/P36.jpg",

]
export default function Pink() {
	const [data, setData] = useState({img: '',i: 0})
	const viewImage = (img, i) =>{
		setData({img,i})
	}
	const imgAction = (action) =>{
		let i =  data.i;

		if(action==='next'){
			setData({img: images[i+1],i: i+1})
		}else if(action==='pre'){
			setData({img: images[i-1],i: i-1})
		}else if(!action){
			setData({img: '',i: 0})
		}
	}
	
	return (
	<>
		{
			data.img && 


		<div style={{
			width: "100%",
			height: "100vh",
			background: "white",
			position: "fixed",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
		}}>

			<button onClick={()=>imgAction('') } style={{position: "absolute",top: '10px',right: '10px',background: "white",opacity: '0.4',}}><i className="fa fa-close" style={{fontSize:'40px',color:'red'}}></i></button>
			<button onClick={()=>imgAction('pre') } style={{background: "white",padding: '10px',marginLeft: '10px',position: "absolute",alignItems: "center",left: 40,width: "4%",opacity: '0.4',}}><i class='fas fa-angle-double-left' style={{fontSize:'48px',color:'red'}}></i></button><br />
			<img src={data.img} alt=''style={{width: "auto",maxWidth: "90%",maxHeight: "90%",	}}/>
			<button onClick={()=>imgAction('next') } style={{background: "white",padding: '10px',marginLeft: '10px',position: "absolute",alignItems: "center",right: 40,width: "4%",opacity: '0.4',}}><i class='fas fa-angle-double-right' style={{fontSize:'48px',color:'red'}}></i></button><br />

		</div>
		}

		<div style={{padding: "10px"}}>
		
		<Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block",cursor: "pointer"}}
                    	alt=''
						onClick={()=>viewImage(image,i)}
					/>
                ))}
            </Masonry>
		</div>
		

	</>
  )
}
