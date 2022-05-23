

function sortArray(items, order) {

    let tempArray = [];

    for (let i = 0; i <= order.length; i++) {
        for (let j = 0; j <= items.length; j++) {

            if (items[j] !== undefined && order[i] !== undefined && items[j] === order[i]) {
                tempArray.push(items[j])
            }

        };
    };

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