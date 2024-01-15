import React, { useEffect, useMemo } from "react";
import { useAppSelector } from "../../hooks";
import { Chart , ChartOptions, registerables } from 'chart.js';
import { SalesData } from "../../types/product-info";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale'; 

Chart.register(...registerables);

const ProductSales: React.FC = () => {

    const sales = useAppSelector((state) => state.sales);
    const labels = sales.map((data) =>  data.weekEnding);
    const retailSales = sales.map((data) => data.retailSales);
    const wholesaleSales = sales.map((data) => data.wholesaleSales);
    const maxSales: number = Math.max(...retailSales, ...wholesaleSales);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Retail Sales',
                data: retailSales,
                borderColor: '#007bff',
                tension: 0.4,
            },
            {
                label: 'Wholesale Sales',
                data: wholesaleSales,
                borderColor: '#6C757D',
                tension: 0.2,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        elements: {
            point: {
                radius: 3,
            },
        },
        animation: {
            duration: 500,
            easing: 'easeOutQuart',
        },
        scales: {
            x: {
                offset: true,
                border: {
                    display: false,
                },
                grid: {
                    display: false,

                },
                type: 'time',
                adapters: { 
                    date: {
                      locale: enUS, 
                    },
                }, 
                time: {
                    unit: 'month',
                    displayFormats: {
                        month: 'MMM',
                    },
                    tooltipFormat: 'MMM d, yyyy',
                },
                
            },
            y: {
                max: maxSales,
                min: 0,
                offset: true,
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    };
    
        return (
            <div className="sales-container" >
                <Line options={options} data={chartData}  /> 
            </div>
        );
    };
    
export default ProductSales;