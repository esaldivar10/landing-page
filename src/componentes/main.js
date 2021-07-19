import Jumbotron from './jumbotron';
import Card from './card';

const Main = () => {
	return(
		<section className="container">
			<Jumbotron/>

			<div class="container">
			  <div class="row">
			    <div class="col">
			      <Card/>
			    </div>
			    <div class="col">
			      <Card/>
			    </div>
			    <div class="col">
			      <Card/>
			    </div>
			    <div class="col">
			      <Card/>
			    </div>
			  </div>
			</div>
		</section>
	)
};

export default Main;