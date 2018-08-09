// For post

   $("#btn1").click(function () {


       alert("This is me");
      var firstname= $("#firstname").val();
       var lastname=$("#lastname").val();
       var email=$("#email").val();
      var message= $("#message").val();
       var fromValue = JSON.stringify({ "firstname": firstname, "lastname": lastname,"email":email,"message":message});
       console.log(fromValue);
alert("test")
       $.ajax({
         type: "POST",
         url: "http://localhost:3000/api/contects",
         contentType: "application/json",
         data: fromValue,
         error: function () {
           alert("Error");
         },
         success: function () {
           alert("success");
         }
       });

   });
