
var ctx = document.getElementById('myChart').getContext('2d');
var monthly = document.getElementById('monthly').getContext('2d');
var yearly = document.getElementById('yearly').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',

    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Weekly',
             data: [6000, 2000, 3500, 4500, 2500, 5600, 4500],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            
        }]
    },
    options: {
        responsive: true,
    }
});

var monthly = new Chart(monthly, {
    type: 'bar',
    data :{
        labels:[ 'january', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', ' September', 'October',
                    'November', 'December'
    ],
        datasets: [{
            label: 'Monthly',
            data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 4560, 2350, 3454, 2353, 8450],
            backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255,1)',
            'rgba(201, 203, 207,1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255,1)',
            'rgba(201, 203, 207,1)'
            ],
           
        }]
    },
    options: {
        responsive: true,
    }
});
var yearly = new Chart(yearly, {
    type: 'doughnut',
    data :{
        labels:[ '2011', '2013', '2015', '2017', '2019', '2021', '2023'],
        datasets: [{
            label: 'Total Profit',
            data: [65000, 59000, 80000, 81000, 56000, 55000, 40005, 45600, 23500, 34545, 23534, 84500],
            backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255,1)',
            'rgba(201, 203, 207,1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255,1)',
            'rgba(201, 203, 207,1)'
            ],
           
        }]
    },
    options: {
        responsive: true,
    }
});
