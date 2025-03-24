module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          "glass-dark": "rgba(16, 18, 27, 0.7)",
          "glass-light": "rgba(255, 255, 255, 0.1)",
          "neon-blue": "#00d4ff",
          "neon-purple": "#7c3aed",
        },
        backdropBlur: {
          xs: "4px",
        },
      },
    },
    // Remove any @tailwindcss/postcss references here
    plugins: [],  
  };