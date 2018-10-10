var InputString = [
            'This is First String.',
            'This is Second string.',
            'This is Third String.'
];

window.onload = function(){
    var Parent = document.querySelector('#Output');  // Parent Container

    //----------------------------------------  Create HTML Elements
    var newElement = document.createElement('H1');
    newElement.setAttribute('id', 'Title');
    Parent.appendChild(newElement);

    var newElement = document.createElement('H3');
    newElement.setAttribute('id', 'OriginalTitle');
    Parent.appendChild(newElement);
    var att = document.createAttribute('class');
    att.value = 'OriginalAlert';
    newElement.setAttributeNode(att);

    var newElement = document.createElement('p');
    newElement.setAttribute('id', 'Original');
    Parent.appendChild(newElement);

    var newElement = document.createElement('H2');
    newElement.setAttribute('id', 'Load');
    Parent.appendChild(newElement);
    var att = document.createAttribute('class');
    att.value = 'LoadAlert';
    newElement.setAttributeNode(att);

    var newElement = document.createElement('H3');
    newElement.setAttribute('id', 'ResultTitle');
    Parent.appendChild(newElement);
    var att = document.createAttribute('class');
    att.value = 'ResultAlert';
    newElement.setAttributeNode(att);

    var newElement = document.createElement('p');
    newElement.setAttribute('id', 'Result');
    Parent.appendChild(newElement);

    var original        =   document.querySelector('#Original');
    var originalTitle   =  document.querySelector('#OriginalTitle')
    var result          =   document.querySelector('#Result');
    var resultTitle     =   document.querySelector('#ResultTitle');
    var loadText        =   document.querySelector('#Load');
    var Title           =   document.querySelector('#Title');

    Title.innerHTML = "Assignment 13.1";
    loadText.innerHTML = 'Loading....';
    
    // ----------------------  Promise Function
    function myPromise(str){
        
        var prom = new Promise (function(resolve, reject){
            var n = str.length * 1000; // n in seconds - lenght of the array.
            setTimeout( function(){
                var res = String(str).toUpperCase().split(",");
                console.log("\n Promise function executing after "+ n/1000 + " seconds");
                resultTitle.innerHTML = "Result after converting to upper using Promise function:"
                loadText.parentNode.removeChild(loadText);
                result.innerHTML = res;
                resolve(res);
            }, n );
        });
        
        prom.then(function(str){
            console.log(str);
            return str;
        })
        .catch(function(error){
            consol.log(err);
        })
    }

    originalTitle.innerHTML = 'Original Array:';
    original.innerHTML = InputString + '<hr>';

    console.log("Original Arry of Strings:", InputString);
    myPromise(InputString);
}