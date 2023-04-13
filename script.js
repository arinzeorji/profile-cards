//the code block below types a certain letters on the scren

// declare text vaiable
const text = 'Meet Our Team Of Experts!';

//declare counter variable
let i = 0;

//code function 
const typing = () => {
    if (i < text.length) {
        document.querySelector('.heading').innerHTML += text.charAt(i);
        i++;

        //call set setTimeout to animate the typing process;
        setTimeout(typing, 475);
        //console.log(text.charAt(i));

    }
}

//call function
typing();