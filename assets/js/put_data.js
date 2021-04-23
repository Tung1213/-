window.onload=function(){

	setInterval(wait_data,1000);
	let age = document.getElementById('age');
	let name = document.querySelector('#name');	
  	let sex = document.querySelector('#sex');
  	let count = document.querySelector('#count');
	age.onblur=function(){checkNumber(age.value);}
	name.onblur=function(){checkstring(name.value);}
	
}


var total_count;



function checkNumber(string) {
  
	re = /^\d+$/;
	if (re.test(string) || string==""){return true; }
	else{alert("請輸入數字!!");
	}
	
}
function checkstring(string){
	
	re= /^[\u4E00-\u9FA5]+$/;
	if(re.test(string)|| string==""){
		return true;
	}else{
		
		alert("請輸入中文姓名");
		
	}
	
	
}
function selectText(ele){
	
	
	return ele.options[ele.selectedIndex].text;
}


function post_to_google_spreadsheet(){


    var check=true;
	/*let name = document.querySelector('#name');	
  	let age = document.getElementById('age');
  	let sex = document.querySelector('#sex');
  	let count = document.querySelector('#count');*/
    var data = document.getElementsByClassName("data");
    for(x=0;x<data.length;x++){if(data[x].value==""){check=false;}}


if(check && count.value!=0){
  	$.ajax({
      url: "https://script.google.com/macros/s/AKfycbw6SlhnKtaraIuQwk3_3scKlfLJSPqq2_8e8tj6tPzDmn1K_2JFtWi0T-q9UWRj-PYG7w/exec",
      data: {
          "name": name.value,
          "age": age.value,
          "sex": selectText(ele),
          "count": count.value
      },
      success: function(response) {
        if(response == "成功"){
          alert("儲存資料成功");
          location.reload();
        }else{
			
			alert("次數不能為0!!，請重新測試!");
			
		}
      },
    });
  }
  else{

    alert("資料沒有輸入或是還沒進行測驗!!");
  }
  window.localStorage.setItem("total_count",0);

}

function clear_text(){

	let name = document.getElementById('name');
  	let age = document.getElementById('age');
  	let sex = document.getElementById('sex');
 	let count=document.getElementById('count');

 	name.value="";
 	age.value="";
 	sex.value="";
 	count.value="";
 	window.localStorage.setItem("total_count",0);
}


function newpage(){

	newwindow=window.open('sit_up.html', 'Test', config='height=700,width=700, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, titlebar=yes, alwaysRaised=yes');
}


function wait_data(){

	var count=document.getElementById('count');
	count.value=window.localStorage.getItem("total_count");

	if(count.value>0){

		
		count.disabled=true;
		count.value=window.localStorage.getItem("total_count");
	}else{

		count.disabled=true;
	}
	
}

