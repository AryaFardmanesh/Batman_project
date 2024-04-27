class Client {
    constructor() {
        function treeElements() {
            return {
                inputGlobalSearch: $('#input-global-search'),
                buttonGlobalSearch: $('#button-global-search'),
                buttonBuyBook: $('#btn-buy-book'),
            };
        }

        this.elements = treeElements();

        this.rebootElements = function () {
            this.elements = treeElements();
        }

        this.messageBox = function (message = '') {
            // Start container
            const container = $('<div>', {
                class: 'position-fixed p-3 rounded bg-warning text-white'
            });
            $(container).css({
                top: '100px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '9',
            });
            $(container).text(message);
            // Finish container

            // Start btn
            const btn = $('<button>', {
                class: 'btn btn-primary'
            });
            $(btn).css({
                marginLeft: '40px'
            });
            $(btn).html('&times;');
            $(container).append(btn);

            $(btn).on('click', function () {
                $(container).remove();
            })
            // Finish btn

            $(document.body).append(container); // Append to body

            // Animation
            setTimeout(() => {
                const animationSpeed = 3000;
                $(container).fadeOut(animationSpeed);

                setTimeout(() => { $(container).remove(); }, animationSpeed);
            }, 1000);
            // Animation
        }
    }
}

// ********* Start *********
var client = new Client();

client.elements.buttonGlobalSearch.on('click', function (event) {
    client.messageBox('Sorry we cannot connect to server.\nTry later please.');
});

client.elements.buttonBuyBook.on('click', function (event) {
    event.preventDefault();
    client.messageBox('Sorry we cannot connect to server.\nTry later please.');
})
// ********* Finish *********