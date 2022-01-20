
try {    
    var header = new Vue({
        el: '#header',
        template: TempNav,
        data: {
    
        },
        methods: {
            ActiveNavItem(topic) {
                var number;
                switch (topic) {
                    case 'EcologicalSuccession':
                        number = 0;
                        break;
                    case 'HabitatRiskAssessment':
                        number = 1;
                        break;
                    case 'CoastalBlueCarbon':
                        number = 2;
                        break;
                }
                var el = document.getElementsByClassName('navbar');
                for (var i = 0; i < Object.keys(el).length; i++) {
                    if (i != number) {
                        el[i].classList.remove('active')
                    } else {
                        el[i].classList.add('active')
                    }
                }
            }
        }
    })
    header.ActiveNavItem(topic)
    var footer = new Vue({
        el: '#footer',
        template: TempFooter
    })
} catch (e) {
    window.location.href = url
}
