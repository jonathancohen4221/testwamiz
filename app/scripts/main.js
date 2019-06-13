document.addEventListener('DOMContentLoaded', function() {

    /* ---------------LEFT MENU ON MOBILE---------------*/

    let mobileMenu = document.getElementById('settings');
    let asideTag = document.getElementById('left-menu');
    let close = document.getElementById('close');

    mobileMenu.addEventListener('click', function() {
        asideTag.classList.add('visible');
        close.classList.add('visible');
    });

    close.addEventListener('click', function() {
        asideTag.classList.remove('visible');
        close.classList.remove('visible');
    });



    let ul = document.getElementById('left-menu-list');  // Parent

    ul.addEventListener('click', function(e) {
        asideTag.classList.remove('visible');
        close.classList.remove('visible');
    });


    /* ---------------FUNCTION FOR FLIP MAIN SPECIE IMAGE---------------*/

    function change() {
        let img1 = 'http://cohen-jonathan.com/images/beagle.jpg',
            img2 = 'http://cohen-jonathan.com/images/beagle-chiot.jpg';
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


    /* ---------------ACCORDION--------------- */

    let accordionWrapperNode = document.getElementById('specifications');
    let accordionHeadline = accordionWrapperNode.getElementsByTagName('h2');

    function accordionToggle (e) {
        e.preventDefault();
        let accordionContent = this.nextSibling.nextSibling;
        if (accordionContent.classList.contains('hide')) {
            accordionContent.className = '';
        } else {
            accordionContent.className = 'hide';
        }
    }

    for (let i = 0; i < accordionHeadline.length; i++) {
        accordionHeadline[i].addEventListener('click', accordionToggle);
    }

    /* ---------------ASIDE ANCHORS AND ACCORDION--------------- */

    for (let i = 1; i < 6; i++) {
        document.getElementById('menu-'+i).addEventListener('click', function() {
            document.getElementById('spec'+i).classList.remove('hide');
        });
    }


    /* ---------------MENU--------------- */

    function switchMenu(x) {
        x.classList.toggle('change');
    }

    /* ---------------STICKY ADVERTISE--------------- */

    const mq = window.matchMedia( '(min-width: 1330px)' );
    if (mq.matches) {

        let Sticky = (function() {
            'use strict';

            let CSS_CLASS_ACTIVE = 'is-fixed';

            let Sticky = {
                element: null,
                position: 0,
                addEvents: function() {
                    window.addEventListener('scroll', this.onScroll.bind(this));
                },
                init: function(element) {
                    this.element = element;
                    this.addEvents();
                    this.position = element.offsetTop ;
                    this.onScroll();
                },
                aboveScroll: function() {
                    return this.position < window.scrollY;
                },
                onScroll: function(event) {
                    if (this.aboveScroll()) {
                        this.setFixed();
                    } else {
                        this.setStatic();
                    }
                },
                setFixed: function() {
                    this.element.classList.add(CSS_CLASS_ACTIVE);
                    this.element.style.position = 'fixed';
                    this.element.style.top = '40px';
                    this.element.style.right = 0;
                },
                setStatic: function() {
                    this.element.classList.remove(CSS_CLASS_ACTIVE);
                    this.element.style.position = 'relative';
                    this.element.style.top = '203px';
                }
            };

            return Sticky;

        })();


//  Init Sticky
        let sticky = document.querySelector('.advertise');
        if (sticky)
            Sticky.init(sticky);
    }


    /* ---------------FORM--------------- */

    function showForm() {
        let checkBoxes = document.getElementsByClassName( 'newsletterCheckbox' );
        let inputs = document.getElementById('newsletter-inputs');
        let isChecked = false;
        for (let i = 0; i < checkBoxes.length; i++) {
            if ( checkBoxes[i].checked ) {
                isChecked = true;
            };
        };
        if ( isChecked ) {
            inputs.classList.add('visible');
        } else {
            inputs.classList.remove('visible');
        }
    }

    let checkboxes = document.getElementsByClassName( 'newsletterCheckbox' );
    let numCheckboxes= checkboxes.length;

    for (let i = 0; i < numCheckboxes; i++) {
        checkboxes[i].addEventListener('click', showForm, false);
    }
});
