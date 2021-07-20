const Card = (props) => {

	console.log(props);

	return (
		<div class="card" style={{width: '18rem'}}>
		  <img src={props.url} class="card-img-top" alt="#"/>
		  <div class="card-body">
		    <h5 class="card-title">Card title</h5>
		    <p class="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae voluptatum magni.</p>
		    <a href="#" class="btn btn-primary">Find out more!</a>
		  </div>
		</div>
    	
	);
};

export default Card;