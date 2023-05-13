
const url = 'schoolData.json';
$(document).ready(function () {
    getVipResult(url);
});


function getVipResult(url) {
    const tdata = document.getElementById("tdata");
    const head = document.getElementById("theadd");
    head.innerHTML = "";
    tdata.innerHTML = "";

    $.getJSON(url, function (response) {
        let combine = '', thead = '';
        thead = '<tr><th>Student Name</th><th>Student ID</th><th>Birthday</th><th>Gender</th></tr>';
        response.studentPersonalInformation.forEach(data => {
            combine += `
                <tr>
                    <td class="text-start">${data.Name}</td>
                    <td>${data.StudentId}</td>
                    <td>${data.Birthday}</td>
                    <td>${data.Gender}</td>
                </tr>`;
        });
        head.innerHTML = thead;
        tdata.innerHTML = combine;
        searchfun();
    });
}


function searchfun() {
    const searchInput = document.getElementById('searchInput');
    const rows = document.querySelectorAll("tbody tr")
    // console.log(rows);
    console.log(searchInput);

    searchInput.addEventListener('keyup', function (event) {
        // console.log(event);
        const q = event.target.value;
        rows.forEach(row => {
            row.querySelector('td').textContent.toLocaleLowerCase().startsWith(q) ? (row.style.display = '') : (row.style.display = 'none')
        })
    });
}