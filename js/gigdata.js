var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        var gigs = JSON.parse(xhr.responseText);
        var statusHTML = '<ul>';
        for (var i = 0; i < gigs.length; i += 1) {
            statusHTML += '<li>';
        }
        statusHTML += gigs[i].date;
        statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('section4').innerHTML = statusHTML;
}
};
xhr.open('GET', 'data/gigs.json');
xhr.send();