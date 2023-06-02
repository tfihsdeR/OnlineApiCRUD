function GetAllSuppliers() {
    axios.get("https://northwind.vercel.app/api/suppliers")
        .then(response => {
            let data = response.data;
            let tableBody = document.getElementById("tableBody");
                while(tableBody.firstChild){
                    tableBody.removeChild(tableBody.firstChild)
                }
            data.forEach(element => {
                const tr = document.createElement("tr");
                tr.innerHTML = "<td>" + element.id + "</td>"
                    + "<td>" + element.companyName + "</td>"
                    + "<td>" + element.contactName + "</td>"
                    + "<td>" + element.contactTitle + "</td>"
                    + "<td>" + element.address.street + "</td>"
                    + "<td>" + element.address.city + "</td>"
                    + "<td>" + element.address.region + "</td>"
                    + "<td>" + element.address.postalCode + "</td>"
                    + "<td>" + element.address.country + "</td>"
                    + "<td>" + element.address.phone + "</td>";
                tableBody.appendChild(tr);
            });
        });
}

function AddSupplier() {
    const companyName = document.getElementById("companyName").value;
    const contactName = document.getElementById("contactName").value;
    const contactTitle = document.getElementById("contactTitle").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const region = document.getElementById("region").value;
    const postalCode = document.getElementById("postalCode").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;

    const supplier = {
        companyName, contactName, contactTitle, address: {
            street, city, region, postalCode, country, phone
        }
    }
    axios.post("https://northwind.vercel.app/api/suppliers", supplier)
        .then(alert("Data added successfully."));
}

function DeleteSupplier() {
    const deleteId = document.getElementById("deleteId").value;
    axios.delete("https://northwind.now.sh/api/suppliers/" + deleteId)
        .then(response => {
            alert('Success!!');
        });
}