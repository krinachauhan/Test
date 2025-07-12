import React,{useState} from 'react'
import Masonry from "react-responsive-masonry"
const images = [
    "/img/Mandap/MARUN & WHITE/MW1.JPG",
    "/img/Mandap/MARUN & WHITE/MW2.JPG",
    "/img/Mandap/MARUN & WHITE/MW3.JPG",
    "/img/Mandap/MARUN & WHITE/MW4.JPG",
	"/img/Mandap/MARUN & WHITE/MW5.JPG",
    "/img/Mandap/MARUN & WHITE/MW6.JPG",
    "/img/Mandap/MARUN & WHITE/MW7.JPG",
    "/img/Mandap/MARUN & WHITE/MW8.JPG",
	"/img/Mandap/MARUN & WHITE/MW9.JPG",
    "/img/Mandap/MARUN & WHITE/MW10.JPG",
    "/img/Mandap/MARUN & WHITE/MW11.JPG",
	"/img/Mandap/MARUN & WHITE/MW12.JPG",
    "/img/Mandap/MARUN & WHITE/MW13.JPG",
    "/img/Mandap/MARUN & WHITE/MW14.JPG",
]
export default function MarunWhite() {
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
