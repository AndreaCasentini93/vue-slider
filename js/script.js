/*
Rifare l'esercizio dello slider come fatto assieme in classe.

Bonus:
Gestire il cambio dell'immagine al click sui pallini in basso (nav);
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
*/

const app = new Vue (
    {
        el: "#root",
        data: {
            img: {
                src: [
                    "img/img1.jpg",
                    "img/img2.jpg",
                    "img/img3.jpg",
                    "img/img4.jpg",
                    "img/img5.jpg",
                    "img/img6.jpg",
                    "img/img7.jpg"
                ],
                alt: "Immagine Paesaggio",
                imageIndex: 0
            }
        },
        methods: {

        }
    }
);