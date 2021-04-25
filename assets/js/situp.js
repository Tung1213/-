var time=2000,step=1000;

//時間參數
var spend_time=0,content,counter_value=0,timer=0,hour=0,min=0,sec=0,reminder=0;


var cur_count;
var flag=true;
var intervalID = setInterval(function(){


	img_array=['2.png','1.png'];

	var img=document.getElementById("img");

	if(step==time+1000){

		//alert("正式開始測試");
		img.style="display:none";
		clearInterval(intervalID);
		to_page();
		start_counter();
		

	}
	else{

		img.src="images/"+img_array[(step/1000)-1];
	}

	step+=1000;

	}, step);



function to_page(){

	/////////////////////////////////////////////////////////////////
	document.getElementById("time_form").style.display="block";
	document.getElementById("time_form").style.backgroundColor="#FFFF99";
	document.getElementById("time_form").style.width='680px';
	document.getElementById("time_form").style.height='100px';

	/////////////////////////////////////////////////////////////////
	document.getElementsByTagName('h2')[0].style.position='absolute';
	document.getElementsByTagName('h2')[0].style.top='25px';

	/////////////////////////////////////////////////////////////////
	document.getElementById("content").style.display="block";
	document.getElementById("content").style.width='680px';
	document.getElementById("content").style.height='300px';
	document.getElementById('content').style.position='absolute';
	document.getElementById('content').style.top='200px';


}

function start_counter(){

	 	content=document.getElementsByTagName("h1")[2];

	 	const audio = new Audio("timeout.mp3");
		
		time=Time_Limit();
	
		timer=setInterval(function(){
    		
 		//console.log(time);
 		spend_time++;

		if(hour==time){
			audio.play();
 			clearInterval(timer);
	 		flag=false;
	 		setTimeout("CountDown()",3000);
	 		cur_count=0;
	 		
 			
 		}
 		if(spend_time<60){
 		  content.innerHTML=hour+"分"+spend_time+"秒";
 		}
 		else{

			content.innerHTML=hour+"分"+(spend_time)+"秒";
	 		spend_time-=60;
 			hour+=1;
 		}
  		}, 1000);
		
}

//2分鐘
function Time_Limit(){return 2;}

function ajaxFunction() {
        var ajaxRequest;  // The variable that makes Ajax possible!

		if (window.XMLHttpRequest) {
		    // code for modern browsers

		} else {
		    // code for IE6, IE5
		    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		  }
}


//訪問IP address
function get_data(){


		
		ajaxRequest = new XMLHttpRequest();
		ajaxRequest.onreadystatechange=function(){

			if(this.readyState==1 || this.readyState==0){

				cur_count=0;
				//console.log("目前次數:"+cur_count);

			}


			if(this.readyState==4 && this.status==200){

				if(flag==false){
					document.getElementById("count").innerHTML="0次";
				}else{
					
					cur_count=this.responseText;
					document.getElementById("count").innerHTML=cur_count+"次";
					window.localStorage.setItem("total_count", cur_count);

				}
			


			}else{ 

				//console.log(this.status);

				return 0;
			}
		};
		ajaxRequest.open("GET","http://172.20.10.4/count",true);
		ajaxRequest.send(); 
	}	
setInterval(get_data,100);




function CountDown(){


	//window.opener.document.getElementById('count').value =cur_count;
	
	window.close();
}
