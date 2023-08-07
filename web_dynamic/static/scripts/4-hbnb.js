$(function () {
  $('ul li input[type="checkbox"]').css("margin-right", "10px");
  const myList = [];
  $('ul li input[type="checkbox"]').change(pushList);

  function pushList() {
    const dataId = $(this).data("id");
    const dataName = $(this).data("name");

    if ($(this).prop("checked")) {
      for (let item = 0; item < myList.length; item++) {
        if (myList[item][dataName] === dataId) {
          myList.splice(item, 1);
          break;
        }
      }
      const newItem = {};
      newItem[dataName] = dataId;
      myList.push(newItem);
    } else {
      for (let item = 0; item < myList.length; item++) {
        if (myList[item][dataName] === dataId) {
          myList.splice(item, 1);
          break;
        }
      }
    }
    updatedNames();
  }
  function updatedNames() {
    let names = "";
    for (let item of myList) {
      for (let innerItem in item) names += innerItem + ", ";
    }
    $(".amenities h4").html(names);
  }
  function postApi() {
    $.ajax({
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({})
    }).done(function(data) {
      const placesSection = $('.places');
  
      if (data.length) {
        for (let item of data) {
          const article = $('<article>');
          const titleBox = $('<div class="title_box">');
          const title = $('<h2>').text(item.name);
          const price = $('<div class="price_by_night">').text(`$${item.price_by_night}`);
  
          titleBox.append(title, price);
          article.append(titleBox);
          placesSection.append(article);
        }
      }
    });
  }
  
    postApi();
    $('button').click(function(){
      postApi()
    })
  });
  
//  function postApi(){
//   $.ajax({
//     url: "http://0.0.0.0:5001/api/v1/places_search/",
//     type: 'POST',
//     contentType: 'application/json',
//     data: {}
//   }).done(function(textStatus){
//       if (textStatus.length){
//         for(let item of textStatus)
//         {
//           $(this).createElement('article')
//         }
//       }
//   })};
//   postApi()
