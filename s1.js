var c={
    cars:['BMW','Benz','Audi'],
    clothing:['Shirts','Pants','Jackets'],
    food:['Burgers','Pizzas','Icecreams']
}
var main=document.getElementById('main_menu');
var sub=document.getElementById('sub _menu');
var sub1=document.getElementById('sub _menu1');
//window.alert("hi")
//var dp=sub.options.text;
//window.alert(dp);
//var q=0;
main.addEventListener('change',function(){
    // q++;
    var selected_option=c[this.value];
    
    
    while(sub.options.length>1){
        //window.alert("hi");
        sub.options.remove(1);
    }
    while(sub1.options.length>1){
        //window.alert("hi");
        sub1.options.remove(1);
    }
    
    Array.from(selected_option).forEach(function(el){
        //q++;
        let option=new Option(el,el);
       // window.alert("hi");
        sub.appendChild(option); 
    });
   // q=0;
});
var c1={
    BMW:['BMW_1','BMW_2'],
    Benz:['Benz_1','Benz_2'],
    Audi:['Audi_1','Audi_2'],
    Shirts:['Brand_1','Brand_2'],
    Pants : ['Brand_1','Brand_2'],
    Jackets:['Brand_1','Brand_2'],
    Burgers:['Non-veg','Veg'],
    Pizzas:['pans_pizza','soft_pizza'],
    Icecreams:['neutrilla_browni','villi_vanka']
}

sub.addEventListener('change',function(){
 
    var selected_option1=c1[this.value];
    
    
    while(sub1.options.length>1){
        //window.alert("hi");
        sub1.options.remove(1);
    }
    
    Array.from(selected_option1).forEach(function(el){
        let option=new Option(el,el);
       // window.alert("hi");
        sub1.appendChild(option); 
    });
   
});
sub1.addEventListener('change',function(){
 
    var selected_option1=c1[this.value];
    var a=[[]]
    if(this.value=='BMW_1')
    {
     a=[   ["Sales Per Month", "Month", { role: "style" } ],
        ["january", 89, "#b87333"],
        ["february", 40, "silver"],
        ["march", 13, "gold"],
        ["april", 21, "color: #e5e4e2"]];
    }
    else if(this.value=='BMW_2')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 30, "#b87333"],
        ["february", 10, "silver"],
        ["march", 40, "gold"],
        ["april", 11, "color: #e5e4e2"]];
    }
    else if(this.value=='Benz_1')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 100, "#b87333"],
        ["february", 60, "silver"],
        ["march", 80, "gold"],
        ["april", 75, "color: #e5e4e2"]];
    }
    else if(this.value=='Bnez_2')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 120, "#b87333"],
        ["february", 100, "silver"],
        ["march", 180, "gold"],
        ["april", 175, "color: #e5e4e2"]];
    }
    else if(this.value=='Audi_1')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 40, "#b87333"],
        ["february", 10, "silver"],
        ["march", 19, "gold"],
        ["april", 17, "color: #e5e4e2"]];
    }
    else if(this.value=='Audi_2')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 38, "#b87333"],
        ["february", 10, "silver"],
        ["march", 29, "gold"],
        ["april", 17, "color: #e5e4e2"]];
    }
    else if(this.value=='Brand_1')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 20000, "#b87333"],
        ["february", 10000, "silver"],
        ["march", 29000, "gold"],
        ["april", 11000, "color: #e5e4e2"]];
    }
    else if(this.value=='Brand_2')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 25000, "#b87333"],
        ["february", 9000, "silver"],
        ["march", 21000, "gold"],
        ["april", 18000, "color: #e5e4e2"]];
    }
    else if(this.value=='Brand_1')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 31000, "#b87333"],
        ["february", 19000, "silver"],
        ["march", 21000, "gold"],
        ["april", 19000, "color: #e5e4e2"]];
    }
    else if(this.value=='Brand_2')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 30000, "#b87333"],
        ["february", 20000, "silver"],
        ["march", 23000, "gold"],
        ["april", 17000, "color: #e5e4e2"]];
    }
    else if(this.value=='Brand_1')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 4000, "#b87333"],
        ["february", 1000, "silver"],
        ["march", 2300, "gold"],
        ["april", 2700, "color: #e5e4e2"]];
    }
    else if(this.value=='Brand_2')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 5000, "#b87333"],
        ["february", 1000, "silver"],
        ["march", 2300, "gold"],
        ["april", 2800, "color: #e5e4e2"]];
    }
    else if(this.value=='Non-Veg')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 50000, "#b87333"],
        ["february", 100000, "silver"],
        ["march", 230000, "gold"],
        ["april", 230078, "color: #e5e4e2"]];
    }
    else if(this.value=='Veg')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 70000, "#b87333"],
        ["february", 100000, "silver"],
        ["march", 260000, "gold"],
        ["april", 230078, "color: #e5e4e2"]];
    }
    else if(this.value=='pans_pizza')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 5600, "#b87333"],
        ["february", 6000, "silver"],
        ["march", 2600, "gold"],
        ["april", 20078, "color: #e5e4e2"]];
    }
    else if(this.value=='soft_pizza')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 680, "#b87333"],
        ["february", 600, "silver"],
        ["march", 2600, "gold"],
        ["april", 2078, "color: #e5e4e2"]];
    }
    else if(this.value=='neutrilla_browni')
    {
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 6800, "#b87333"],
        ["february", 6100, "silver"],
        ["march", 8900, "gold"],
        ["april", 9078, "color: #e5e4e2"]];
    }
    else{
        a=[   ["Months", "sales per month", { role: "style" } ],
        ["january", 6800, "#b87333"],
        ["february", 6100, "silver"],
        ["march", 8900, "gold"],
        ["april", 9078, "color: #e5e4e2"]];
    }
    

    google.charts.load("current", {packages:["bar"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(a);
      var options = {
        width: 1300,
        height: 400,
        axes: {
            x: {
              0: { side: 'bottom', label: 'Months'}
            },
            y: {
              0: { side: 'bottom', label: 'Sales'}
            }
          },
        bar: {groupWidth: "50%"},
        legend: { position: "none" },
      };
      var chart = new google.charts.Bar(document.getElementById("barchart_values"));
      chart.draw(data, google.charts.Bar.convertOptions(options));
  }
  }
 
  
);
