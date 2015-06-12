(function(){
	window.addEventListener("DOMContentLoaded", onDomContentLoad, false);

	var ind= [];
	var i=0;

	function Person(name, address){
		this.name=name;
		this.address=address;
	};

	function Employee(name,address,empId,salary){
		Person.call(this, name, address);
		this.empId=empId;
		this.salary=salary;
		this.cat="Employee";
	};
	Employee.prototype=Object.create(Person.prototype);



	function Employer(name, address, company){
		Person.call(this, name, address);
		this.company=company;
		this.cat="Employer"
	};
	Employer.prototype=Object.create(Person.prototype);


	function Customer(name, address, custId, items){
		Person.call(this, name, address);
		this.custId=custId;
		this.items= items;
		this.cat="Customer";
	};
	Customer.prototype=Object.create(Person.prototype);

	function createEmployee(){
		var name=document.getElementById('in21').value;
		var address=document.getElementById('in22').value;
		var empId=document.getElementById('in23').value;
		var salary=document.getElementById('in24').value;
		ind[i]=new Employee(name,address,empId,salary);

		// Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: ind[i],
            url: '/adduser',
            dataType: 'JSON'
        }).done(function( response ) {
        	console.log(response);
        });

		var x=document.createElement("div");
		var t=document.createAttribute("id");
		t.value=i;
		x.setAttributeNode(t);
		document.body.appendChild(x);

		document.getElementById(i).innerHTML="<p>Employee<br>Name:"+name+"<br>Address:"+address+"<br>Employee Id:"+empId+"<br>Salary:"+salary+"<br></p>";

		document.getElementById(i).style.display= "inline-block";
		document.getElementById(i).style.backgroundColor= "#0099FF";
		document.getElementById(i).style.padding= "0 25px";
		document.getElementById(i).style.margin="10px";
		document.getElementById(i).style.verticalAlign= "top";

		i++;
		$("#div2").hide();
	};

	function createEmployer(){
		var name=document.getElementById('in31').value;
		var address=document.getElementById('in32').value;
		var company=document.getElementById('in33').value;
		ind[i]=new Employer(name,address,company);

		// Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: ind[i],
            url: '/adduser',
            dataType: 'JSON'
        }).done(function( response ) {
        	console.log(response);
        });


		var x=document.createElement("div");
		var t=document.createAttribute("id");
		t.value=i;
		x.setAttributeNode(t);
		document.body.appendChild(x);

		document.getElementById(i).innerHTML="<p>Employer<br>Name:"+name+"<br>Address:"+address+"<br>Company :"+company+"<br></p><br>";

		document.getElementById(i).style.display= "inline-block";
		document.getElementById(i).style.backgroundColor= "#0099FF";
		document.getElementById(i).style.padding= "0 25px";
		document.getElementById(i).style.margin="10px";
		document.getElementById(i).style.verticalAlign= "top";

		i++;
		$("#div3").hide();
	};

	function createCustomer(){
		var name=document.getElementById('in41').value;
		var address=document.getElementById('in42').value;
		var custId=document.getElementById('in43').value;
		var item=document.getElementById('in44').value;
		ind[i]=new Customer(name,address,custId, item);

		// Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: ind[i],
            url: '/adduser',
            dataType: 'JSON'
        }).done(function( response ) {
        	console.log(response);
        });


		var x=document.createElement("div");
		var t=document.createAttribute("id");
		t.value=i;
		x.setAttributeNode(t);
		document.body.appendChild(x);

		document.getElementById(i).innerHTML="<p>Customer<br>Name:"+name+"<br>Address:"+address+"<br>Customer Id:"+custId+"<br>Items :"+item+"<br></p>";

		document.getElementById(i).style.display= "inline-block";
		document.getElementById(i).style.backgroundColor= "#0099FF";
		document.getElementById(i).style.padding= "0 25px";
		document.getElementById(i).style.margin="10px";
		document.getElementById(i).style.verticalAlign= "top";

		i++;
		$("#div4").hide();
	};

	function save(){
		$("#div2").hide();
		$("#div3").hide();
		$("#div4").hide();
		$("#div5").hide();
		$("#div6").hide();
		if(document.getElementById("empee").selected){
			$("#div2").show();
			document.getElementById('sub2').addEventListener("click",createEmployee, false);
		}
		else if(document.getElementById("emper").selected){
			$("#div3").show();
			document.getElementById('sub3').addEventListener("click",createEmployer, false);
		}
		else if(document.getElementById("cust").selected){
			$("#div4").show();
			document.getElementById('sub4').addEventListener("click",createCustomer, false);
		}
		$('select').prop('selectedIndex', 0);
	};
	function execute(person){
		$("#div5").hide();
		if(person.cat==="Employee"){
			document.getElementById('span11').innerHTML = "type :";
			document.getElementById('span12').innerHTML = person.cat; 
			document.getElementById('span21').innerHTML = "Name :"; 
			document.getElementById('span22').innerHTML = person.name; 
			document.getElementById('span31').innerHTML = "Address :"; 
			document.getElementById('span32').innerHTML = person.address; 
			document.getElementById('span41').innerHTML = "Employee Id :"; 
			document.getElementById('span42').innerHTML = person.empId; 
			document.getElementById('span51').innerHTML = "Salary :"; 
			document.getElementById('span52').innerHTML = person.salary;
			$("#div6").show(); 
		}
		else if(person.cat==="Employer"){
			document.getElementById('span11').innerHTML = "type :";
			document.getElementById('span12').innerHTML = person.cat; 
			document.getElementById('span21').innerHTML = "Name :"; 
			document.getElementById('span22').innerHTML = person.name; 
			document.getElementById('span31').innerHTML = "Address :"; 
			document.getElementById('span32').innerHTML = person.address; 
			document.getElementById('span41').innerHTML = "Company :"; 
			document.getElementById('span42').innerHTML = person.company; 
			document.getElementById('span51').innerHTML = ""; 
			document.getElementById('span52').innerHTML = "";
			$("#div6").show();
		}
		else if(person.cat==="Customer"){
			document.getElementById('span11').innerHTML = "type :";
			document.getElementById('span12').innerHTML = person.cat; 
			document.getElementById('span21').innerHTML = "Name :"; 
			document.getElementById('span22').innerHTML = person.name; 
			document.getElementById('span31').innerHTML = "Address :"; 
			document.getElementById('span32').innerHTML = person.address; 
			document.getElementById('span41').innerHTML = "Customer Id :"; 
			document.getElementById('span42').innerHTML = person.custId; 
			document.getElementById('span51').innerHTML = "Items :"; 
			document.getElementById('span52').innerHTML = person.item;
			$("#div6").show();
		}
	}

	function showProfile(){
		var naam=document.getElementById('in5').value;
		var person={};


		// jQuery AJAX call for JSON
    	$.getJSON( '/users', function( data ) {

        	// For each item in our JSON, add a table row and cells to the content string
        	$.each(data, function(){
            	if(this.name===naam){
            		person=this;
            		execute(person);
            	}
        	});
    	});
	}

	function search(){
		$("#div2").hide();
		$("#div3").hide();
		$("#div4").hide();
		$("#div6").hide();
		$("#div5").show();
		document.getElementById('sub5').addEventListener("click",showProfile, false);
	};

	function onDomContentLoad(){
		$("#div2").hide();
		$("#div3").hide();
		$("#div4").hide();
		$("#div5").hide();
		$("#div6").hide();

		// Empty content string
    	var Contents = '';

    	// jQuery AJAX call for JSON
    	$.getJSON( '/users', function( data ) {

        	// For each item in our JSON, add a table row and cells to the content string
        	$.each(data, function(){
            	if(this.cat==="Employee"){
            		Contents +="<div style=\"display:inline-block; background-color:#0099FF; margin:10px; vertical-align:top; padding:0 25px\"><p>Employee<br>Name:"+this.name+"<br>Address:"+this.address+"<br>Employee Id:"+this.empId+"<br>Salary:"+this.salary+"<br></p></div>";
            	}
            	else if(this.cat==="Employer"){
            		Contents +="<div style=\"display:inline-block; background-color:#0099FF; margin:10px; vertical-align:top; padding:0 25px\"><p>Employer<br>Name:"+this.name+"<br>Address:"+this.address+"<br>Company :"+this.company+"<br></p><br></div>";
            	}
            	else if(this.cat==="Customer"){
            		Contents +="<div style=\"display:inline-block; background-color:#0099FF; margin:10px; vertical-align:top; padding:0 25px\"><p>Customer<br>Name:"+this.name+"<br>Address:"+this.address+"<br>Customer Id:"+this.custId+"<br>Items :"+this.item+"<br></p></div>";
            	}
        	});

        	// Inject the whole content string into our existing HTML table
        	$('#div7').html(Contents);
    	});

		$("#sel").change(save);
		var b2= document.getElementById('search');
		b2.addEventListener("click", search, false);
	};

})();