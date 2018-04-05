//Generate password

(function(){

    function RandomNumbers(limit){
        return Math.floor((Math.random() * 100) % limit);
    }

    function letters(){
        var lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        return lettersArray[RandomNumbers(25)];
    }


    function irreChar(){
        var irregularCharacters = [ "!", "@", "#", "$", "%", "&", "-", "_", "/", "?", "|"];
        return irregularCharacters[RandomNumbers(11)];
    }


    var button = document.querySelector("#button");
    var pTag = document.querySelector(".console");

    button.addEventListener('click', () => {
        var option1 = document.querySelector("#option1").value;
        var option2 = document.querySelector("#option2").value;
        var option3 = document.querySelector("#option3").value;
        var option4 = parseFloat(option1) - (parseFloat(option2) + parseFloat(option3));

        function Gen(num, fn){
            for(var i = 0, argArr = []; i < num; i++) {
                argArr.push(fn());
            }
            return argArr;
        }

        if(option1 <= 2) console.log('please toggle an options');

        else{
            var list1 = Gen(option3, letters).map(function(str){
                return str.toUpperCase();
            });

            var list2 = Gen(option2, irreChar);

            var list3 = Gen(option4, function randomNumber(){
                return Math.floor((Math.random() * 100) % 9);
            });

            var list = list1.concat(list3, list2);
            pTag.innerHTML = list.join("");
        }
    })
})()


