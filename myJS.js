
const url = 'schoolData.json';
$(document).ready(function () {
    getVipResult(url);
});


function getVipResult(url) {
    const tdata = document.getElementById("tdata");
    tdata.innerHTML = "";

    $.getJSON(url, function (response) {
        let combine = '';
        response.studentPersonalInformation.forEach(data => {
            combine += `
                <tr>
                    <td class="text-start">${data.Name}</td>
                    <td>${data.StudentId}</td>
                    <td>${data.Birthday}</td>
                    <td>${data.Gender}</td>
                </tr>`;
        });
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