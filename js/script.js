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
        },
        methods: {
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
            }
        },
        mounted: function() {
            const self = this;
            setInterval(function() {
                self.imageIndex++
                if (self.imageIndex == self.images.length) {
                    self.imageIndex = 0;
                }                
            }, 3000);
        }
    }
);