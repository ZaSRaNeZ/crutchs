/*----------------  Отображение дублей при импорте  -------------------*/



var s = document.getElementsByClassName('_override-target__fake-value')

var dub = [];

function unique(uArr) { // Честно стырил функцию на просторах инета =З
    var obj = {};

    for (var i = 0; i < uArr.length; i++) {
        var str = uArr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

for (var i = 0; i < s.length; i++) {

    for (var l = 0; l < s.length; l++) {

        if (i != l) {

            if (s[i].innerHTML == s[l].innerHTML && s[i].innerHTML != ' не импортировать ') {

                dub.push(s[i].innerHTML);
                s[i].style = "color: red; font-size:1.5em;";

            }

        }
    }
}



alert(unique(dub));



/*----------------   КОНЕЦ!!!!       Отображение дублей при импорте  -------------------*/






/*------ вытащить все параметры -----*/

var s = document.getElementsByTagName('param');
var r = [];
var text = '';

function spaceDelete(str) {

    return str.replace(/(^\s+|\s+$)/g, '');

}


function unique(uArr) { // Честно стырил функцию на просторах инета =З
    var obj = {};

    for (var i = 0; i < uArr.length; i++) {
        var str = uArr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}


for (let i = 0; i < s.length; i++) {

    r.push(spaceDelete(s[i].getAttribute('name').toLowerCase()));

}
r = unique(r);

for (let i = 0; i < r.length; i++) {

    text += r[i] + '\n';

}

console.log(text);








/*------ вытащить все параметры v2 -----*/




Array.prototype.lastIndex = function(what) {
    var L = this.length;
    while (L) {
        if (this[--L] === what) return L;
    }
    return -1;
}
Array.prototype.remove = function(arg) {
    var what, L = arg.length,
        ax;
    while (L && this.length) {
        what = arg[--L];
        while ((ax = this.lastIndex(what)) != -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}




var s = document.getElementsByTagName('param');
var r = [];
var rStr = [];
var text = '';

function spaceDelete(str) {

    return str.replace(/(^\s+|\s+$)/g, '');

}

function unique(uArr) { // Честно стырил функцию на просторах инета =З
    var obj = {};

    for (var i = 0; i < uArr.length; i++) {
        var str = uArr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

for (let i = 0; i < s.length; i++) {

    if (s[i].innerHTML.length < 50) {

        r.push(spaceDelete(s[i].getAttribute('name').toLowerCase()));

    } else {

        rStr.push(spaceDelete(s[i].getAttribute('name').toLowerCase()));
    }
}

r = unique(r);
rStr = unique(rStr);

r = r.remove(rStr);

text = 'ВЫБОР ИЗ СПИСКА \n\n'

for (let i = 0; i < r.length; i++) {

    text += r[i] + '\n';

}

if (rStr.length > 0) {

    text += '\n\n СТРОКА \n\n';

    for (let i = 0; i < rStr.length; i++) {

        text += rStr[i] + '\n';

    }

}

console.log(text);









/*----------------- закинуть значения в справочники  ---------------*/



var qwe = "var s = document.getElementsByClassName('comment'); for (let i = 0; i<s.length; i++){ if( s[i].innerText.indexOf('(ua)') != -1){ s[i].style.color = 'green'; var par = s[i].parentNode.parentNode; break;}}; var b = par.getElementsByClassName('j-lang-main'); b[0].value = 'work'; "

chrome.tabs.executeScript({
    code: qwe
})









sqlText += "ALTER TABLE h_product_characteristics \n ADD `" + xEn + "` varchar(255) NOT NULL; \n INSERT INTO handlers_format (`parent`, `type`, `name`, `title`, `sortorder`, `group`, `localize`) \n VALUES ((SELECT id FROM handlers WHERE `table` = 'h_product_characteristics' LIMIT 1),'" + characType + "','" + xEn + "','" + x[ind] + "','1',(SELECT id FROM handlers_format_group \n WHERE `sortorder` = '1' AND `parent` = (SELECT id FROM handlers WHERE `table` = 'h_product_characteristics') LIMIT 1),	'1'	);\n\n "

if (characType == 'select') {


    sqlText += "SELECT CONCAT ('book_',(SELECT max(id)+1 FROM books)) INTO @name; SET @query = CONCAT('CREATE TABLE ', @name, '(`id` int(11) NOT NULL, `i18n_language` int(11) NOT NULL DEFAULT '1', `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL, `sortorder` int(11) NOT NULL) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci' ); PREPARE stmt from @query; EXECUTE stmt; DEALLOCATE PREPARE stmt;'; \n\n"

}




SELECT CONCAT('book_', (SELECT max(id) + 1 FROM books)) INTO @name;
SET @query = CONCAT("CREATE TABLE ", @name, "(`id` int(11) NOT NULL, `i18n_language` int(11) NOT NULL DEFAULT '1', `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL, `sortorder` int(11) NOT NULL) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");
PREPARE stmt from @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;









/*-------------- Расстановка категорий товаров для OpenCart -------------*/


<
!DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    title > Document < /title> <
    /head> <
    body >




    <
    script >


    var base = [];
var x = [];
var out = '';
var buf = '';



function textSlice(elId) {
    var rArr = [];
    var rArr = document.getElementById(elId).value.split('\n');

    return rArr;
}

function testElement(el, base) {

    for (var i = 0; i < base.length; i++) {
        if (base[i][0] == el && base[i][1] != 0) {

            return base[i][1];

        }

        if (base[i][0] == el) {
            return base[i][1];
        }
    }



}


function findElName(el, base) {

    for (var i = 0; i < base.length; i++) {
        if (base[i][0] == el) {

            return base[i][2];

        }
    }

}





function start() {


    var base = textSlice('baseIn')
    var x = textSlice('input');
    var out = '';
    var buf = '';

    for (let i = 0; i < base.length; i++) {

        base[i] = base[i].split('&');
    }

    for (let i = 0; i < x.length; i++) {

        x[i] = x[i].split(';');

        for (let l = 0; l < x[i].length; l++) {

            if (l == 0) {

                out += findElName(x[i][l], base);
            } else {

                if (testElement(x[i][l], base) != 0) {
                    out += '/' + findElName(x[i][l], base);
                } else {

                    out += ';' + findElName(x[i][l], base);
                }

            }




        }
        out += '\n';



    }









    document.getElementById('input').value = out;









}


<
/script>




<
textarea name = ""
id = "input"
cols = "30"
rows = "10" > < /textarea> <
    textarea name = ""
id = "baseIn"
cols = "30"
rows = "10" > < /textarea>

<
button id = "start"
onclick = "start()" > push on the button < /button>





<
/body> <
/html>


/*--------Конец ---------------*/




/*--------------- Масив категорий -------------*/




var catList = [];
var cat = document.getElementsByTagName('category');

/*   ctegory massive create  */

function addToList(ID) {
    var childList = [];


    for (let i = 0; i < cat.length; i++) {

        if (cat[i].getAttribute('parentId') == ID) {

            childList.push(cat[i].id);
        }
    }

    for (let i = 0; i < childList.length; i++) {

        catList[catList.length - 1].push(childList[i]);
        addToList(childList[i]);
    }
}

for (let i = 0; i < cat.length; i++) {

    if (cat[i].getAttribute('parentId') == null) {

        catList.push([cat[i].innerHTML]);
        catList[catList.length - 1].push(cat[i].id);
        addToList(cat[i].id)
    }
}

console.log(catList)







/*------------- фиксированое меню ---------------*/



(function(){

var catalogMenu = $('.header__bottom')[0];
var catalogMenuSourceTop = catalogMenu.getBoundingClientRect().top + window.pageYOffset;
console.log(catalogMenuSourceTop);
window.onscroll = function() {

    if (catalogMenu.classList.contains('fixed') && window.pageYOffset < catalogMenuSourceTop) {
        catalogMenu.classList.remove('fixed');
    } else if (window.pageYOffset > catalogMenuSourceTop) {
        catalogMenu.classList.add('fixed');
    }
};

})()
/*---------- css



.header__bottom.fixed{
    position:fixed;
    width:100%;
    z-index:9999;
}
.header{
    min-height: 176px;
}

aside.j-catalog-sticker-column, .catalog__middle-col.catalog__middle-col--content.catalog__middle-col--shifted-right {
    margin-top: 28px;
}



*/
/*----------------- END*/




/*---------------------- Leave Message -------------------*/

onmousemove = function(val) {

    let LeaveMessageBlock = document.createElement('div');
    let LeaveMessageBlock_close = document.createElement('div');

    LeaveMessageBlock.id = 'LeaveMessageBlock';

    LeaveMessageBlock_close.id = 'LeaveMessageBlock_close';
    LeaveMessageBlock.appendChild(LeaveMessageBlock_close);

    if (val.clientY < 10 && !localStorage.getItem('LeaveMessage')) {
        prompt('ну куда же ты?');
        console.log(1);
        localStorage.setItem('LeaveMessage', true);
        document.body.appendChild(LeaveMessageBlock);
    }

    LeaveMessageBlock_close.addEventListener('click', function() {

        $('#LeaveMessageBlock').remove();

    });
}






/*

div#LeaveMessageBlock {
    width: 40vw;
    height: 300px;
    position: fixed;
    z-index: 999;
    background: #fff;
    top: calc(50% - 150px);
    left: calc(50% - 20vw);
    box-shadow: 0 0 500px #0006;
}

div#LeaveMessageBlock_close {

}
*/









/*---------------  Поиск по фильтру  --------------------*/

(function(){

$('.filter-section-h').after('<input class="filterInput" placeholder="Поиск по фильтру" type="text">');

$('.filterInput').keyup(
    function() {
        var filter = this.value.toUpperCase();
        var list = this.parentNode;
        list = list.getElementsByClassName('filter-lv1-i');
        for (var i = 0; i < list.length; i++) {
            var listEl = list[i].innerText;
            if (listEl.toUpperCase().indexOf(filter) > -1) {
                var found = true;
            }
            if (found) {
                list[i].classList.add('match');
                list[i].classList.remove('Notmatch');
            } else {
                list[i].classList.add('Notmatch');
                list[i].classList.remove('match');
            }
            found = false;

        }
    }

)

})()

/*---------------CSS
li.filter-lv1-i.Notmatch {
    display: none;
}
input.filterInput {
    padding: 4px;
    border: 1px solid #d2d2d2;
        height: 32px;
    padding-left: 12px;
    padding-right: 12px;
    width: 95%;
        margin-bottom: 15px;
        transition:0.4s all;
}

input.filterInput:hover{
border-color: #a6a5a5;
    box-shadow: 0px 0px 10px #00000061;
}

*/

/*------- V2 <С выбором характеристики> -----*/




function createFilterSerach (){

var langText =  window.location.href.indexOf('/ua/') + 1 ? 'Пошук по фільтру' : 'Поиск по фильтру';


$('.filter-section-h').each(function(){

    if($(this).text().trim() == 'Бренд' || $(this).text().trim() == 'Бренд'){
        $(this).after(`<input class="filterInput" placeholder= "${langText}" type="text">`);
    }

}


    )

$('.filterInput').keyup(
    function() {
        var filter = this.value.toUpperCase();
        var list = this.parentNode;
        list = list.getElementsByClassName('filter-lv1-i');
        for (var i = 0; i < list.length; i++) {
            var listEl = list[i].innerText;
            if (listEl.toUpperCase().indexOf(filter) > -1) {
                var found = true;
            }
            if (found) {
                list[i].classList.add('match');
                list[i].classList.remove('Notmatch');
            } else {
                list[i].classList.add('Notmatch');
                list[i].classList.remove('match');
            }
            found = false;

        }
    }

)
};


createFilterSerach();

CatalogBuilder.attachEventHandler('onChange', function() {createFilterSerach();})







/*------ Суб меню каталога напротив основного -------*/

$(window).load(function(){
    var headerHeight = $('.header').height();
$('li.productsMenu-tabs-list__tab').mouseover(function(){

    let SubMenuTop = 0;
    SubMenuTop =
        $('li.productsMenu-tabs-list__tab.__hover')[0] === undefined ?
        SubMenuTop :
        $('li.productsMenu-tabs-list__tab.__hover')[0].getBoundingClientRect().top + window.pageYOffset - headerHeight;

    let SubMenuHeight = $('.productsMenu-tabs-content .productsMenu-submenu-w.__visible').height() + 50;
    $('div.productsMenu-tabs-content').css({
    
    'position':'relative',
    'top': SubMenuTop,
    'height': SubMenuHeight
    
    })

})
});






/*  ---------- CSS

.productsMenu-submenu.__fluidGrid.__smallIcons.__hasTabs.__pos_left.__visible {
    overflow: visible;
}


.productsMenu-tabs, .productsMenu-tabs-switch, .productsMenu-tabs-list {
    width: 300px;
}



*/






/*------------ Печать Заказа -----------*/

function printInfo(ele) {
    var openWindow = window.open("", "title", "attributes");
    openWindow.document.write(ele.innerHTML);
    openWindow.document.close();
    openWindow.focus();
    openWindow.print();
    openWindow.close();
}


var prinDiv = document.createElement('div');
prinDiv.innerHTML = '<table>'

var order = $('section.order')[0];
$(order).find('img').each(function(ind,el){

    this.src = this.src


});
var totalIndex = $(order).find('li.order-i').length;
$(order).find('li.order-i').each(function(ind,el){
prinDiv.innerHTML += '<tr>'
    $(this).find('div').each(function(ind,el){
        
        prinDiv.innerHTML += '<td>'+this.innerHTML+'</td>';

    })
prinDiv.innerHTML += '</tr>'

if (totalIndex == ind) {

    prinDiv.innerHTML += '</table>';
}
 

})

prinDiv



printInfo(prinDiv);


/*------------ подсчет по характеристике -----------*/


var features = document.querySelectorAll('tr.product-features__row');
var calcFeature = 0;
$('.j-product-card-quantity').after('<div class="j-product-card-SM" style="position:absolute">M<sup><small>2</small></sup>:<span id="j-product-card-SM_calculated" class="j-product-card-SM_calculated"><span></div>');

function calculateSquare(){
    for(let i = 0; i<features.length; i++){
        if(features[i].getElementsByClassName('product-features__cell--h')[0].innerHTML.trim() == 'м2/уп'){
        calcFeature = parseFloat(features[i].getElementsByClassName('product-features__cell')[1].innerHTML);
        break;
        };
    };
    var result = parseInt($('input.counter-field.j-product-counter')[0].value) * calcFeature;
    result = result.toFixed(2);

    if(isNaN(result)){
        result = 0
    }
        document.getElementById('j-product-card-SM_calculated').innerHTML = result;
    
}

$('input.counter-field.j-product-counter').on('input',calculateSquare);
$('a.counter-btn.__plus, a.counter-btn.__minus').click(calculateSquare);

calculateSquare();






/*-------------  Цена договорная  ---------------*/


    var a = document.getElementsByClassName('catalogCard-price');
    var b = document.getElementsByClassName('product-price__item');

function priceChange (){

    if(b.length > 0){

         for (var i = 0; i < b.length; i++) {

            if (b[i].innerText == '0 грн') {
                b[i].innerHTML = 'цена договорная';
                let buyButton = document.getElementsByClassName('product-order__block product-order__block--buy');
                for (var i = 0; i < buyButton.length ; i++) {
                    buyButton[i].style = 'display:none'
                }
            }
        };
    }
    
    else{

        for (var i = 0; i < a.length; i++) {

            if (a[i].innerHTML == '0 грн') {
                a[i].innerHTML = 'цена договорная';
                a[i].style.fontSize = '1em';
            }
        };
    }

}
priceChange();

let timerId = setInterval(function() {
priceChange ()
}, 2000);



/*  ----------  Кнопка в моб версии для перехода в каталог

Кнопка появляеться после первого баннера на сайте
*/


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var newNode = document.createElement('div');
newNode.id = 'mobile_catopen';
newNode.innerHTML = '<a href="/katalog/" title="Перейти в каталог аксессуаров"> Каталог </a>'

var refNode = $('.banners-group')[0];


insertAfter(newNode, refNode);

/* ------- CSS

#mobile_catopen {
    width: 100%;
    margin: 35px 0 -15px;
    display: flex;
    justify-content: center;
}
#mobile_catopen a {
    display: block;
    width: 90%;
    background: #fcc504;
    border-radius: 4px;
    color: #fff;
    font-size: 22px;
    line-height: 45px;
    border-bottom: 4px solid #dfae04;
    text-align: center;
}




*/

/*----------- Мин кол-во единиц ------------*/

var featuresQuant = document.querySelectorAll('tr.product-features__row'); 
for(let i = 0; i<featuresQuant.length; i++){
        if(featuresQuant[i].getElementsByClassName('product-features__cell--h')[0].innerHTML.trim() == 'Количество в упаковке'){
        var quant = parseFloat(featuresQuant[i].getElementsByClassName('product-features__cell')[1].innerHTML);
        for(let j = 0; j<quant - 1; j++){
            $('a.counter-btn.__plus.j-product-increase').click();
        }
        $('a.counter-btn.__minus.j-product-decrease').addClass( "__disabled" );
        break;
        };
    };


    $('a.counter-btn.__minus.j-product-decrease, a.counter-btn.__plus.j-product-increase').click(function(){

if(parseFloat($('.btn.__special.j-buy-button-add.j-ignore')[0].getAttribute('data-quantity')) <= quant){

    $('a.counter-btn.__minus.j-product-decrease').addClass( "__disabled" );

}
else{
    $('a.counter-btn.__minus.j-product-decrease').removeClass( "__disabled" );
}
});

    

 /*------   style

a.counter-btn.__minus.j-product-decrease.__disabled{
    pointer-events:none;
}
input.counter-field.j-product-counter {
    pointer-events: none;
}




*/



/*-------- Добавление кастомного наполнения из характеристик -------------*/


<p>Гарантия от производителя <span id="customText">12 мес</span></p>

<p><script>
var features = document.querySelectorAll('tr.product-features__row');
 for(let i = 0; i<features.length; i++){
        if(features[i].getElementsByClassName('product-features__cell--h')[0].innerHTML.trim() == 'Гарантія' || features[i].getElementsByClassName('product-features__cell--h')[0].innerHTML.trim() == 'Гарантия'){
        document.getElementById('customText').innerHTML = features[i].getElementsByClassName('product-features__cell')[1].innerHTML.trim();
        break;
        };
    };
</script>

</p>


/*----------- Сделать блок в характеристиках  ---------*/

var featuresStyle = document.querySelectorAll('tr.product-features__row'); 
for(let i = 0; i<featuresStyle.length; i++){
        let featureBuf =  featuresStyle[i].getElementsByClassName('product-features__cell--h')[0];
        if( featureBuf.innerHTML.trim() == 'Комплектация'){
                featureBuf.style= "    vertical-align: top;font-size: 1.2em;font-weight: 700;color: #000;"
        }
    };





/*--------- минимальное количество заказа --------*/

(function() {
    var updateCounter = function() {
        var featuresQuant = document.querySelectorAll('tr.product-features__row'); 
        for(let i = 0; i<featuresQuant.length; i++){
                if(featuresQuant[i].getElementsByClassName('product-features__cell--h')[0].innerHTML.trim() == 'Количество в упаковке'){
                var quant = parseFloat(featuresQuant[i].getElementsByClassName('product-features__cell')[1].innerHTML);
                for(let j = 0; j<quant - 1; j++){
                    $('a.counter-btn.__plus.j-product-increase').click();
                }
                $('a.counter-btn.__minus.j-product-decrease').addClass( "__disabled" );
                break;
                };
            };


            $('a.counter-btn.__minus.j-product-decrease, a.counter-btn.__plus.j-product-increase').click(function(){

        if(parseFloat($('.btn.__special.j-buy-button-add.j-ignore')[0].getAttribute('data-quantity')) <= quant){

            $('a.counter-btn.__minus.j-product-decrease').addClass( "__disabled" );

        }
        else{
            $('a.counter-btn.__minus.j-product-decrease').removeClass( "__disabled" );
        }
        });

            $('span.selectboxit-container.selectboxit-container.select').click(function(){

        if(parseFloat($('.btn.__special.j-buy-button-add.j-ignore')[0].getAttribute('data-quantity')) <= quant){

            $('a.counter-btn.__minus.j-product-decrease').addClass( "__disabled" );

        }
        else{
            $('a.counter-btn.__minus.j-product-decrease').removeClass( "__disabled" );
        }
        console.log('ul click')

        });
    }
    updateCounter();
    ModificationChange.getInstance() && ModificationChange.getInstance().attachEventHandlers({
        'onAfterAppendHtml': function (status, response) {
            updateCounter();
        }
    });

})()




/*-------- Кнопка бренда -----------*/

(function(){


var langText =  window.location.href.indexOf('/ua/') + 1 ? 'Більше товарів цього бренду' : 'Больше товаров этого бренда';

try{
    
    var brandLogo = document.querySelector('.j-product-logo').cloneNode(true);
    var brandLogoHrefText = document.createElement('span');
    brandLogoHrefText.style="margin-left: 25px;font-size: 16px;font-weight: 600;";
    brandLogoHrefText.innerHTML =langText;
    brandLogo.childNodes[1].after(brandLogoHrefText);
    brandLogo.style ='left: 0;top: 0;position: relative;';
    brandLogo.classList.remove('j-product-logo');
    var moreThatBrandButton = document.createElement('div');
    moreThatBrandButton.style = "position:relative; height: 65px;border: 1px solid #ebc35b82;"
    moreThatBrandButton.classList.add('product__column-item', 'product__group');
    moreThatBrandButton.append(brandLogo);
    document.querySelector('.j-product-right-column').childNodes[1].after(moreThatBrandButton);

}
catch (e){
    console.log('Create brand button only on page');
}



})();



/*----------- input для моб версии ---------*/


const cartInputChange = () => {

$('input.j-quantity-p').each(function(){
$(this).css("display","block");
});
$('.select').each(function(){
    $(this).css("display","none");
})
};

window.onload = function(){
cartInputChange();
    
}

$('a[href="#cart"]').click(function(){
    cartInputChange();
})
$('.j-remove-p').click(function(){
cartInputChange();
})



/*-------- Убрать кнопку для статусов
 statusCheck == 'Отпускается с рецептом' || statusCheck == 'Відпускаєтся з рецептом' --------*/


(function(){
const statusCheck = $('.product-header__availability').text().trim();
console.log(statusCheck)
if (statusCheck == 'Отпускается с рецептом' || statusCheck == 'Відпускаєтся з рецептом'){
$('.product-order').remove()
}

})();


/*---- Ниже для миникарточки ----*/

(function(){
var miniCardCol = $('.j-catalog-card').each(function(){

    const statusCheck = $(this).find('.catalogCard-outStock').text().trim();
    console.log(statusCheck)
    if (statusCheck == 'Отпускается с рецептом' || statusCheck == 'Відпускаєтся з рецептом'){
    $(this).find('.j-buy-button-add').remove()
    }

})


})();





/*--------------  Кастомное меню -----------*/

$(document).ready(function(){

$('div.productsMenu-tabs-content').addClass('hide');

$('div.productsMenu-submenu.__fluidGrid.__smallIcons.__hasTabs.__pos_left').addClass('openCustomMenu');

});
$('div.productsMenu-tabs').mouseleave(function(){
    $('div.productsMenu-tabs-content').addClass('hide');
});
$('div.productsMenu-tabs').mouseenter(function(){
    $('div.productsMenu-tabs-content').removeClass('hide');
});




/*----------CSS


.productsMenu-submenu.__fluidGrid.__smallIcons.__hasTabs.__pos_left.openCustomMenu {
    visibility: visible!important;
    opacity: 1!important;
    height: auto!important;
}


.productsMenu-tabs-content.hide {
    width: 0;
}




*/



/*-------- alt 
<script>
$('div.productsMenu-tabs').mouseleave(function(){

    $('div.productsMenu-tabs-content').addClass('hide');

});

$('div.productsMenu-tabs').mouseenter(function(){

    $('div.productsMenu-tabs-content').removeClass('hide');

});
</script>

*/




/*--------- Модальное окно ----------*/


/*

 <div style="display:none" id="custom_age">
        <div id="custom_age_overlay">
            <div id="custom_age_message">

                <div id="custom_age_message_text">
                    <h2>Есть ли вам 18? </h2>
                    <p>Данный контент с рейтингом 18+. Пожалуйста подтвердите ваш возраст</p>
                </div>
                <div id="custom_age_message_buttons">
                    <button class="custom_age_message_button" id="custom_age_message_buttons_yes">Да</button>
                    <button class="custom_age_message_button" d="custom_age_message_buttons_no" onclick="javascript:history.back(); return false;">Нет</button>
                </div>





            </div>
        </div>

    </div>




 #custom_age {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        min-width: 100VW;
        min-height: 100vh;
    }

    #custom_age_overlay {
        width: 100vw;
        height: 100vh;
        background-color: #faf3f3;
        padding-top:  calc(100vh / 2 - 125px);
        box-sizing:border-box;
    }

    #custom_age_message {
        
        position: relative;
        width: 450px;
        height: 250px;
        background-color: aliceblue;
        margin: auto ;
        border-radius: 10px;
            border: 2px solid #e78692;
    box-shadow: 2px 4px 35px #00000085;
        
        
    }
    #custom_age_message_text{
        text-align: center;
        padding: 2em 2em 4em;
    }
    
    #custom_age_message_buttons{
        width: 80%;
        margin: auto;
         text-align: center;
    }
    
    .custom_age_message_button{
        display: inline-block;
        width: 100px;
        height: 30px;
    }
    

    



<script>
$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $("#custom_age").delay(900).fadeIn();
        
    }

    $('#custom_age_message_buttons_yes').click(function(e) 
    {
    $('#custom_age').fadeOut(); // Now the pop up is hiden.
    localStorage.setItem('popState','shown')
    });
});
</script>


*/


/*---  убегающая кнопка---*/




function createEl (nodeClass) {

    var button = document.createElement('a');
    button.classList.add('fake-button');
    button.setAttribute('href','#');
    button.innerHTML = 'Купить';
    return button;
}
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}



var fakeButtonNode = document.querySelector("[fake-button='true']").parentNode;
var FakeButtonHref = fakeButtonNode.parentNode.querySelector('.banner-a').href;
fakeButtonNode.parentNode.querySelector('.banner-a').remove();

var button = createEl();
var runRangeW = fakeButtonNode.offsetWidth;
var runRangeH = fakeButtonNode.offsetHeight;



var runCount=0;

fakeButtonNode.append(button);
button.onmouseover = function(){
    if (runCount>10){
        this.style ='pointer-events: all';
        this.href = FakeButtonHref;
        return;
    }

    var maxH = runRangeH - this.offsetHeight;
    var maxW = runRangeW - this.offsetWidth;
    this.style = 'top:'+randomInteger(0,maxH)+'px;left:'+randomInteger(0,maxW)+'px';
    runCount++;


}
/*
button.addEventListener("mouseover", function() {




})
*/


/*

a.fake-button {
    width: 112px;
    height: 37px;
    display: block;
    position: absolute;
    background: transparent;
    top: 59%;
    left: 21.1%;
    box-sizing: border-box;
    border: 2px solid #fff;
    border-radius: 4px;
    transition: 0.1s all ease-out;
    color: #fff;
    text-align: center;
    line-height: 200%;
    font-size: 16px;
    font-family: "Roboto",sans-serif;
}


*/



/*------------ Проверка на моб устройства------*/

 function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}




/*---------- Мин кол-во ед товара ----------------*/

 function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


  var 
      cart = document.querySelector('.cart'),
      quantFilds = cart.getElementsByClassName((detectMob() ? 'input j-quantity-p' : 'j-quantity-p' )),
      orderButton = cart.querySelector( (detectMob() ? '.cart__order' : '.cart-btnOrder')),
      quantMin = 12,
      quantAll = 0;


      



function noAllowOrder(){
  orderButton.style = 'pointer-events: none; filter: grayscale(1);';
}

function allowOrder(){
  orderButton.style = 'pointer-events: all; filter: grayscale(0);';
}


function quantityCheck (){
      quantAll = 0;

      for (let el of quantFilds){

        quantAll += parseFloat(el.value);
        console.log(parseFloat(el.value));
        console.log(parseFloat(quantAll));

        if( quantAll >= quantMin){
          allowOrder()
          return;
        }

      }
      noAllowOrder();
}

noAllowOrder();



for(let el of quantFilds){
  el.oninput = () => {
    console.log('check');
    quantityCheck();
  } 
}

/*---------- Открыть все вложенности в структуре ------------*/

document.querySelectorAll('.expand').forEach(el => {
if(!(el.parentNode.classList.contains("expanded"))){
el.click()
}
})


/*-------------  lang + цена догворная -----------*/


(()=>{

var pricePattern = '0.00 грн',
        pricePatternLang = (() => {
        let lang = document.documentElement.lang;
            switch (lang) {
                case 'ru' : return 'Цена: 0.00 грн';
                case 'uk' : return 'Ціна: 0.00 грн';
                default : return '0.00 грн';
            }
    })(),
        langText = (() => {
        let lang = document.documentElement.lang;
            switch (lang) {
                case 'ru' : return 'Цена договорная';
                case 'uk' : return 'Ціна договірна';
                default : return 'Ask price';
            }
    })();

const miniCardPriceChage = () => {
    let priceItemsList = document.querySelectorAll('.j-catalog-card,.catalog-card');
    
    priceItemsList.forEach((el,i)=>{
        let price = el.querySelector('.catalogCard-price,.catalog-card__price');
        if(price.textContent.trim() == pricePattern.trim() || price.textContent.trim() == pricePatternLang.trim()){
        price.innerHTML = langText;
        try{
            el.querySelector('.j-buy-button-add').remove();
        }
        catch(e){};
        } 
    });

}
const productPagePriceChange = () => {
    let priceItemsList = document.querySelectorAll('.catalogCard-price,.product-price__item,.product-card__price');

    priceItemsList.forEach((e,i)=>{
        if(e.textContent.trim() == pricePattern.trim() || e.textContent.trim() == pricePatternLang.trim()){

            e.innerHTML = langText;
        try{
        document.querySelector('.j-buy-button-add').remove();
        }
        catch(e){};
        } 
    });

}

//================================== Функция для изменения цены

const priceChange = () => {

    if(document.querySelectorAll('.j-catalog-card,.catalog-card').length > 0) miniCardPriceChage()
        else productPagePriceChange();
    console.log('changed');
}


//================================== Ниже обсервер который следит за DOM и в случае изменения вызивает функцию priceChange()

(() => {

        var target = document.documentElement;
        
        const config = {
            attributes: true,
            childList: true,
            subtree: true
        }; 
        
        const callback = function(mutationsList, observer) {
            priceChange();
        };
        
        const observer = new MutationObserver(callback);
        
        observer.observe(target, config);
        

})();

//================================== При готовности дом вызвать функцию priceChange()
window.onload = priceChange();
})();