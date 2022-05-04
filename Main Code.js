const scriptName = "핑퐁 챗봇";

const Key = "";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg.length > 2 && msg.substr(0, 1) == ("\"") && msg.substr(msg.length-1, 1) == ("\"")) {
        try {
            
            var json = {
                "request": { "query": msg.slice(1,-1) }
            };
        
            var message = JSON.parse(
                org.jsoup.Jsoup.connect("https://builder.pingpong.us/api/builder/605b0e30e4b078d873a52a7d/integration/v0.2/custom/"+Key)
                .header("Authorization", "Basic "+Key)
                .header("Content-Type", "application/json; charset=utf-8")
                .requestBody(JSON.stringify(json))
                .ignoreContentType(true).ignoreHttpErrors(true).post().text());
            
            try {
                replier.reply(message.response.replies[0].text);
            } catch (e) {
                replier.reply(message.response.replies.text);
            }
        

        } catch(e) {
            replier.reply(e+e.lineNumber +"122");
        }
    }
  
}
