//const proxyurl = "https://cors-anywhere.herokuapp.com/";
//let token = 'perm:U2VyZ2V5X1RrYWNoZW5rbw==.NjAtMQ==.gONDyolCZrgbnHVP6UAekE85Nbxpm2';
//let urlIssue = 'https://merehead.myjetbrains.com/youtrack/api/issues/2-23516?fields=summary,description';
let urlIssue = 'https://merehead.myjetbrains.com/youtrack/api/issues/2-23516?fields=summary,description';
//let url = 'https://merehead.myjetbrains.com/youtrack/api/issues?query=project:"Testamex"&fields=has:("Need Tesing"),has("2 sprint"),id,summary,description';
//let url = 'https://merehead.myjetbrains.com/youtrack/api/issues/?query=Board%20Testamex%20Web:%20%7B2%20sprint%7D%20State:%20%7BNeed%20testing%7D';


(async function main() {
    try {
        let responseId = await fetch(proxyurl + urlIssue, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + token,
                //'fields': 'summary,description'
            },
        });
        let resultId = await responseId.json();
        //for (let i = 0; i <= result.length; i++)
        console.log(resultId.description);
        document.getElementById('issueData').textContent = (resultId.description)

    } catch (err) {
        //console.error(err);
    }
})();