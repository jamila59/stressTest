var stressInc = 0;
var stressCop = 0;



$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#health-responses").show();
    $("input:checkbox[name=stress-survey]:checked").each(function(){
      var stress = $(this).val();
      stressInc += 1;
      $('#health-responses').append(stress + "<br>");
    });
    if (stressInc > 3){
      $(".low-stress").show();
    }
    if (stressInc <= 3){
      $(".high-stress").show();
    }
    $("#coping-responses").show();
    $("input:checkbox[name=coping-survey]:checked").each(function(){
      var stressCop = $(this).val();
      $('#coping-responses').append(stressCop + "<br>");
    });
    $("#stress_survey").hide();
  });
});

// $(document).ready(function(){
//   $("form#stress_survey").submit(function(event){
//     event.preventDefault();
//     $("#coping-responses").show();
//     $("input:checkbox[name=coping-survey]:checked").each(function(){
//       var stressCop = $(this).val();
//       $('#coping-responses').append(stressCop + "<br>");
//     });
//   });
// });
// if (stressInc > 3);
// alert("Relax");
//
//
// if (stressInc <= 3);
// alert("Hi");
