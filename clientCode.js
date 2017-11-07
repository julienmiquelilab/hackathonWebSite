function send()
{
    var mail = document.getElementById('email').value;

    var urlvariable;

    urlvariable = "text";

    var ItemJSON;

    ItemJSON = '{"text": "' + mail + '" }';

    URL = "https://mx99ehykf8.execute-api.us-east-1.amazonaws.com/dev/register" ;  

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    //alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}



function register()
{
    var team = document.getElementById('team').value;
    var email = document.getElementById('email').value;
    var nbPeople = document.getElementById('nbPeople').value;

    var urlvariable;

    urlvariable = "text";

    var ItemJSON;

  ItemJSON = '{"email": "' + email + '", "team": "' + team + '" ,"nbPeople": ' + nbPeople + ' }';

    URL = "https://mx99ehykf8.execute-api.us-east-1.amazonaws.com/dev/register" ;  

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    //alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}


function callbackFunction(xmlhttp) 
{
    //alert(xmlhttp.responseXML);
}



function contact()
{
    var mail = document.getElementById('email').value;
    var question = document.getElementById('question').value;

    var urlvariable;

    urlvariable = "text";

    var ItemJSON;

  ItemJSON = '[{"mail": "' + mail + '" }, {"question": "'+question+'"}]';

    URL = "https://9l2nc5n6d1.execute-api.us-east-1.amazonaws.com/dev/contact" ;  

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    //alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}




<body id='bod'>
<html>
<strong>Nom de l'équipe:</strong> <input type="text" maxlength="256" name="team" id='team' />
<strong>Email:</strong><input type="text" maxlength="256" name="email" id='email' />
<strong>Nombre de personne composant l'équipe:</strong><input type="number" name="nbPeople" id='nbPeople' />
<input type="button" value="submit" onclick="register()" />

<div id='div'>
</div>
</html>
</body>
