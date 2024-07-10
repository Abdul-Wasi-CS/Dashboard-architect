
        // search input

function mySearch() {
    var x = document.getElementById("search-box");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

        //   profile toggle

  function toggleprofile(){
    let submenu = document.getElementById("sub-menu-wrap");

        submenu.classList.toggle("open-menu");
    };
    function sidebar() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

       //   cards number


let valueDisplays = document.querySelectorAll(".num");
        let interval = 2000;

        valueDisplays.forEach((valueDisplay) =>{
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function (){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue){
              clearInterval(counter);
            }
          }, duration)
        });


             // cards circular

        document.addEventListener("DOMContentLoaded", function (event){
          let circle = document.querySelectorAll('.circle');
          circle.forEach(function(progress){
            let degree = 0;
            var targetDegree = parseInt(progress.getAttribute('data-degree'));
            let color = progress.getAttribute('data-color');
            let  number = progress.querySelector('.number');

            var interval = setInterval(function(){
              degree += 1;
              if(degree > targetDegree){
                clearInterval(interval);
                return;
              }
              progress.style.background = `conic-gradient(${color} ${degree}%, #EBEAEB 0%)`;
              number.innerHTML = degree ;
              number.style.color = color;
            }, 20)
          })
        })


                // Chart Bar

                const canvas = document.getElementById('chart');
                const ctx = canvas.getContext('2d');
                const dpi = window.devicePixelRatio;
                ctx.scale(dpi, dpi);
                
                const data = {
                    labels: ['00January', '02Januray', '03Januray', '04Januray', '05Januray', '06Januray',],
                    values: [400, 500, 420, 650, 250, 410,],
                };
                
                // Set chart dimensions
                const width = canvas.width;
                const height = canvas.height;
                const barWidth = 45;
                const barSpacing = 10;
                const chartStartX = 40;
                const chartStartY = height - 70;
                const chartEndX = width - 50;
                const chartEndY = 50;
                const chartWidth = chartEndX - chartStartX;
                const chartHeight = chartStartY - chartEndY;
                const maxValue = Math.max(...data.values);
                
                // Draw
                ctx.beginPath();
                ctx.moveTo(chartStartX, chartStartY);
                ctx.lineTo(chartEndX, chartStartY);
                ctx.lineTo(chartEndX, chartEndY);
                ctx.stroke();
                
                for (let i = 0; i < data.labels.length; i++) {
                    const x =
                        chartStartX + (barWidth + barSpacing) * i + barSpacing + barWidth / 2;
                    ctx.fillText(data.labels[i], x, chartStartY + 20);
                }
                for (let i = 0; i <= 5; i++) {
                    const y = chartStartY - (chartHeight / 5) * i;
                    ctx.fillText(((maxValue / 5) * i).toFixed(1), chartStartX - 30, y);
                }
                
                // Draw bars
                for (let i = 0; i < data.values.length; i++) {
                    setTimeout(() => {
                        const barHeight = (chartHeight / maxValue) * data.values[i];
                        const x = chartStartX + (barWidth + barSpacing) * i + barSpacing;
                        const y = chartStartY - barHeight;
                
                        // bar color
                        ctx.fillStyle = `rgb(${63},${161},${252})`;
                        ctx.fillRect(x, y, barWidth, barHeight);
                        ctx.fillStyle = '#000';
                        ctx.fillText(data.values[i].toFixed(1), x + barWidth / 2, chartStartY + 20);
                        ctx.fillText(
                            `${data.labels[i]}: ${data.values[i].toFixed(1)}}`,
                            x + barWidth / 2,
                            chartStartY + 40
                        );
                        canvas.style.transition = 'all 1s';
                    }, i * 300);
                }

                // Income-Rounded

                document.addEventListener("DOMContentLoaded", function (event){
                  let income = document.querySelectorAll('.income');
                  income.forEach(function(progress){
                    let degree = 0;
                    var targetDegree = parseInt(progress.getAttribute('data-degree'));
                    let color = progress.getAttribute('data-color');
                    let  incomenumber = progress.querySelector('.income-number');
        
                    var interval = setInterval(function(){
                      degree += 1;
                      if(degree > targetDegree){
                        clearInterval(interval);
                        return;
                      }
                      progress.style.background = `conic-gradient(${color} ${degree}%, #EBEAEB 0%)`;
                      incomenumber.innerHTML = degree ;
                    }, 20)
                  })
                })
                  
                  // incraesing bar

                var counter = 0;
                window.addEventListener("DOMContentLoaded", move=()=>{
                  if(counter == 0){
                    j=1;
                    var elem = document.querySelector(".progress-done");
                    var width = 25;
                    var main = setInterval(frame, 25);
                    function frame() {
                      if(width >= 32){
                        clearInterval(main);
                      }else{
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width + "%";
                      }
                    }
                  }
                });
                
                // animated cards 2nd last

                let countDisplays = document.querySelectorAll(".counter");
        let Interval = 1000;

        countDisplays.forEach((countDisplay) =>{
          let startValue = 0;
          let endValue = parseInt(countDisplay.getAttribute("data-val"));
          let duration = Math.floor(Interval / endValue);
          let counter = setInterval(function (){
            startValue += 1;
            countDisplay.textContent = startValue;
            if (startValue == endValue){
              clearInterval(counter);
            }
          }, duration)
        });
          
        // animated cards small 2nd last

        document.addEventListener("DOMContentLoaded", function (event){
          let circle = document.querySelectorAll('.barry');
          circle.forEach(function(progress){
            let degree = 0;
            var targetDegree = parseInt(progress.getAttribute('data-degree'));
            let color = progress.getAttribute('data-color');
            let  number = progress.querySelector('.nummy');

            var interval = setInterval(function(){
              degree += 1;
              if(degree > targetDegree){
                clearInterval(interval);
                return;
              }
              number.innerHTML = degree ;
              number.style.color = color;
            }, 20)
          })
        })

        // last cards


        var counter = 0;
        window.addEventListener("DOMContentLoaded", move=()=>{
          if(counter == 0){
            j=1;
            var elem = document.querySelector(".progress-donner");
            var width = 25;
            var main = setInterval(frame, 25);
            function frame() {
              if(width >= 32){
                clearInterval(main);
              }else{
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        });
        var counter = 0;
        window.addEventListener("DOMContentLoaded", move=()=>{
          if(counter == 0){
            j=1;
            var elem = document.querySelector(".progress-donny");
            var width = 50;
            var main = setInterval(frame, 50);
            function frame() {
              if(width >= 71){
                clearInterval(main);
              }else{
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        });

        var counter = 0;
        window.addEventListener("DOMContentLoaded", move=()=>{
          if(counter == 0){
            j=1;
            var elem = document.querySelector(".progress-donkar");
            var width = 50;
            var main = setInterval(frame, 50);
            function frame() {
              if(width >= 54){
                clearInterval(main);
              }else{
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        });

        var counter = 0;
        window.addEventListener("DOMContentLoaded", move=()=>{
          if(counter == 0){
            j=1;
            var elem = document.querySelector(".progress-donay");
            var width = 25;
            var main = setInterval(frame, 25);
            function frame() {
              if(width >= 32){
                clearInterval(main);
              }else{
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        });

        var counter = 0;
        window.addEventListener("DOMContentLoaded", move=()=>{
          if(counter == 0){
            j=1;
            var elem = document.querySelector(".progress-donelast");
            var width = 50;
            var main = setInterval(frame, 50);
            function frame() {
              if(width >= 89){
                clearInterval(main);
              }else{
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        });