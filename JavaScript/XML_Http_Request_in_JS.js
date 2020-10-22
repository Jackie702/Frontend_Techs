const xhr = new XMLHttpRequest();

//Function will be called each time xhr.readyState changes
xhr.onreadystatechange = function () {
	if(xhr.readyState == 4){	//xhr.readyState = 0 / 1 / 2 / 3 / 4, present different status
		if (xhr.status == 200){	//xhr.status store http status codes
			console.log(xhr.responseText);
		}
		
		if(xhr.status == 404){
			console.log("File or resource not found");
		}
	}
};

xhr.open('get', <url>, async=ture);	//open the request, ready to send data
xhr.send();				//send the request
