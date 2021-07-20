import Jumbotron from './jumbotron';
import Card from './card';

const Main = () => {

	let img = ['https://hablatumusica.com/wp-content/uploads/2012/11/The-Strokes-Angles.jpg','https://indiehoy.com/wp-content/uploads/2013/01/strokescomedowncover-500x500.png','https://3.bp.blogspot.com/-Z5aLuEJsDtk/WoN3qYAedmI/AAAAAAAAB04/r646AENm8AsiBdrv40MVNeqD50RpoRAWwCLcBGAs/s1600/Album%2B2.jpg','https://www.discografiasmega.com/wp-content/uploads/2019/03/Descargar-The-Strokes-Future-Present-Past-2016-MEGA.png'];

	return(
		<section className="container">
			<Jumbotron/>


			<div class="container">
			  <div class="d-flex flex-row bd-highlight">
				{img.map((link) => <Card url={link}/>)}
			  </div>
			</div>
		</section>
		//no me sale la division entre cards, pero porque estan en un mismo div
	)
};

export default Main;