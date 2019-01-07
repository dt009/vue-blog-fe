/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 15:57:10
 * @Last Modified by:   duantao-ds
 * @Last Modified time: 2018-08-09 15:57:10
 */

function setHtmlFont() {

    let dpr = document.documentElement.getAttribute('data-dpr');

    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    document.body.style.fontSize = 12 * dpr + 'px';

    let width = document.documentElement.offsetWidth

    let fontSize = 100 / 750 * width;

    document.querySelector('html').style.fontSize = (fontSize) + 'px';

    window.addEventListener(resizeEvt, function () {

        let width = document.querySelector('html').offsetWidth;

        let fontSize = 100 / 750 * width;

        document.querySelector('html').style.fontSize = (fontSize) + 'px';

    })
}

export default setHtmlFont;
