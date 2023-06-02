let list = document.getElementById("list");

function GetTitlesOfTodos() {
    let userIdCounter = 0;
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            let data = response.data;

            list.innerHTML = "";

            data.forEach(element => {
                const listItem = document.createElement("li");
                listItem.innerHTML = element.title;
                list.appendChild(listItem);
                if (element.userId == 1) {
                    userIdCounter++;
                }
            });
            console.log(userIdCounter);
        });
}

function GetTitlesOfPhotos() {
    axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
            list.innerHTML = "";
            let data = response.data;
            data.forEach(element => {
                const listItem = document.createElement("li");
                listItem.innerHTML = element.title;
                list.appendChild(listItem);
            });
        });
}

function GetAllPosts() {
    let tableBody = document.getElementById("tableBody");
    let postLenth = document.getElementById("postLength");
    tableBody.innerHTML = "";
    postLenth.innerHTML = "";

    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            let data = response.data;
            data.forEach(item => {
                const tr = document.createElement("tr");
                tr.innerHTML = "<td>" + item.id + "</td>"
                    + "<td>" + item.title + "</td>"
                    + "<td>" + item.body + "</td>"
                tableBody.appendChild(tr);
            });
        })
        .then(() => {
            let table = document.getElementById("table");
            let tableRowLength = table.rows.length;
            postLenth.innerHTML = "Table Lenth: " + tableRowLength;
        });

}