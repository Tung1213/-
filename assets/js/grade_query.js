 
function Search(){



    let name=document.getElementById("look_name");

   if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = alertContents;
   
    function alertContents(){

        let table=document.getElementById("show_info");
		table.cellPadding='1';
        var data=httpRequest.responseText;
        data=JSON.parse(data); 
            if (httpRequest.status==200){
                 if(data!="沒找到資料"){
						
                        //index 0:是表格欄位
                        //document.getElementById("show_score").innerHTML=data[1];
                        //建立主欄位
                        //document.getElementById("show_score").innerHTML=data[0][2];
                            var head_name=['姓名','年齡(歲)','性別','次數'];
                            var row =document.createElement('tr');
                            //console.log(data);
                            for(var x=0;x<4;x++){

                                var th=document.createElement("th"); 
                                var celltext=document.createTextNode(head_name[x]);
                                th.appendChild(celltext);
                                row.appendChild(th);
                            }  

                            table.appendChild(row);

                            for(var x=1;x<=(data.length-1);x++){

                                var row1 =document.createElement('tr');
                                if(data[x][0]==name.value&&data[x][0]!=""){     
                                    for(var y=0;y<(4);y++){
                                            var td=document.createElement('td');
                                            var content=document.createTextNode(data[x][y]);
                                            td.appendChild(content);
                                            row1.appendChild(td);
                                    }
                            }
                            table.appendChild(row1); 
                        }
                       
                    
                }
                else{
					if(name.value==""){
						
						
						alert("查詢失敗!!，請輸入姓名!");
					}else{
						
						
						var h1=document.createElement("h1");
						var content=document.createTextNode("沒找到您的任何紀錄. 可能原因: 1.姓名輸入錯誤 2.還沒進行測試 ");
						var row =document.createElement('tr');
						row.appendChild(content);
						table.appendChild(row);
						
					}
				
                }   
        }
    }    

    httpRequest.open('GET','https://script.google.com/macros/s/AKfycbw857nI8W6o8hb40YpwiLY1UiQyA5844aJ8Sf9roMkz9EAtJW267cZd-RX5dPpmFWV9tA/exec?name='+(name.value),false);
    httpRequest.send();
   
}

function clear_content(){


	let name=document.getElementById("look_name");
	name.value=" ";
    location.reload();
    

}