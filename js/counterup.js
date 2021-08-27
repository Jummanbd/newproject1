
// COUNTER 

var counter1 = new CountUp("counter1", 0, 9525, 0, {  
  useEasing: true,
  useGrouping: true,
  separator: '',
  decimal: '',
  prefix: '',
  
});

  
var counter2 = new CountUp("counter2", 0, 6595,  0, {  
  // useEasing: true,
  // useGrouping: true,
  separator: '',
  decimal: '',
  prefix: '',
  
});

var counter3 = new CountUp("counter3", 0, 8052, 0, {  
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  
});

  
 function  started(){
  counter1.start();
  counter2.start();
  counter3.start();

 }

 function rested(){
  counter1.reset();
  counter2.reset();
  counter3.reset();
  
 }
 
  var waypoint1 = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
  
      if (direction == "up") {
        rested()
      } else {
        started()
      }
  
    },
    offset: '100%'
  });
    
  