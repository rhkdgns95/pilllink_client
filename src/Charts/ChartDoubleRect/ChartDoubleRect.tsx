import React, { useRef, useEffect, useState } from "react";
import styled from "../../Styles/typed-components";
import { select, selectAll, Selection } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const initialDimensions: IDimensions = {
    width: window.innerWidth,
    height: 600,
    marginLeft: 50,
    paddingTop: 10,
    color: "orange"
};

const useChart = (data: Array<IGenderChartProps>, format: string) => {
    
    const ref = useRef<SVGSVGElement | null>(null);
    const timeRef = useRef<any>(null);

    const [selection, setSelection] = useState<Selection<
        SVGSVGElement | null,
        unknown,
        null,
        undefined> | 
    null>(null);
    
    const [width, setWidth] = useState(window.innerWidth);
    const [dimensions, setDimensions] = useState<IDimensions>(initialDimensions);
    
    const onScreenResize = () => {
        if(timeRef.current) {
            clearTimeout(timeRef.current);
        }
        
        timeRef.current = setTimeout(() => {
            console.log("Current Width: ", width);
            console.log("windowSize: ", window.innerWidth);
            setWidth(prev => window.innerWidth);
        }, 1000);
    }

    useEffect(() => {
        window.addEventListener('resize', onScreenResize); 
        return () => {
            window.removeEventListener('resize', onScreenResize);
        }
    }, []);

    useEffect(() => {
        // 다시 그리도록 한다. x축이 변했으므로.
        // reDrawSelection();
        
        const { innerWidth } = window;
        
        let newDimensionsWidth: number = 300;
        if(innerWidth > 910) { // 데스크탑
            newDimensionsWidth = 900;
        } else if(innerWidth > 700) { // Big 테블릿
            newDimensionsWidth = 600;
        } else if(innerWidth > 510) { // Big 테블릿
            newDimensionsWidth = 470;
        } else if(innerWidth > 410) { // Big 모바일
            newDimensionsWidth = 380;
        } else {

        }
        
        setDimensions({
            ...initialDimensions,
            width: newDimensionsWidth
        });
    }, [width]);

    useEffect(() => {
        reDrawSelection();
    }, [dimensions]);

    const maxValue: number = max(data, d => d.men_units > d.women_units ? d.men_units : d.women_units) || 0; 
    
    const yMen = scaleLinear()
        .domain([0, maxValue])
        .range([dimensions.height, 0]);

    const xMen = scaleBand()
        .domain(data.map(d => d.men_name))
        .range([0, dimensions.width])
        .paddingInner(0.4)
        .paddingOuter(0.4)

    const yWomen = scaleLinear()
        .domain([0, maxValue])
        .range([dimensions.height, 0]);

    const xWomen = scaleBand()
        .domain(data.map(d => d.women_name))
        .range([0, dimensions.width])
        .paddingInner(0.4)
        .paddingOuter(0.4)
        
        
    const yAxis = axisLeft(xWomen)
        .ticks(3)
        .tickFormat(d => `${d} ${format}`)
        

    const xAxisMen = axisBottom(xMen);
    const xAxisWomen = axisBottom(xWomen);
    

    const drawSelection = () => {
        if(selection) {
            console.log('drawSelection');
                
            selection
                .append('g')
                .attr("class", "axis-text")
                .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.paddingTop})`)
                .call(yAxis);
            selection
                .append('g')
                .attr("class", "axis-text")
                .attr('transform', `translate(${dimensions.marginLeft + 50}, ${dimensions.height + dimensions.paddingTop})`)
                .call(xAxisMen);
            selection
                .append('g')
                .attr("class", "axis-text")
                .attr('transform', `translate(${dimensions.marginLeft - 50}, ${dimensions.height + dimensions.paddingTop})`)
                .call(xAxisWomen);

            const rect = selection
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect') // women
                .classed('rect', true)

                rect // women
                .append('rect') // women
                .attr('width', xWomen.bandwidth)
                .attr('height', d => dimensions.height - yWomen(d.women_units))
                .attr('x', d => xWomen(d.women_name)! + dimensions.marginLeft - 50) 
                .attr('y', d => yWomen(d.women_units) + dimensions.paddingTop)
                .attr('fill', d => d.women_color)
            
            
                rect// men
                .append('rect') // men
                .attr('width', xMen.bandwidth) 
                .attr('height', d => dimensions.height - yMen(d.men_units))
                .attr('x', d => xMen(d.men_name)! + dimensions.marginLeft  + 50) 
                .attr('y', d => yMen(d.men_units) + dimensions.paddingTop)
                .attr('fill', d => d.men_color)

            
            
        }
    }   

    const reDrawSelection = () => {
        // if(selection) {
        //     console.log("reDrawSelection");
        //     const y = scaleLinear()
        //         .domain([0, maxValue])
        //         .range([dimensions.height, 0]);

        //     const x = scaleBand()
        //         .domain(data.map(d => d.name))
        //         .range([0, dimensions.width])
        //         .paddingInner(0.4)
        //         .paddingOuter(0.4)

        //     const yAxis = axisLeft(y)
        //         .ticks(3)
        //         .tickFormat(d => `${d} ${format}`);
        
        //     const xAxis = axisBottom(x);

            
        //     const rects = selection.selectAll("rect").data(data);
        //     const groups = selection.selectAll('g').remove();
        //     // const groups = selection.selectAll('g');

        //     rects.exit().remove();

        //     selection
        //         .append('g')
        //         .attr("class", "axis-text")
        //         .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.paddingTop})`)
        //         .call(yAxis);
        //     selection
        //         .append('g')
        //         .attr("class", "axis-text")
        //         .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.height + dimensions.paddingTop})`)
        //         .call(xAxis);

        //     rects
        //     // .enter()
        //     // .append('rect')
        //     .attr('width', x.bandwidth) 
        //     .attr('height', d => dimensions.height - y(d.units))
        //     .attr('x', d => x(d.name)! + dimensions.marginLeft) 
        //     .attr('y', d => y(d.units) + dimensions.paddingTop)
        //     .attr('fill', d => d.color)
        // }
    }
    useEffect(() => {
        if(!selection) {
            setSelection(select(ref.current));
        } else {
            drawSelection();
        }
    }, [selection]);
    
    return {    
        ref,
        dimensions
    };
};

const ChartDoubleRect: React.FC<IGenderChart> = ({data, format}) => {
    
    const { ref, dimensions } = useChart(data, format);

    return (
        <Container>
            <Wrapper>
                <svg ref={ref} width={dimensions.width + 20} height={dimensions.height + 50}>
                    
                    {/* <line/> */}
                    {/* <rect width={1000} height={100} fill="blue"/> */}
                    {/* <circle/> */}
                </svg>
            </Wrapper>
        </Container>
    )
}

export default ChartDoubleRect;