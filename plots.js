



var age = [];
var obesity = [];
var state = [];
var st = [];
d3.csv("data.csv").then(function(data) {
    
    data.forEach(function(x) {
        
        
        state.push(x.state)
        age.push(x.age);
        obesity.push(x.obesity);
        st.push(x.abbr);
    });
    var1 = {
        x: age,
        y: obesity,
        text: st,
        
        textposition: 'center',
        textfont : {
            family:'Times New Roman',
            color: 'White'
          },
        mode: 'markers+text',
        type: 'scatter',
        marker: { size: 23,
            opacity: 0.5
                
         },
         hovertemplate: '%{text}' +
         '<br>Obesity: %{y}%<br>' +
         'Avg Age: %{x}',
    };
    
    var data = [var1]

    var layout = {
        title: {
          text:'Obesity and Avg Age',
          font: {
            family: 'Courier New, monospace',
            size: 24
          },
          
          x: 0.05,
        },
        xaxis: {
          title: {
            text: 'Avg Age',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: '% Obese',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        },
        hovermode: "closest",
        hoverlabel: { bgcolor: "#151515" },
      };
    
    Plotly.newPlot('scatter', data, layout)
});

