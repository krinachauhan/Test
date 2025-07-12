import React,{useState} from 'react'
import Masonry from "react-responsive-masonry"
const images = [
    "/img/Mandap/YELLOW & WHITE/Y1.jpg",
    "/img/Mandap/YELLOW & WHITE/Y2.jpg",
    "/img/Mandap/YELLOW & WHITE/Y3.jpg",
    "/img/Mandap/YELLOW & WHITE/Y4.jpg",
    "/img/Mandap/YELLOW & WHITE/Y5.jpg",
    "/img/Mandap/YELLOW & WHITE/Y6.jpg",
    "/img/Mandap/YELLOW & WHITE/Y7.jpg",
    "/img/Mandap/YELLOW & WHITE/Y8.jpg",
    "/img/Mandap/YELLOW & WHITE/Y9.jpg",
    "/img/Mandap/YELLOW & WHITE/Y10.jpg",
    "/img/Mandap/YELLOW & WHITE/Y11.jpg",
    "/img/Mandap/YELLOW & WHITE/Y12.jpg",
    "/img/Mandap/YELLOW & WHITE/Y13.jpg",
    "/img/Mandap/YELLOW & WHITE/Y14.jpg",
    "/img/Mandap/YELLOW & WHITE/Y15.jpg",
    "/img/Mandap/YELLOW & WHITE/Y16.jpg",
    "/img/Mandap/YELLOW & WHITE/Y17.jpg",
    "/img/Mandap/YELLOW & WHITE/Y18.jpg",
    "/img/Mandap/YELLOW & WHITE/Y19.jpg",
    "/img/Mandap/YELLOW & WHITE/Y20.jpg",
    "/img/Mandap/YELLOW & WHITE/Y21.jpg",
    "/img/Mandap/YELLOW & WHITE/Y22.jpg",
    "/img/Mandap/YELLOW & WHITE/Y23.jpg",
    "/img/Mandap/YELLOW & WHITE/Y24.jpg",
    "/img/Mandap/YELLOW & WHITE/Y25.jpg",
    "/img/Mandap/YELLOW & WHITE/Y26.jpg",
    "/img/Mandap/YELLOW & WHITE/Y27.jpg",
    "/img/Mandap/YELLOW & WHITE/Y28.jpg",
    "/img/Mandap/YELLOW & WHITE/Y29.jpg",
    "/img/Mandap/YELLOW & WHITE/Y30.jpg",
    "/img/Mandap/YELLOW & WHITE/Y31.jpg",
    "/img/Mandap/YELLOW & WHITE/Y32.jpg",
    "/img/Mandap/YELLOW & WHITE/Y33.jpg",
    "/img/Mandap/YELLOW & WHITE/Y34.jpg",
    "/img/Mandap/YELLOW & WHITE/Y35.jpg",
    "/img/Mandap/YELLOW & WHITE/Y36.jpg",
    "/img/Mandap/YELLOW & WHITE/Y37.jpg",
    "/img/Mandap/YELLOW & WHITE/Y38.jpg",
    "/img/Mandap/YELLOW & WHITE/Y39.jpg",
    "/img/Mandap/YELLOW & WHITE/Y40.jpg",

]
export default function YellowWhite() {
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
