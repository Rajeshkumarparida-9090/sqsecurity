import { useMemo } from "react";
import * as d3 from "d3";


const MARGIN = 30;

const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];
const data = [
    {name:"Mark", value: 90},
    {name:"Robert", value: 12},
    {name:"Emily", value: 34},
    {name:"Marion", value: 53},
    {name:"Nicolas", value: 98},
]

export const PieChart = ({ width, height }) => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
};