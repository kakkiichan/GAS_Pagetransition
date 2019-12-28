//GoogleAppsScript(GAS)でページ遷移を擬似的に実装する方法
//http://qiita.com/kakkiichan/items/a6a653bbe113a1dee2eb

function doGet(e){
  var page=e.parameter["p"];
  
  if(page == "index" || page==null){
  
  return HtmlService.createHtmlOutputFromFile('Index');
}
  else if(page =="menu1"){
  return HtmlService.createHtmlOutputFromFile('Menu1');
  }
  else if(page =="menu2"){
    
    return HtmlService.createHtmlOutputFromFile('Menu2');
    }
  else{
    return HtmlService.createHtmlOutputFromFile('Error');
    
    }
  
  
  }
