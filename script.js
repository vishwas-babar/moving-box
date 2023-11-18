 let rightbtn = document.getElementsByClassName('right-btn')[0];
 let left_btn = document.getElementsByClassName('left-btn')[0];
 let up_btn = document.getElementsByClassName('up-btn')[0];
 let down_btn = document.getElementsByClassName('down-btn')[0];
 let targetbox = document.getElementsByClassName('box')[0];

 rightbtn.addEventListener("click", moveRight);
 left_btn.addEventListener("click", moveLeft);
 up_btn.addEventListener("click", moveUp);
 down_btn.addEventListener("click", moveDown);



 document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            left_btn.click();
            break;

        case 'ArrowRight':
            rightbtn.click();
            break;

        case 'ArrowUp':
            up_btn.click();
            break;

        case 'ArrowDown':
            down_btn.click();
            break;
    
        default:
            break;
    }
 })


function moveRight() {
    console.log("moving right");
    var initial_value = window.getComputedStyle(targetbox).getPropertyValue('right');
    // console.log(initial_value);
    var desired_value = parseFloat(initial_value)-10;
    // console.log("right value is = " + window.getComputedStyle(targetbox).getPropertyValue('right'));

    if (desired_value>=0) {
        targetbox.style.right = desired_value+'px';
        targetbox.style.left = 'auto';
    }
}

function moveLeft() {
    console.log("moving left");

    var initial_value = window.getComputedStyle(targetbox).getPropertyValue('left');

    var desired_value = parseFloat(initial_value) - 10;

    if (desired_value>=0) {
        targetbox.style.left = desired_value + 'px';
        targetbox.style.right = 'auto';
    }
}

function moveUp() {
    console.log("moving upword");

    var initial_value = window.getComputedStyle(targetbox).getPropertyValue('top');
    
    var desired_value = parseFloat(initial_value)-10;

    if (desired_value >=0) {
        targetbox.style.top = desired_value + 'px';

        targetbox.style.bottom = 'auto';
    }
}

function moveDown() {
    console.log("moving down...");

    var initial_value = window.getComputedStyle(targetbox).getPropertyValue('bottom');

    var desired_value = parseFloat(initial_value) - 10;

    if (desired_value>=0) {
        targetbox.style.bottom = desired_value + 'px';
        
        targetbox.style.top = 'auto';
    }
}

