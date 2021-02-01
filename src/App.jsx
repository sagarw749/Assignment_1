




var nameNode = document.getElementById('name');
var component = <h1>Sagar Wankar</h1>; // Simple JSX component
ReactDOM.render(component, nameNode); // Rendering the component inside the content Node

var introNode = document.getElementById('description') 
var component1 = <p>I am a Masters in Computer Science student at San Diego State University. I graduated from my native country in 2016 and have worked as an ASE at Accenture afterwards. I am an avid gamer and you would mostly find me gaming in my free time.</p>;
ReactDOM.render(component1, introNode);

var imageNode = document.getElementById('image');
var component2 = <img src="images/me.jpg" alt="Sagar"/>;
ReactDOM.render(component2, imageNode);

var linkNode = document.getElementById('url');
var component3 = <a href="https://github.com/sagarw749/fullStack">Visit My GITHUB Repository</a>;
ReactDOM.render(component3, linkNode);
