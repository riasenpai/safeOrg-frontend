export function getData(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            const response = JSON.parse(xhr.responseText);
            callback(response);
        }
    }
    xhr.open('GET', url, true);
    xhr.send(null);
}

export function getUrl(endpoint){
    let host="http://52.66.129.248:3000";
    if (process.env.NODE_ENV === 'development') {
        host= "http://localhost:3000";
    }
    return(host+"/"+endpoint);
}