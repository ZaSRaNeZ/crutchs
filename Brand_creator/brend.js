const head = '<section class="content-wrapper"><div class="title-bar"><h3>Бренды A-Z</h3><div class="alphabet-links" id="top"><ul>	<li><a href="#0-9">#</a></li>	<li><a href="#A">A</a></li>	<li><a href="#B">B</a></li>	<li><a href="#C">C</a></li>	<li><a href="#D">D</a></li>	<li><a href="#E">E</a></li>	<li><a href="#F">F</a></li>	<li><a href="#G">G</a></li>	<li><a href="#H">H</a></li>	<li><a href="#I">I</a></li>	<li><a href="#J">J</a></li>	<li><a href="#K">K</a></li>	<li><a href="#L">L</a></li>	<li><a href="#M">M</a></li>	<li><a href="#N">N</a></li>	<li><a href="#O">O</a></li>	<li><a href="#P">P</a></li>	<li><a href="#Q">Q</a></li>	<li><a href="#R">R</a></li>	<li><a href="#S">S</a></li>	<li><a href="#T">T</a></li>	<li><a href="#U">U</a></li>	<li><a href="#V">V</a></li>	<li><a href="#W">W</a></li>	<li><a href="#X">X</a></li>	<li><a href="#Y">Y</a></li>	<li><a href="#Z">Z</a></li></ul></div></div><div class="inner-content">';
const end = '</div></section>'
let body = '';


function start() {

    document.getElementById('brand_name')

    let color = document.getElementById('main_color').value.trim() === '' ? '#4acaff' : document.getElementById('main_color').value.trim();

    const styles = `<style type="text/css" media="screen">\n` +
        `\n` +
        `.alphabet-links>ul>li {\n` +
        `    display: inline-block;\n` +
        `    padding-left: 0px;\n` +
        `    width: calc(100% / 34);\n` +
        `    min-width: 40px;\n` +
        `    margin: 0 0 .6em;\n` +
        `    font-weight: 900;\n` +
        `}\n` +
        `\n` +
        `.alphabet-links a {\n` +
        `    padding: 5px 0;\n` +
        `    display: block;\n` +
        `    width: 100%;\n` +
        `    text-align: center;\n` +
        `    transition: 0.1s all;\n` +
        `    background-color: ${color}52;\n` +
        `}\n` +
        `\n` +
        `a:hover, .a-link:hover {\n` +
        `    color: ${color};\n` +
        `}\n` +
        `\n` +
        `a{\n` +
        `	color: #333;\n` +
        `	text-decoration: none;\n` +
        `}\n` +
        `\n` +
        `.brand_title_block>div {\n` +
        `   width: auto;\n` +
        `}\n` +
        `\n` +
        `.brand_title_block {\n` +
        `    width: 100%;\n` +
        `    font-size: 20px;\n` +
        `    border-bottom: 1px solid ${color};\n` +
        `    position: relative;\n` +
        `    display: flex;\n` +
        `	padding-bottom: 10px;\n` +
        `   margin-top: 30px;\n`+
        `}\n` +
        `.back_up{\n` +
        `	position: absolute;\n` +
        `	right: 0;\n` +
        `    min-width: 50%;\n` +
        `    text-align: right;\n` +
        `}\n` +
        `\n` +
        `.brands_block>ul {\n` +
        `    column-count: 3;\n` +
        `    column-width: 350px;\n` +
        `}\n` +
        `\n` +
        `.brands_block>ul>li {\n` +
        `    overflow: hidden;\n` +
        `    position: relative;\n` +
        `    padding-left: 20px;\n` +
        `    list-style: none;\n` +
        `	margin: 0 0 .6em;\n` +
        `\n` +
        `	}\n` +
        `\n` +
        '.text ul li:before{\n' +
        '    content:none;\n' +
        '}\n'+
        `</style>\n`;

       







    var brand_name = document.getElementById('brand_name').value.split('\n');
    var brand_link = document.getElementById('brand_link').value.split('\n');
    let brand_items_arr = []

    for (let i = 0; i < brand_name.length; i++) {

        brand_items_arr.push({
            name: brand_name[i],
            link: brand_link[i]
        });

    }

    brand_items_arr.sort(function(a, b) {
        if (a.name[0].toUpperCase() + a.name.slice(1) > b.name[0].toUpperCase() + b.name.slice(1)) {
            return 1;
        }
        if (a.name[0].toUpperCase() + a.name.slice(1) < b.name[0].toUpperCase() + b.name.slice(1)) {
            return -1;
        }
        return 0;
    });

    console.log(brand_items_arr);
    console.log(brand_items_arr[1].name);
    let new_Letter = 0;
    var letter = '';
    for (let val of brand_items_arr) {



        if (val.name[0].toUpperCase() != letter) {

            if (letter != '') {
                {
                    body += `</ul>\n` +
                        `       \n` +
                        `   </div>`;
                    new_Letter = 0;
                };
            }
            letter = val.name[0].toUpperCase();

            body += `<div class="brand_title_block" id="${letter}">\n` +
                `	<div class="title-text">${letter}</div>\n` +
                `	<div class="back_up"><a href="#top">Вернуться к началу</a></div>\n` +
                `	</div>\n` +
                `	<div class="brands_block">\n` +
                `		<ul>\n`;

        }
        if (val.name[0].toUpperCase() === letter) {


            body += `<li><a href="${val.link}">${val.name}</a></li>\n`;

            new_Letter = 1;
        }





    }




    let out = styles + head + body + end;

    document.body.innerHTML += out;

    document.getElementById('brand_name').value = out;


};