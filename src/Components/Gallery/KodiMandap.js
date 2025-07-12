import React,{useState} from 'react'
import Masonry from "react-responsive-masonry"
const images = [
    "/img/Mandap/KODI MANDAP/K1.JPG",
    "/img/Mandap/KODI MANDAP/K2.JPG",
    "/img/Mandap/KODI MANDAP/K3.JPG",
    "/img/Mandap/KODI MANDAP/K4.JPG",
	"/img/Mandap/KODI MANDAP/K5.JPG",
    "/img/Mandap/KODI MANDAP/K6.JPG",
    "/img/Mandap/KODI MANDAP/K7.JPG",
    "/img/Mandap/KODI MANDAP/K8.JPG",
	"/img/Mandap/KODI MANDAP/K9.JPG",
    "/img/Mandap/KODI MANDAP/K10.JPG",
    "/img/Mandap/KODI MANDAP/K11.JPG",
	"/img/Mandap/KODI MANDAP/K12.JPG",
    "/img/Mandap/KODI MANDAP/K13.JPG",
    "/img/Mandap/KODI MANDAP/K14.JPG",
    "/img/Mandap/KODI MANDAP/K15.JPG",
    "/img/Mandap/KODI MANDAP/K16.JPG",
    "/img/Mandap/KODI MANDAP/K17.JPG",
	"/img/Mandap/KODI MANDAP/K18.JPG",
    "/img/Mandap/KODI MANDAP/K19.JPG",
    "/img/Mandap/KODI MANDAP/K20.JPG",
    "/img/Mandap/KODI MANDAP/K21.JPG",
    "/img/Mandap/KODI MANDAP/K22.JPG",
]
export default function KodiMandap() {
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
