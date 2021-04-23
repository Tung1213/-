
function export_file(){

    var href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkfTrjgiIOmGlOr4k2E4BOjULV8HWSx9EQp4R3R8QlME1-61dlv7j-1u5jjxInKkLHe2eT4u4cPHZP/pub?output=xlsx";
    var link=document.getElementById("link");
    link.href=href;
    if(link.href){

        alert("檔案下載完成");


    }
}