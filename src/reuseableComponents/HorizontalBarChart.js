import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useMediaQuery } from 'react-responsive';
// import './tooltip.css'
 


const HorizontalBarChart = ({ 
    data,
}) => {
  console.log('from bar chart data', data)
    const svgRef = useRef();
    const tooltipRef = useRef();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1650px)' })
    useEffect(() => {
      const svg = d3.select(svgRef.current);
  
      const containerWidth = svg.node().parentNode.clientWidth - 100;
      const containerHeight = containerWidth * 0.6; // Adjust aspect ratio as needed
      
  
      const margin = { top: isBigScreen ? 0 : 20, right: isBigScreen ? 30 : 80, bottom:isBigScreen ? 0 : 30, left: isBigScreen ? 80 : 80 };
      const width = containerWidth - margin.left - margin.right;
      const height = containerHeight - margin.top - margin.bottom;
      
  
      svg.attr('width', containerWidth)
        .attr('height', containerHeight);
  
      svg.selectAll('*').remove();
  
      const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, width]);
  
      const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1)

       
        const mouseover = function (event, d) {
          console.log(d, event);
          const isPropertyExistInData = data?.every((e) =>{
            return e?.property_name
          })
          const filterData = data?.find((e) =>{
            return e?.name === d
          })
          const tooltipDiv = tooltipRef.current;
          if (tooltipDiv) {
            d3.select(tooltipDiv).transition().duration(200).style("opacity", 0.9);
            d3.select(tooltipDiv)
              .html(isPropertyExistInData ? `<span class="tooltiptext">${filterData?.property_name} - ${d}</span>` : `<span class="tooltiptext">${d}</span>`)
              // TODO: some logic when the tooltip could go out from container
              .style('position', 'absolute')
              .style("left", event.layerX - 60 + "px")
              .style("top", event.layerY - 45 + "px")
              .style('font-size', '12px')
              .style('color', 'white')
              .style('font-family', 'Rubik')
              .style('padding', '5px 5px')
              .style('border-radius', '4px')
              .style('forn-weight', '400')
              .style('background', '#353349')
          }
        };
    
        const mouseout = () => {
          const tooltipDiv = tooltipRef.current;
          if (tooltipDiv) {
            d3.select(tooltipDiv).transition().duration(500).style("opacity", 0);
          }
        };
  
      g.append('g')
        .selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('y', d => y(d.name))
        .attr('width', d => x(d.value))
        .attr('height', y.bandwidth())
        .attr('fill', '#004FE8')
  
      g.append('g')
        .selectAll('.bar-label')
        .data(data)
        .enter().append('text')
        .attr('class', 'bar-label')
        .attr('x', d => x(d.value) + 5) // Adjust the position as per requirement
        .attr('y', d => y(d.name) + y.bandwidth() / 2)
        .attr('dy', '.35em')
        .attr('fill', '#8E8CA3')
        .text(d => Number(d.value).toFixed(2))
        
        
  
      g.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y).tickSize(0))
        .selectAll('text')
        .attr('fill', '#8E8CA3') // Set text color
        .attr('font-family', 'Rubik')
        .attr('font-weight', '400')
        .text(function (d) {
          if(d?.length > 5){
            return d.substring(0,5)+'...';
          }
          else{
            return d;           
          }
                          
      })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

        g.selectAll('.y-axis path')
        .attr('fill', '#8E8CA3')// Set text color
        .attr('stroke-width', '50')
        .attr('stroke', '#8E8CA3') // Set line color
  
    }, [data]);
  
    return (
       <>
         <div className="tooltip relative" ref={tooltipRef} />
          <svg ref={svgRef} width="100%" height="100%">
          </svg>
       </>
    );
  };
  
  export default HorizontalBarChart;