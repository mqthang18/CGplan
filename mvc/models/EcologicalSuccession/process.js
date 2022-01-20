try {
    var post = new Vue({
        el: "#post", 
        template: tempPost,
        data: {
            PostInfo: PostInformation,
            PostContent: PostData 
        },
        methods: {
            scrollToBottom(e,id) {
                // Ý tưởng get id của el sau đó lấy vị trí của el đó => sử dụng scrollTo để di chuyển tới el  
                e.preventDefault();
                var element = document.getElementById(id);
                var y = element.offsetTop; 
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }
    })
} catch (e) {
    window.location.href = url
}
