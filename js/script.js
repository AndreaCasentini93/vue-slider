const app = new Vue (
    {
        el: "#root",
        data: {
            images: [
                "img/img1.jpg",
                "img/img2.jpg",
                "img/img3.jpg",
                "img/img4.jpg",
                "img/img5.jpg",
                "img/img6.jpg",
                "img/img7.jpg"
            ],
            altPlaceholder: "Immagine Paesaggio",
            imageIndex: 0,
            autoPlay: ""
        },
        methods: {
            goToImage: function(newIndex) {
                clearInterval(this.autoPlay);
                this.imageIndex = newIndex;
            },
            before: function() {
                this.imageIndex--;
                if (this.imageIndex == -1) {
                    this.imageIndex = (this.images.length - 1);
                }
            },
            after: function() {
                this.imageIndex++;
                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            },
            clickBefore: function() {
                clearInterval(this.autoPlay);
                this.before();
            },
            clickAfter: function() {
                clearInterval(this.autoPlay);
                this.after();
            }
        },
        mounted: function() {
            this.autoPlay = setInterval(this.after, 3000);
        }
    }
);