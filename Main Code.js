const scriptName = "핑퐁 챗봇";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg == "챗봇") { try {
    /*
    var json = {};
    json.request = {};
    json.request.query = "안녕";
    
    replier.reply(JSON.stringify(json)+"\n"+JSON.stringify(json,null,4));
    */
    var json1 = { "request": { "query": "안녕!" } };
    replier.reply(JSON.stringify(json1));
    
    var message = org.jsoup.Jsoup.connect("https://builder.pingpong.us/api/builder/605b0e30e4b078d873a52a7d/integration/v0.2/custom/a2V5OjUzZWUzNjAxMzM3NmVjNzYwOGNkZTVmZjJlZWNiNWVk")
    .header("Authorization", "Basic a2V5OjUzZWUzNjAxMzM3NmVjNzYwOGNkZTVmZjJlZWNiNWVk")
    .header("Content-Type", "application/json; charset=utf-8")
    .data(json1, JSON.stringify(json1))
    .ignoreContentType(true).ignoreHttpErrors(true).post().text();
    replier.reply(message);
  } catch(e) {replier.reply(e+e.lineNumber);}
  }
  
}
