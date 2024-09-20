/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.ts"],
  theme: {
    extend: {
      keyframes: {
        // progress dots
        progress: {
          "0%, 60%": {
            transform: "translateY(0px)",
          },
          "30%": {
            transform: "translateY(-30px)",
          },
        },
        // three bounce
        "three-bounce": {
          "0%, 100%": {
            transform: "scale(0.5)",
            opacity: 0.5,
          },
          "50%": {
            transform: "scale(2)",
            opacity: 1,
          },
        },
        // line-wave
        "line-wave": {
          "0%, 100%": {
            transform: "scaleY(0.5)",
            opacity: 0.5,
          },
          "50%": {
            transform: "scaleY(2)",
            opacity: 1,
          },
        },
        // rotate dot in circle
        circle: {
          "0%": {
            transform: "rotate(-360deg)translate(25px)rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)translate(25px)rotate(0deg)",
          },
        },
        // rotate two dots
        "rotate-in": {
          "0%, 100%": {
            transform: "scale(2)",
            opacity: 1,
          },
          "50%": {
            transform: "scale(1)",
            opacity: 0.5,
          },
        },
        "rotate-out": {
          "0%, 100%": {
            transform: "rotate(-360deg)translate(24px)rotate(0deg)scale(1.5)",
            opacity: 1,
          },
          "50%": {
            transform: "rotate(0deg)translate(24px)rotate(-360deg)scale(1)",
            opacity: 0.5,
          },
        },
        // square fill
        "square-fill": {
          "0%, 50%": {
            transform: "rotate(-360deg)",
          },
        },
        "square-fill-in": {
          "0%": {
            transform: "scaleY(0)",
            "transform-origin": "bottom",
          },
          "50%, 100%": {
            transform: "scaleY(1)",
            background: "rgb(219, 39, 119)",
          },
        },
        // rotate square and circle
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotateY(-180deg)",
          },
          "100%": {
            transform: "rotate(-180deg)",
          },
        },
        // heart jumping
        "jump-heart": {
          "0%, 100%": {
            transform: "translateY(-30px)rotate(45deg)",
          },
          "50%": {
            transform: "translateY(0px)rotate(45deg) ",
          },
        },
        "swapping-middle": {
          "0%": {
            transform: "translateY(-40px)",
          },
          "100%": {
            transform: "translate(40px, 40px)",
          },
        },
        "swapping-left": {
          "0%": {
            transform: "translate(40px, 40px)",
          },
          "100%": {
            transform: "translate(-40px, 40px)",
          },
        },
        "swapping-right": {
          "0%": {
            transform: "translate(-40px, 40px)",
          },
          "100%": {
            transform: "translateY(-40px)",
          },
        },
        line: {
          "0%, 100%": {
            transform: "scaleX(0.8)",
            opacity: 0.5,
          },
          "50%": {
            transform: "scaleX(1.5)",
            opacity: 1,
          },
        },
        // pacman
        pacman: {
          "0%, 100%": {
            "clip-path": "polygon(100% 74%, 44% 48%, 100% 21%)",
          },
          "25%, 75%": {
            "clip-path": "polygon(100% 60%, 44% 48%, 100% 40%)",
          },
          "50%": {
            "clip-path": "polygon(100% 50%, 44% 48%, 100% 50%)",
          },
        },
        //zoom
        zoom: {
          "0%, 100%": {
            transform: "scale(0.8)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        //spin
        spin: {
          "0%": {
            transform: "rotate(-180deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },
        //wave
        wave: {
          "0%": {
            "box-shadow":
              "0 0 0 0 rgba(219, 39, 119, 0.3), 0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3),0 0 0 3em rgba(219, 39, 119, 0.3)",
          },
          "100%": {
            "box-shadow":
              "0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3), 0 0 0 3em rgba(219, 39, 119, 0.3), 0 0 0 4em rgba(219, 39, 119, 0)",
          },
        },
        //circle-left
        "circle-left": {
          "0%, 100%": {
            transform: "translateX(0px)scale(1)",
          },
          "50%": {
            transform: "translateX(-30px)scale(2)",
          },
          "70%": {
            transform: "translateX(30px)scale(2)",
          },
        },
        //circle-right
        "circle-right": {
          "0%, 100%": {
            transform: "translateX(0px)scale(1)",
          },
          "50%": {
            transform: "translateX(30px)scale(2)",
          },
          "70%": {
            transform: "translateX(-30px)scale(2)",
          },
        },
        // forwarding-left-right
        propel: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(25%)" },
          "40%": { transform: "translateX(-25%)" },
          "60%": { transform: "translateX(25%)" },
          "100%": { transform: "translateX(-25%)" },
        },
        // rotate left right 90deg
        displace: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-90deg)" },
          "40%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        // progress dots
        progress: "progress 1s linear infinite",

        //three-bounce
        "three-bounce": "three-bounce 1s ease-in-out infinite",

        //line-wave
        "line-wave": "line-wave 1s ease-in-out infinite",

        // Swapping Dots
        "swapping-middle": "swapping-middle 1s ease-in-out infinite",
        "swapping-left": "swapping-left 1s ease-in-out infinite",
        "swapping-right": "swapping-right 1s ease-in-out infinite",

        // rotate dot in circle
        circle: "circle 2s ease-in-out infinite",

        // rotate two dots
        "rotate-in": "rotate-in 2s ease-in-out infinite",
        "rotate-out": "rotate-out 2s ease-in-out infinite",

        // square fill
        "square-fill": "square-fill 2s ease-in-out infinite",
        "square-fill-in": "square-fill-in 2s ease-in-out infinite",

        // rotate square and circle
        rotate: "rotate 1.5s linear infinite",

        // heart jumping
        "jump-heart": "jump-heart 1.5s ease-out infinite",
        line: "line 1.5s ease-out infinite",

        // pacman
        pacman: "pacman 1s ease-out infinite",

        // arc rotation
        "zoom-in": "zoom 1.5s ease-out infinite", // zoom in
        spin: "spin 2s linear infinite", // zoom in

        //clock
        "spin-fast": "spin 2s linear infinite", // clock spin fast
        "spin-slow": "spin 12s linear infinite", // clock spin slow

        // wave
        wave: "wave 1s linear infinite",

        // twin-circle
        "circle-left": "circle-left 2s ease-in-out infinite",
        "circle-right": "circle-right 2s ease-in-out infinite",

        // forwarding-arrow
        "arrow-forwarding": "propel 5s infinite",

        // rotating squares
        displace: "displace 5s infinite",
      },
    },
  },
  plugins: [],
};
