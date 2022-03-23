/* fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



  // This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
.then((response) => response.json())
.then((json) => console.log(json));



// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));


 */
     
  import { json } from 'd3-fetch'
  import * as d3 from 'd3';
  
  d3.select("body").append("div").attr("class","container");
  d3.select(".container").text("Nombre de posts par user : ");

  let post_filtered;
  let tab = [];
let plusLongPost = 0 ;
let idPlusLongPost = 0;
let i = 0;

  Promise.all([
    json('https://jsonplaceholder.typicode.com/posts'),
    json('https://jsonplaceholder.typicode.com/users')
  ])
.then(([post, user])  =>{
//console.log(post, user);
user.forEach(username =>{
  post_filtered = post.filter(post=>post.userId === username.id)
  d3.select(".container").append("p").text(username.name+" : "+post_filtered.length+" posts");
})

post.forEach(body => {
  if (body.body.length>plusLongPost) {
    idPlusLongPost = body.userId;
    plusLongPost = body.body.length;
  }

})


d3.select("body").append("div").attr("class","container2")
d3.select(".container2")
.text("user texte plus long : "+user[idPlusLongPost].name+"avec : "+plusLongPost+" caracteres")


const WIDTH = 500
const HEIGHT = 500

d3.select("body").append("div").attr("class","mon-svg");
d3.select(".mon-svg").append("svg");
const myDiv2 = d3.select("svg").attr("width", WIDTH).attr("height", HEIGHT)

/* It's a loop that find the user with the longest post. */
user.forEach(usr => {
  post_filtered = post.filter(post=>post.userId === usr.id)
  tab[i]= post_filtered.length;
  i++;
})

/* It's a loop that create a rectangle with the number of post of each user. */
const widthRect = 30;
myDiv2.selectAll("rect")
  .data(tab)
  .enter()
  .append("rect")
  .attr('x', (d,i) => (i*40+50))
  .attr('y', d => 300-d*10)
  .attr('width', widthRect)
  .attr('height', d => d*10)
  .attr('stroke', 'none')
  .attr('fill', 'royalblue');

/* It's a loop that create a text with the number of post of each user. */
  var texts = myDiv2.selectAll("text")
    .data(tab)
    .enter()
    .append("text");

  texts
  .attr('x', (d,i) => (i*40+55))
  .attr('y', d => 300+20)
  .text(function(d){ return d});

}); 
