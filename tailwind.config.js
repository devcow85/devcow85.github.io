module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './**/*.html',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}