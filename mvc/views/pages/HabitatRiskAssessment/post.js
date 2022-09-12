var tempPost = `
    <div id="post" style="margin-bottom: 300px;">
    <h4><small>Can Gio project</small></h4>
    <hr>
    <h2 style="font-weight: 800;">Đánh giá rủi ro sinh cảnh - Habitat risk assessment</h2>
    <h5><span class="glyphicon glyphicon-time"></span> Post by {{ PostInfo['author'] }}, {{ PostInfo['Month'] }} {{ PostInfo['Date'] }}, {{ PostInfo['Year'] }}.</h5>
    <h5><span class="label label-danger">Environment</span> <span class="label label-primary">Simulation</span></h5><br>
    <p>Chuyên đề ứng dụng mô hình đánh giá rủi ro sinh cảnh Habitat risk assessment - HRA (Natural Capital project)</p>
    <div class="content" style="background-color: rgb(223 223 255); padding: 10px;">
        <h4 style="font-weight: 750;">Mục lục</h4>
        <ol>
            <li v-for="item in PostContent"><a v-bind:href="'#'+item.Label" v-on:click="scrollToBottom($event,item.Label)">{{ item.Index }}</a></li>
        </ol>
    </div>
    <div class="content" v-for="item in PostContent"> 
        <h4 v-bind:id="item.Label" style="color:red; font-weight: 700;">{{ item.Index }}</h4>
        <div v-html="item.Content"></div>
    </div>
    <br><br>
    </div>
`