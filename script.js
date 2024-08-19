document.getElementById("loveButton").addEventListener("click", function() {
    const lovePage = window.open("", "", "width=600,height=600");

    lovePage.document.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffe6e6;
                    font-family: Arial, sans-serif;
                    overflow: hidden;
                    position: relative;
                }
                .love-counter {
                    font-size: 100px;
                    color: red;
                    text-align: center;
                }
                .text {
                    font-size: 24px;
                    color: #333;
                    margin-top: 10px;
                    text-align: center;
                }
                .heart-symbol {
                    font-size: 50px;
                    color: red;
                    text-align: center;
                    margin-top: 10px;
                }
                @keyframes fallingHearts {
                    from {
                        top: -10%;
                    }
                    to {
                        top: 110%;
                    }
                }
                .falling-heart {
                    position: absolute;
                    font-size: 50px;
                    animation: fallingHearts 5s linear infinite;
                    opacity: 0.7;
                }
                .falling-heart:nth-child(1) { left: 5%; animation-duration: 3s; }
                .falling-heart:nth-child(2) { left: 15%; animation-duration: 4s; }
                .falling-heart:nth-child(3) { left: 25%; animation-duration: 5s; }
                .falling-heart:nth-child(4) { left: 35%; animation-duration: 3.5s; }
                .falling-heart:nth-child(5) { left: 45%; animation-duration: 4.5s; }
                .falling-heart:nth-child(6) { left: 55%; animation-duration: 5.5s; }
                .falling-heart:nth-child(7) { left: 65%; animation-duration: 3.2s; }
                .falling-heart:nth-child(8) { left: 75%; animation-duration: 4.2s; }
                .falling-heart:nth-child(9) { left: 85%; animation-duration: 3.8s; }
                .falling-heart:nth-child(10) { left: 95%; animation-duration: 5s; }
            </style>
        </head>
        <body>
            <div class="love-counter">❤️ 0</div>
            <div class="text">Ami Tomay Unlimited Valobashi Ela</div>
            <div class="heart-symbol">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <script>
                let counter = 1;
                const loveCounter = lovePage.document.querySelector('.love-counter');

                setInterval(() => {
                    loveCounter.innerText = "❤️ " + counter;
                    counter += 10; // সংখ্যা বৃদ্ধির গতি ১০ গুণ বৃদ্ধি করা হয়েছে
                }, 5); // প্রতি 5 মিলিসেকেন্ডে সংখ্যা বাড়বে

                const fallingHearts = lovePage.document.querySelectorAll('.falling-heart');
                fallingHearts.forEach(heart => {
                    heart.addEventListener('animationiteration', () => {
                        heart.style.display = 'none'; // পতিত হওয়া ইমোজি নিচে পড়লে অদৃশ্য হবে
                    });
                });
            </script>
        </body>
        </html>
    `);
});
