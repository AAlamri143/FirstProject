
$(document).ready(function () {

  //==============================
  // Click Search Meal(Left side)
  //==============================
  $("#food-search-button").on("click", function () {
    event.preventDefault();

    // api:
    var searchTerm = $("#food-search").val();
    if (searchTerm.length > 0) {
      $("#drink-video").css("display", "none");
      $("#food-video").css("display", "block");

      var foodQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm;
      $.ajax({
        url: foodQueryURL,
        method: "GET"
      }).then(function (response) {
        $("#food-search").val("");
        if (response.meals !== null) {
          // left side changes:
          $("#food-photo").attr("src", response.meals[0].strMealThumb);
          $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')

          //==============================
          // Click Video Button(Left side)
          //==============================
          var videoID = response.meals[0].strYoutube.split('v=')[1];
          var VideoLink = "https://www.youtube.com/embed/" + videoID

          $(".switch-video").on("click", function () {
            $(".switch-video").empty();
            $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
          })

          // right side changes:
          $("#right-side").css("background-image", "url(#)");
          $("#right-side").css("background-color", "black");
          $("#right-default").hide();
          $("#food-results").empty();
          $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
          $("#food-results").append("</br> Area: " + response.meals[0].strArea);
          $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
          $("#food-results").append("<br> Ingredients:<br>");
          if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
          if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
          if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
          if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
          if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
          if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
          if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
          if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
          if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
          if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
          if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
          if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
          if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
          if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
          if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
          if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
          if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
          if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
          if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
          if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
          $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions);
          // other recommended:
          var recommendURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchTerm;
          $.ajax({
            url: recommendURL,
            method: "GET"
          }).then(function (response) {
            $("#food-recommend").empty();
            if (response.meals.length > 1) {
              $("#food-recommend").html("<br><div>Other Recommendations:</div>")
              for (var i = 0; i < response.meals.length; i++) {
                $("#food-recommend").append("&star; " + response.meals[i].strMeal + "<br>");
              }
            }
          })
        } else {
          $("#food-search").val("");
          blurt("emm...Sorry, I don't know what it is.");
        }
      })
    } else {
      blurt("Do you want to cook something?");
    }
  });

  //==============================
  // Click Random Meal(Left side)
  //==============================
  $("#food-random-button").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();
    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {

      // left side changes:
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')

      //==============================
      // Click Video Button(Left side)
      //==============================
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID

      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions);
    })
  });

  //===========================================↑↑ Food ↑↑=========================================================================================================================
  //===========================================================================↓↓ Drink ↓↓========================================================================================

  //==============================
  // Click Search Drink(right side)
  //==============================
  $("#drink-search-button").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    event.preventDefault();

    searchTerm = $("#drink-search").val();
    if (searchTerm.length > 0) {
      var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm;
      $.ajax({
        url: drinkQueryURL,
        method: "GET"
      }).then(function (response) {
        $("#drink-search").val("");
        if (response.drinks !== null) {
          $("#left-side").css("background-image", "url(#)");
          $("#left-side").css("background-color", "black");
          $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);

          // left side changes:
          $("#left-default").hide();
          $("#drink-results").empty();
          $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
          $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
          $("#drink-results").append("</br> Ingredients:</br>");
          if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
          if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
          if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
          if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
          if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
          if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
          if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
          if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
          if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
          if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
          if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
          if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
          if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
          if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
          if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
          $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
          // other recommended:
          if (response.drinks.length > 1) {
            $("#drink-results").append("<br><div class='wow fadeInLeft'>Recommended:</div>")
            for (var i = 0; i < response.drinks.length; i++) {
              $("#drink-results").append("<div class='wow fadeInLeft'>&star; " + response.drinks[i].strDrink + "<br></div>");
            }
          }
        } else {
          $("#food-search").val("");
          blurt("emm...Sorry, I don't know what it is.");
        }
      });
    } else {
      blurt("Do you want to make something for drink?");
    }
  });

  //==============================
  // Click Random Drink(right side)
  //==============================
  $("#drink-random-button").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  //==============================
  // Click Sample Pictures
  //==============================
  $(".sample-drink").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
  })
  $(".sample-food").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
  })


  //-----------------------------------------------------------------------------
  /////////////// Circle 1 ///////////////
  $(".circle1").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle1").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 2 ///////////////
  $(".circle2").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle2").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 3 ///////////////
  $(".circle3").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle3").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 4 ///////////////
  $(".circle4").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle4").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 5 ///////////////
  $(".circle5").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle5").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 6 ///////////////
  $(".circle6").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle6").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("<br> Instructions: <br> " + response.drinks[0].strInstructions + "<br>");
    });
  });

  /////////////// Circle 7 ///////////////
  $(".circle7").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle7").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  /////////////// Circle 8 ///////////////
  $(".circle8").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle8").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  /////////////// Circle 9 ///////////////
  $(".circle9").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle9").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  /////////////// Circle 10 ///////////////
  $(".circle10").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle10").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });
  //==============================
  // Click back to home button
  //==============================
  $(".home-button").on("click", function () {
    location.reload();
    
  });
    !function(a,b){function c(a){a.keyCode==m.key.ESC&&g()}function d(a){a?(b.addEventListener("keyup",c),q.addEventListener("click",g),o=!0):o&&(b.removeEventListener("keyup",c),q.removeEventListener("click",g))}function e(){b.body.appendChild(p)}function f(b){var c={title:"Title",text:null,type:"info",okButtonText:"OK",escapable:!1};switch(b.length){case 0:return a.console.error("At least 1 argument expected."),null;case 1:if("string"==typeof b[0])c.title=b[0],c.text=null,c.type=null;else if("object"==typeof b[0]){var d=b[0];c.title=d.title||c.title,c.text=d.text||c.text,c.type=d.type||c.type,c.okButtonText=d.okButtonText||c.okButtonText,c.escapable=d.escapable||c.escapable}break;case 2:if("string"!=typeof b[0]||"string"!=typeof b[1])return a.console.error("Invalid argument type."),null;c.title=b[0],c.text=b[1],c.type="default";break;case 3:if("string"!=typeof b[0]||"string"!=typeof b[1]||"string"!=typeof b[2])return a.console.error("Invalid argument type."),null;c.title=b[0],c.text=b[1],c.type=b[2]}return""===c.text&&(c.text=null),c}function g(){m.util.removeClass(r,"dialog-anim-show"),m.util.addClass(r,"dialog-anim-hide"),setTimeout(function(){m.util.setClass(p,m.cls.box),m.util.hide(p),m.util.setClass(r,m.cls.dialog),y.removeEventListener("click",g)},m.constant.hideInterval)}function h(b){var c={title:"Title",text:"Enter value",type:"info",okButtonText:"OK",cancelButtonText:"Cancel",escapable:!1,onConfirm:null,onCancel:null};switch(b.length){case 0:case 1:if("object"!=typeof b[0])return a.console.error("At least 2 arguments or 1 object expected"),null;var d=b[0];c.title=d.title||c.title,c.text=d.text||c.text,c.type=d.type||c.type,c.okButtonText=d.okButtonText||c.okButtonText,c.cancelButtonText=d.cancelButtonText||c.cancelButtonText,c.escapable=d.escapable||c.escapable,d.onConfirm&&"function"==typeof d.onConfirm&&(c.onConfirm=d.onConfirm),d.onCancel&&"function"==typeof d.onCancel&&(c.onCancel=d.onCancel);break;case 2:return"string"==typeof b[0]&&"function"==typeof b[1]?(c.title=b[0],c.onConfirm=b[1],c):(a.console.error("Required: 1st string, 2nd function."),null);case 3:if("string"!=typeof b[0]||"function"!=typeof b[1]||"function"!=typeof b[2])return a.console.error("Required: 1st string, 2nd function and 3rd function."),null;c.title=b[0],c.onConfirm=b[1],c.onCancel=b[2]}return c}function i(){g(),setTimeout(function(){null!==A.onConfirm&&A.onConfirm(v.value)},m.constant.hideInterval),y.removeEventListener("click",j),v.removeEventListener("keydown",j),z.removeEventListener("click",k)}function j(a){return a.target===v?void(a.keyCode==m.key.ENTER&&i()):void i()}function k(){g(),setTimeout(function(){null!==A.onCancel&&A.onCancel()},m.constant.hideInterval),z.removeEventListener("click",k)}function l(a){d(a.escapable),b.body.appendChild(p)}var m=m||{};m.cls={box:"box",overlay:"overlay",dialog:"dialog",header:"header",content:"content",footer:"footer",btn:"btn","default":"default",error:"error",success:"success",warning:"warning",info:"info",hidden:"hidden",prompt:"prompt"},m.constant={hideInterval:200},m.key={ESC:27,ENTER:13},m.nsp="bl-",m.ns=function(a){return m.nsp+a},m.util={hasClass:function(a,b){var c=a.getAttribute("class");if(null===c)return!1;c=c.split(" ");for(var d=0;d<c.length;d++)if(c[d]===m.nsp+b)return!0;return!1},setClass:function(a,b){a.className=m.nsp+b},addClass:function(a,b){if(!m.util.hasClass(a,b)){var c=a.getAttribute("class");c?a.setAttribute("class",c+" "+m.ns(b)):a.className=m.ns(b)}},removeClass:function(a,b){if(m.util.hasClass(a,b)){b=m.ns(b);var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c,"")}},hide:function(a){m.util.addClass(a,m.cls.hidden)},show:function(a){m.util.removeClass(a,m.cls.hidden)},setText:function(a,b){a.innerHTML="";var c=document.createTextNode(b);a.appendChild(c)}};var n=!1,o=!1,p=b.createElement("div"),q=b.createElement("div"),r=b.createElement("div"),s=b.createElement("div"),t=b.createElement("h2"),u=b.createElement("p"),v=b.createElement("input"),w=b.createElement("div"),x=b.createElement("div"),y=b.createElement("button"),z=b.createElement("button");m.util.addClass(p,m.cls.box),m.util.addClass(p,m.cls.info),m.util.addClass(p,m.cls.hidden),m.util.addClass(q,m.cls.overlay),m.util.addClass(r,m.cls.dialog),m.util.addClass(s,m.cls.header),m.util.addClass(w,m.cls.content),m.util.addClass(x,m.cls.footer),m.util.addClass(y,m.cls.btn),m.util.addClass(z,m.cls.btn),m.util.addClass(v,m.cls.prompt),s.appendChild(t),w.appendChild(u),w.appendChild(v),x.appendChild(y),x.appendChild(z),r.appendChild(s),r.appendChild(w),r.appendChild(x),p.appendChild(q),p.appendChild(r),a.blurt=function(){var h=f(arguments);return null===h?void a.console.error("Invalid arguments"):(n||(e(h.escapable),n=!n),d(h.escapable),m.util.setText(t,h.title),m.util.hide(v),m.util.hide(z),null===h.text||""===h.text?m.util.hide(w):"string"==typeof h.text&&(m.util.setText(u,h.text),m.util.show(w),m.util.show(u)),null===h.type||h.type!==m.cls.info&&h.type!==m.cls.success&&h.type!==m.cls.warning&&h.type!==m.cls.error||(m.util.setClass(r,m.cls.dialog),m.util.addClass(r,h.type)),!h.escapable&&o&&b.removeEventListener("keyup",c),m.util.show(p),m.util.addClass(r,"dialog-anim-show"),y.textContent?y.textContent=h.okButtonText:y.innerText=h.okButtonText,y.focus(),void y.addEventListener("click",g))};var A={onConfirm:null,onCancel:null};a.brompt=function(){A={onConfirm:null,onCancel:null};var b=h(arguments);return A.onConfirm=b.onConfirm,A.onCancel=b.onCancel,b?(n||(l(b),n=!n),m.util.show(v),m.util.setText(t,b.title),m.util.hide(u),m.util.setText(y,b.okButtonText),m.util.setText(z,b.cancelButtonText),m.util.show(z),null===b.type||b.type!==m.cls.info&&b.type!==m.cls.success&&b.type!==m.cls.warning&&b.type!==m.cls.error||(m.util.setClass(r,m.cls.dialog),m.util.addClass(r,b.type)),m.util.show(w),m.util.show(p),m.util.addClass(r,"dialog-anim-show"),v.value="",v.focus(),y.addEventListener("click",j),z.addEventListener("click",k),void v.addEventListener("keydown",j)):void a.console.error("Invalid arguments")}}(window,document);

})