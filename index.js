

function sortArray(items, order) {

    //empty array to store sorted elements
    let tempArray = [];

    //start with the order array to get the first element that we should be matching against
    for (let i = 0; i <= order.length; i++) {
        //loop through the items array to begin matching
        for (let j = 0; j <= items.length; j++) {

            //making sure we skip elements that do not exist due to size difference in array
            if (items[j] !== undefined && order[i] !== undefined && items[j] === order[i]) {
                //and when the item element and order element match, push those to the temp array
                tempArray.push(items[j])
            }

        };
    };

    //result
    return tempArray;


};


function getSortedArray() {
    //using regex to split by multiple seperators - comma and comma + space seperated values.
    const array = document.getElementById('array').value.split(/(?:,| )+/);
    const sortBy = document.getElementById('sortby').value.split(/(?:,| )+/);

    const result = sortArray(array, sortBy);
    
    document.getElementById("result").textContent = result.join(', ');
    document.getElementById("display-result").classList.remove("d-none");
}
