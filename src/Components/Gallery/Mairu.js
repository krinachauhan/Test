import React,{useState} from 'react'
import Masonry from "react-responsive-masonry"
const images = [
    "/img/Mandap/MAIRU/M1.JPG",
    "/img/Mandap/MAIRU/M2.JPG",
    "/img/Mandap/MAIRU/M3.JPG",
    "/img/Mandap/MAIRU/M4.JPG",
	"/img/Mandap/MAIRU/M5.JPG",
    "/img/Mandap/MAIRU/M6.JPG",
    "/img/Mandap/MAIRU/M7.JPG",
    "/img/Mandap/MAIRU/M8.JPG",
	"/img/Mandap/MAIRU/M9.JPG",
    "/img/Mandap/MAIRU/M10.JPG",
    "/img/Mandap/MAIRU/M11.JPG",
	"/img/Mandap/MAIRU/M12.JPG",
    "/img/Mandap/MAIRU/M13.JPG",
    "/img/Mandap/MAIRU/M14.JPG",
	"/img/Mandap/MAIRU/M15.JPG",
    "/img/Mandap/MAIRU/M16.JPG",
    "/img/Mandap/MAIRU/M17.JPG",
    "/img/Mandap/MAIRU/M18.JPG",
	"/img/Mandap/MAIRU/M19.JPG",
    "/img/Mandap/MAIRU/M20.JPG",
    "/img/Mandap/MAIRU/M21.JPG",
	"/img/Mandap/MAIRU/M22.JPG",
    "/img/Mandap/MAIRU/M23.JPG",
]
export default function Mairu() {
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
