/* FUNCTION FOR FLIP MAIN SPECIE IMAGE*/

function change() {
    let img1 = 'http://localhost:9000/images/beagle.jpg',
        img2 = 'http://localhost:9000/images/beagle-chiot.jpg';
    let txt1 = 'Chiot';
    let txt2 = 'Adulte';

    let imgElement = document.getElementById('img');
    let txtElement = document.getElementById('txt');

    imgElement.src = (imgElement.src === img1) ? img2 : img1;
    txtElement.textContent = (txtElement.textContent === txt1) ? txt2 : txt1;
}

let mainImg = document.getElementById('flip');

mainImg.addEventListener('click', function() {
    change();
});


/* ACCORDION */

var accordionWrapperNode = document.getElementById('specifications');
var accordionHeadline = accordionWrapperNode.getElementsByTagName('h2');

function accordionToggle (e) {
    e.preventDefault();
    var accordionContent = this.nextSibling.nextSibling;
    if (accordionContent.classList.contains('hide')) {
        accordionContent.className = '';
    } else {
        accordionContent.className = 'hide';
    }
}

for (var i = 0; i < accordionHeadline.length; i++) {
    accordionHeadline[i].addEventListener('click', accordionToggle);
}
