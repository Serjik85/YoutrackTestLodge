function getIssueId() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let token = 'perm:U2VyZ2V5X1RrYWNoZW5rbw==.NjAtMQ==.gONDyolCZrgbnHVP6UAekE85Nbxpm2';
    //let url = 'https://merehead.myjetbrains.com/youtrack/api/issues?query=project:"Testamex"&fields=has:("Need Tesing"),has("2 sprint"),id,summary,description';
    let url = 'https://merehead.myjetbrains.com/youtrack/api/issues/?query=Board%20Testamex%20Web:%20%7B2%20sprint%7D%20State:%20%7BNeed%20testing%7D'
    //let url = 'https://merehead.myjetbrains.com/youtrack/rest/issue?filter=TX&Need%20Testing'
    // document.getElementById('in').innerHTML = '1'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', proxyurl + url, true);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('fields', 'id,login,name,email');
    xhr.setRequestHeader('name', '0-85');
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            return
        }
        let response = xhr.response
        //let jsons = JSON.parse(xhr.response)
        let jsons = response[4].id
        console.log(jsons)
        document.getElementById('ar').innerText = jsons
        console.log(xhr.response)
        return jsons
    }
    xhr.send();


}