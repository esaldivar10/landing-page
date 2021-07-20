import React from 'react';

class Jumbotron extends React.Component{

	//Realizamos este montaje para renderizar el clock cada vez que actualice el tiempo.
	//Con esto debemos liberar los recursos del mismo tambien

	//inicializamos el estado
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	// Luego de montar el estado nuevo y de montarlo en la web, marco cada cuanto se refresca
	// esta actualizacion. Y lo guardo en una variable para luego cerrarlo.
	componentDidMount(){
		this.timerID = setInterval(()=> this.tick(), 1000);

	}

	//Desmonto esta actualizacion para que no se sobrecarge en renderizados. es decir, eliminamos el temporalizador.
	componentWillUnmount(){
		clearInterval(this.timerID);
	}


	//creo una funcion que marque el nuevo estado de la variable. y con setState programamos la actualizacion local del componente.
	tick(){
		this.setState({
			date: new Date()
		});
	};

	//Siempre es requerido el metodo render para estas clases
	render(){
	    return (
	        <div class="jumbotron p-3 mb-2 bg-light pb-5 pt-1 px-5">
			  <h1 class="display-4">Hora : {this.state.date.toLocaleTimeString()} </h1>
			  <p class="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam animi nobis, officia sunt. Corporis officia voluptate ipsa numquam vitae, distinctio quod, consectetur sed fuga cupiditate nobis repellendus veritatis rem.		  
			 </p>
			  <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
			</div>
	    )

	}
};

export default Jumbotron;