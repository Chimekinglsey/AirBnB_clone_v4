$(function() {
    $('ul li input[type="checkbox"]').css("margin-right", '10px');
    const myList = [];
    $('ul li input[type="checkbox"]').change(pushList);

    function pushList(){
        const dataId = $(this).data('id');
        const dataName = $(this).data('name');

        if ($(this).prop('checked'))
        {
            for (let item=0; item <myList.length; item++){
                if(myList[item][dataName] === dataId)
                {
                    myList.splice(item, 1)
                    break;
                }
            }
           const newItem = {};
            newItem[dataName] = dataId;
            myList.push(newItem)
        }
        else{
            for(let item=0; item<myList.length; item++)
            {
                if(myList[item][dataName] === dataId){
                    myList.splice(item, 1)
                    break;
                }
            }
        }
        updatedNames();
    }
function updatedNames(){
    let names = ""
     for (let item of myList)
        {
            for (let innerItem in item) 
                names += innerItem + ", ";
        }
        $('.amenities h4').html(names)
    }
});
