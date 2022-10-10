import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// WHAT: This variable returns contains the html to render

let age = 12;
let name = 'James';

let output = (
	<span>
		{name} is {age} years old
	</span>
);

// WHERE: A DOM element that will contain the entire react generated html
// const container = document.getElementById('root');

// create a root
// const root = ReactDOM.createRoot(container);

//render app to root
ReactDOM.render(output, document.querySelector('#root'));




