const scriptName = "핑퐁 챗봇";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith("\"") && msg.endsWith("\"")) {
    try {
      
      var json = {
        "request": {
          "query": msg.slice(1,-1)
        }
      };
      
      var message = JSON.parse(org.jsoup.Jsoup.connect("https://builder.pingpong.us/api/builder/605b0e30e4b078d873a52a7d/integration/v0.2/custom/a2V5OjUzZWUzNjAxMzM3NmVjNzYwOGNkZTVmZjJlZWNiNWVk")
    .header("Authorization", "Basic a2V5OjUzZWUzNjAxMzM3NmVjNzYwOGNkZTVmZjJlZWNiNWVk")
    .header("Content-Type", "application/json; charset=utf-8")
    .requestBody(JSON.stringify(json))
    .ignoreContentType(true).ignoreHttpErrors(true).post().text());
    
    try {
      replier.reply(message.response.replies[0].text);
    } catch (e) {
      replier.reply(message.response.replies.text);
    }
    
    /*
    
    const res = org.jsoup.Jsoup.connect('https://builder.pingpong.us/api/builder/605b0e30e4b078d873a52a7d/integration/v0.2/custom/a2V5OjUzZWUzNjAxMzM3NmVjNzYwOGNkZTVmZjJlZWNiNWVk')
.method(org.jsoup.Connection.Method.POST)
.header('Content-Type', 'application/json; charset=UTF-8')
.header('Authorization', "Basic a2V5OjUzZWUzNjAxMzM3NmVjNzYwOGNkZTVmZjJlZWNiNWVk")
.requestBody(JSON.stringify(json1))
.ignoreContentType(true)
.execute();

const body = res.parse();
const resJson = JSON.parse(body.text());

replier.reply(JSON.stringify(resJson,null,4));
    */
  } catch(e) {replier.reply(e+e.lineNumber);}
  }
  
}
