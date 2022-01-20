var url = window.location.href; 
url = new URL(url);
var topic = url.searchParams.get('topic');
let model, view;
let block = {
    '0': ['body', {'TagName':'script','src':'./mvc/views/blocks/navigationBar.js'}],
    '1': ['body', {'TagName':'script','src':'./mvc/views/blocks/footer.js'}],
    '2': ['body', {'TagName':'script','src':'./mvc/models/blockProcess.js'}]
}


if (topic != null) {
    model = {
                'pos': 'body', 
                'TagName': 'script', 
                'src':'./mvc/models/[topic]/process.js'.replace('[topic]', topic)
            }
    view = {
                0: {
                    'pos': 'body',
                    'TagName': 'script', 
                    'src': './mvc/views/pages/[topic]/post.js'.replace('[topic]', topic)
                },
                1: {
                    'pos': 'body',
                    'TagName': 'script',
                    'src': './mvc/views/pages/[topic]/data.js'.replace('[topic]', topic)
                }
            }
    for (var i = 0; i < Object.keys(block).length; i++) {
        AddTag(block[i][0], block[0][1]['TagName'], block[i][1]['src'])
    }

    for (i = 0; i < Object.keys(view).length; i++) {
        AddTag(view[i]['pos'],view[i]['TagName'], view[i]['src'])
    }

    AddTag(model['pos'], model['TagName'], model['src'])
} else {
    for (var i = 0; i < Object.keys(block).length; i++) {
        AddTag(block[i][0], block[0][1]['TagName'], block[i][1]['src'])
    }
}

function AddTag(pos /*Position of DOM*/, TagName /*DOM name*/, src /*Source of file*/) {
    var el = document.createElement('script');
    el.setAttribute('src', src)
    document.body.appendChild(el); 
}


