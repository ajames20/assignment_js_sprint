// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
    largestEl: function(input) {
        // your code here
        input.sort;
        return input[input.length - 1];
    },

    reversed: function(input) {
        // your code here
        var char = input.split("");
        var reverse = char.reverse();
        return reverse.join("");
    },

    loudSnakeCase: function(input) {
        // your code here
        var newString = input.toLowerCase();
        var separate = newString.split(/\s+/);

        for (var i = 0; i < separate.length; i++) {
            separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].slice(1);
        }
        separate = separate.join('_');

        return separate.replace(/[^a-z_]/gi, "");
    },

    compareArrays: function(array1, array2) {
        // your code here (replace the return)
        if (array1.length != array2.length) return false;

        for (i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) return false;
        }
        return true;
    },

    fizzBuzz: function(input) {
        // your code here
        var myArray = [];

        for (var i = 1; i <= input; i++) {
            let answer = "";
            if (i % 3 === 0) answer = "FIZZ";
            if (i % 5 === 0) answer += "BUZZ";

            myArray.push(answer || i);
        }
        return myArray;
    },

    myMap: function(array, testFunction) {
        answer = [];

        for (var i = 0; i < array.length; i++) {
            answer.push(testFunction(array[i]));
        }
        return answer;
    },


    primes: function(n) {
        // your code here
        arr = [];
        count = 0;

        for (var j = 2; j <= n; j++) {
            for (var i = 1; i <= j; i++) {
                if (j % i == 0) {
                    count++;
                }
            }
            if (j == 1) {
                arr.push(j);
            }
            if (count == 2) {
                arr.push(j);
            }
            count = 0;
        }
        return arr;
    }
}
