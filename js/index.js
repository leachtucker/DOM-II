// Code would usually be more consistent with functions and what not, but I am forcing myself to use arrow functions occasionally. (Just to keep on getting familiar with them...)

// 1. Click - Signup Buttons
let buttons = document.querySelectorAll('.destination .btn');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert("Thank you for signing up!");
    });
});

// 2 & 3. mouseenter & mouseleave - Images
let imgs = document.querySelectorAll('img');

imgs.forEach(img => {
    img.addEventListener('mouseenter', function() {
        img.style.opacity = 0.7;
    });
});

imgs.forEach(img => {
    img.addEventListener('mouseleave', function() {
        img.style.opacity = 1;
    });
});

// 4. Header (Nav Bar)
let header = document.querySelector('header');

// User can press Escape to hide the header/nav bar. They can then turn it back on by pressing any key other than Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }
})

// 5. Copy
document.addEventListener('copy', function() {
    alert("You copied content!");
});

document.addEventListener('cut', function() {
    alert("You cut content!");
});

// 6. dblclick - h2 elements
let h2s = document.querySelectorAll('h2');
h2s.forEach(function(h2) {
    h2.addEventListener('dblclick', function() {
        h2.style.letterSpacing = "4px";
    });
});

// 6. load - window
window.addEventListener('load', function() {
    alert("Welcome to Fun Bus!");
});

// 7. resize - window
window.addEventListener('resize', function() {
    document.querySelector('body').style.display = "flex";
});

// 8. Print - window
window.addEventListener('beforeprint', function() {
    console.log('User opened print dialog');
});

// 9. Scrolled - window @ Adjust images
window.addEventListener('scroll', function() {
    // User scrolled
    imgs.forEach(function(img) {
        img.style.height = "300px";
    });
});

// 10. Context Menu - images
imgs.forEach(function(img) {
    img.addEventListener('contextmenu', function() {
        img.style.margin = "15px";

        // Reset img back to normal after the mouse leaves the element
        img.addEventListener('mouseleave', function() {
            img.style.margin = "0";
        });
    });
});