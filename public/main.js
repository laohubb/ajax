// 获取css
getCSS.onclick = () => {
    const request = new XMLHttpRequest(); 
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement("style");
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
// 获取js
getJS.onclick=() => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {
          const script = document.createElement("script");
          script.innerHTML = request.response;
          document.body.appendChild(script);
        }
    }
    request.send()
}

// 获取html
getHTML.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
// 获取XMl
getXML.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const warnTxt=dom.getElementsByTagName('warning')[0].textContent.trim()
            console.log(warnTxt);
        }
    }
    request.send()
}

// 获取json
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const bool = JSON.parse(request.response);
            console.log(bool);
       }
    }
    request.send()

}