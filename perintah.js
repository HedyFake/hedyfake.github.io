
$('body').terminal({
    saya: function (name) {
        this.echo('Hello, ' + name +
            ' Welcome to My Website');
    },
    
    instagram:function(){
        window.location.href="https://www.instagram.com/my_name736/"
    },
    profile:function(){
        window.location.href="about.html"
    },

    cuaca:function(kota){
        window.location.href="http://wttr.in/" + kota
    },
    ddos:function(){
        window.location.href="ddos.html"
    }, 

    yt: function(na){
        $.get("https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" + na +"&key=AIzaSyBAer1fK1IHxojU0vYq1ZwzchSPmgoLBmM",
            function(klo){
            const ck = JSON.stringify(klo)
            const pd = JSON.parse(ck)
            document.write('\t| Name : ' + pd.items[0].snippet.title)
            document.write('\t| Deskription : ' + pd.items[0].snippet.description)
            document.write('\t| Made :' + pd.items[0].snippet.publishedAt)
            document.write('\t| Profile :' + pd.items[0].snippet.thumbnails.high.url)
            document.write('\t| Location :' + pd.items[0].snippet.country)
            document.write('\t| Subscribe :' + pd.items[0].snippet.subscriberCount)
            document.write('\t| Video :' + pd.items[0].snippet.videoCount)
            document.write()
        });
    },
    

    dns: function(dns){
        $.get('https://api.hackertarget.com/dnslookup/?q=' + dns,
            function(look){
                Swal.fire(look)
            })
    },

    ip: function(ip){
        $.get('http://ip-api.com/json/'+ ip,
            function(myArr){
                const myArrStr = JSON.stringify(myArr);
                const asu = JSON.parse(myArrStr);
                document.write('\n| Status : ' + asu.status);
                document.write('\n| Country : ' + asu.country);
                document.write('\n| City : ' + asu.city);
                document.write('\n| Region : ' + asu.regionName)
                document.write('\n| TimeZone : ' + asu.timezone)
                document.write("\n| Org : " + asu.org)
                document.write('\n| Map : https://www.google.com/maps/place/' + asu.lat, "+" + asu.lon)
                document.write('\n| Query : ' + asu.query)
        }
            );
    },
    ls: function(){
        this.echo('Desktop \tDocuments \tDownloads \tMusic \tPictures \tPublic \tTemplates')
    },

    date:function(){
        this.echo(Date())
    },

    msg: function(){
        Swal.fire({
            title: 'Number Phone',
            html:
            '<form action="/msg.php">' +
            '<input id="phone" class="phone"/>',
        })
    },
    play:function play(nama){
        Swal.fire('Memutar Music');
        var audio=document.getElementById(nama); audio.play();
    },
    
    refresh: function(){
        window.location.reload();
    },
    stop: function pause(lagu){
        var audio=document.getElementById(lagu); audio.pause();
    },
    ifconfig: function(){
        $.get('https://api.ipify.org/',
        function(ip){
            Swal.fire('You ip public : ' + ip)
        }
        );
    }

}, {
    greetings: 'Microsoft Windows [Version 10.0.19042.1348]'
            + '\n(c) Microsoft Corporation. All rights reserved.'
});
