// Global options

Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';

// Main Traffic

const btnHourly = document.getElementById('btn-hourly');
const btnDaily = document.getElementById('btn-daily');
const btnWeekly = document.getElementById('btn-weekly');
const btnMonthly = document.getElementById('btn-monthly');

let hourly = {
    labels: ['0am','3am','6am','9am','12pm','3pm','6pm','9pm'],
    datasets: [{
        label: 'Traffic' ,
        data: [1200, 700, 1100, 1700, 1600, 1300, 1500, 700],
        backgroundColor: '#E1E2F6',
        borderWidth:1,
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#868ad6',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverBorderWidth: 4,
        pointHoverRadius: 7
    }]
  };


let daily = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: 'Traffic' ,
        data: [1100, 1350, 700, 900, 950, 1400, 1500],
        backgroundColor: '#E1E2F6',
        borderWidth:1,
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#868ad6',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverBorderWidth: 4,
        pointHoverRadius: 7
    }]
  };

let weekly = {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','4-10','11-17','18-24','25-31'],
    datasets: [{
        label: 'Traffic' ,
        data: [750, 1250, 1000, 1500, 1850, 1500, 1750, 1300, 1750, 2250, 1800, 2300],
        backgroundColor: '#E1E2F6',
        borderWidth:1,
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#868ad6',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverBorderWidth: 4,
        pointHoverRadius: 7
    }]
  };


let monthly = {
    labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    datasets: [{
        label: 'Traffic' ,
        data: [830, 900, 700, 860, 920, 950, 1100, 1000, 900, 960, 1030, 1120],
        backgroundColor: '#E1E2F6',
        borderWidth:1,
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#868ad6',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverBorderWidth: 4,
        pointHoverRadius: 7
    }]
  };


let context = document.getElementById('graph').getContext('2d');
let chart = new Chart(context, {
  type: 'line',
  data: hourly,
  options:{
    legend:{
      display:'',
      responsive: true,
      maintainAspectRatio: false
    }
  }
});


// Add event handlers for main-traffic chart buttons

btnHourly.addEventListener('click', ()=> {
  let context1 = document.getElementById('graph').getContext('2d');
  let chart1 = new Chart(context1, {
    type: 'line',
    data: hourly,
    options:{
      legend:{
        display:'',
        responsive: true,
        maintainAspectRatio: false
      }
    }
  })
  });

btnDaily.addEventListener('click', ()=> {
  let context2 = document.getElementById('graph').getContext('2d');
  let chart2 = new Chart(context2, {
    type: 'line',
    data: daily,
    options:{
      legend:{
        display:'',
        responsive: true,
        maintainAspectRatio: false
      }
    }
  })
  });

btnWeekly.addEventListener('click', ()=> {
  let context3 = document.getElementById('graph').getContext('2d');
  let chart3 = new Chart(context3, {
    type: 'line',
    data: weekly,
    options:{
      legend:{
        display:'',
        responsive: true,
        maintainAspectRatio: false
      }
    }
  })
  });

btnMonthly.addEventListener('click', ()=> {
  let context4 = document.getElementById('graph').getContext('2d');
  let chart4 = new Chart(context4, {
    type: 'line',
    data: monthly,
    options:{
      legend:{
        display:'',
        responsive: true,
        maintainAspectRatio: false
      }
    }
  })
  });


// Daily Traffic

let dailyTraffic = document.getElementById('dailyTraffic').getContext('2d');
let dailyTrafficChart = new Chart(dailyTraffic, {
  type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
     labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
     datasets:[{
       label: '# of Traffic',
       data: [
        70, 100, 180, 120, 220, 200, 100
      ],
      backgroundColor:[
        '#7175C1','#7175C1','#7175C1','#7175C1','#7175C1','#7175C1','#7175C1'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor: '#000'
    }]
  },
  options:{
    legend:{
      display:'',
      labels:{
        fontColor:'#000'
      }
    },
    tooltips:{
      enabled: true
    }
  }
});


// Mobile Users

let mobileUsers = document.getElementById('mobileUsers').getContext('2d');
let mobileUsersChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
     labels:['Phones', 'Tablets', 'Desktop'],
     datasets:[{
       label: '# of Mobile Users',
       data: [20,20,100
      ],
      backgroundColor:[
         '#77DAF7','#87DB9F','#7175C1'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor: '#000'
    }]
  },
  options:{
    legend:{
      position:'right',
      display:true,
      labels:{
        fontColor:'#000'
      }
    },
    tooltips:{
      enabled: true
    }
  }
});
