import * as d3 from 'd3';

// C'est ici que vous allez écrire les premières lignes en d3!


   d3.select("body").append("div").attr("class", "svg1").append("svg");
   const svg = d3.select("svg").attr("height", "500").attr("width", "500");

   
svg.append('circle')
.attr("class", "circles circle1")
   .attr("cx", "50")
   .attr("cy", "50")
   .attr("r", "40")
  

   svg.append('circle')
   .attr("class", "circles circle2")
   .attr("cx", "150")
   .attr("cy", "150")
   .attr("r", "40")
   //.attr("fill", "yellow")


   
   svg.append('circle')
   .attr("class", "circles circle3")
   .attr("cx", "250")
   .attr("cy", "250")
   .attr("r", "40");
            


   d3.select(".circle1")
   .attr("cx", "100");
   

   d3.select(".circle2")
   .attr("cx", "200")
   .style("fill", d3.color("blue"));


svg.append("text").text("Text").attr("x", "90").attr("y", "110");
svg.append("text").text("Text").attr("x", "190").attr("y", "210");
svg.append("text").text("Text").attr("x", "240").attr("y", "310");

d3.select(".circle3").on("click", () => {
   
    d3.selectAll(".circles").attr("cx", "50");
    } )
  
    const data = [20, 5, 25, 8, 15];



    svg.selectAll("rect").data(data).enter().append("rect").attr("width", "20").attr("height", d=>d).attr("y", d=>500-d).attr("x", (d,i)=>i*22+30);

  
   
   
