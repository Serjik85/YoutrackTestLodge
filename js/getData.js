const proxyurl = "https://cors-anywhere.herokuapp.com/";
let token = 'perm:U2VyZ2V5X1RrYWNoZW5rbw==.NjAtMQ==.gONDyolCZrgbnHVP6UAekE85Nbxpm2';
//let url = 'https://merehead.myjetbrains.com/youtrack/api/issues?query=project:"Testamex"&fields=has:("Need Tesing"),has("2 sprint"),id,summary,description';
let url = 'https://merehead.myjetbrains.com/youtrack/api/issues/?query=Board%20Testamex%20Web:%20%7B3%20sprint%7D%20State:%20%7BNeed%20testing%7D';
let urlIssue = 'https://merehead.myjetbrains.com/youtrack/api/issues/2-23516?fields=summary,description';


// Получаем описание таски
async function getId() {
    try {
        let response = await fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + token
            },
        });

        let result = await response.json();
        for (let i = 0; i <= result.length; i++) {
            console.log(result[i].id);
        }
        id = result[i].id
        document.getElementById('arr').textContent = (id)

        let urlIssue = 'https://merehead.myjetbrains.com/youtrack/api/issues/' + id + '?fields=summary,description';


        let objSel = document.getElementById('task')
        objSel.options[i] = new Option(id);


    } catch (err) {
        //console.error(err);
    }
};

//Получаем id тасок
async function getData() {
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

};
getId();
getData();