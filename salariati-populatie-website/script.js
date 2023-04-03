// Data for the line chart
const lineData = {
    labels: [
        '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001',
        '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
        '2012', '2013', '2014', '2015', '2016', '2017'
    ],
    datasets: [{
        label: 'Number of Employees (Salariati)',
        data: [
            122625, 122255, 129125, 116811, 97499, 95518, 89359, 90415, 88465, 87539,
            92227, 88078, 84586, 87250, 90316, 91854, 83830, 74577, 73983, 77467,
            77320, 79006, 80782, 84208, 89330, 91251
        ],
        borderColor: 'blue',
        borderWidth: 2,
        fill: false
    }]
};

// Data for the bar chart
const barData = {
    labels: [
        'ALBA'
    ],
    datasets: [
        {
            label: 'CENTRU',
            data: [122625, 122255, 129125, 116811, 97499, 95518, 89359, 90415, 88465, 87539,
                   92227, 88078, 84586, 87250, 90316, 91854, 83830, 74577, 73983, 77467,
                   77320, 79006, 80782, 84208, 89330, 91251],
            backgroundColor: 'blue',
            borderWidth: 1
        }
    ]
};

// Data for the stacked area chart
const stackedAreaData = {
    series: [
        {
            name: 'Populatia de varsta activa (18-62 ani)',
            data: [
                247483, 247567, 247865, 248088, 248521, 249027, 249480, 249697, 249600, 249487,
                249706, 250243, 251217, 252563, 254231, 255357, 256374, 255768, 254828, 253493,
                252172, 250119, 248174, 246072, 243853, 241573
            ]
        },
        {
            name: 'Populatia',
            data: [
                418600, 416270, 414916, 412923, 410907, 409016, 407435, 405386, 404004, 402796,
                401298, 400092, 398316, 396777, 395702, 393965, 392640, 391225, 389767, 387895,
                386319, 384712, 383252, 381929, 380418, 378672
            ]
        }
    ],
    chart: {height: 400,
        type: 'area',
        stacked: true
    },
    xaxis: {
    categories: [
    '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001',
    '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017'
    ]
    },
    yaxis: {
    title: {
    text: 'Number of People'
    }
    },
    fill: {
    opacity: 1
    },
    colors: ['#007bff', '#28a745'],
    legend: {
    position: 'top'
    }
    };
    
    // Data for the pie chart
    const pieData = {
    series: [122625, 247483, 418600],
    labels: ['CENTRU', 'Populatia de varsta activa (18-62 ani)', 'Populatia']
    };
    
    // Line Chart
    const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
    type: 'line',
    data: lineData,
    options: {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero: true
    }
    }]
    }
    }
    });
    
    // Bar Chart
    const barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: barData,
    options: {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero: true
    }
    }]
    }
    }
    });
    
    // Stacked Area Chart
    const stackedAreaChart = new ApexCharts(document.getElementById('stackedAreaChart'), stackedAreaData);
    stackedAreaChart.render();
    
    // Pie Chart
    const pieChart = new ApexCharts(document.getElementById('pieChart'), {
    series: pieData.series,
    labels: pieData.labels,
    colors: ['#007bff', '#28a745', '#dc3545'],
    chart: {
    type: 'donut'
    },
    legend: {
    position: 'bottom'
    }
    });
    pieChart.render();        
