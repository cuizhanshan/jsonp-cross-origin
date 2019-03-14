var btn = document.querySelector('#btn');

btn.addEventListener('click',function(){

    var url = 'http://localhost:3000/jsonp?callback=callbackHandler'

    var script = document.createElement('script');

    script.setAttribute('src', url);

    document.getElementsByTagName('head')[0].appendChild(script)

}, false)
var callbackHandler = function(data) {
    console.log(data)
}