# Intermediate

Welcome to the intermediate project! This folder contains a more
advanced web project to help you get started with HTML, CSS, and JavaScript.

## Structure

- `index.html`: The main HTML file for the project.
- `styles.css`: The CSS file for custom styles.
- `main.js`: The JavaScript file for custom scripts.

## index.html

The `index.html` file includes basic HTML structure and references to
Bootstrap for styling and interactive components. It also links to
`styles.css` for custom styles and `main.js` for custom JavaScript
functionality. Below is an example of how these files are included:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Intermediate Project</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Welcome to the Intermediate Project</h1>
      <button class="btn btn-primary" onclick="getLukeSkywalker()">Go Fetch!</button>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

## styles.css

The `styles.css` file may contain custom styles for the project. Below is an example of a simple CSS rule:

```css
body {
  background-color: #f8f9fa;
}

h1 {
  color: #343a40;
}
```

## main.js

The `main.js` file contains custom JavaScript for the project.
It is loaded as a "module" and can be used to add interactivity and dynamic behavior to the web page.
Remember that connecting JavaScript to HTML (with a module loaded javascript) must be done
with windowed functions as shown in the main.js in combination with the swapi.js file
inside the api folder.

Below is an example of a simple JavaScript function:

```javascript
document.getElementById('exampleButton').addEventListener('click', function () {
  alert('Button clicked!');
});
```

## References

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/): Learn more about Bootstrap components and how to use them.
- [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element): Comprehensive guide to HTML elements.
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS): Comprehensive guide to CSS.
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Comprehensive guide to JavaScript.

## How to Proceed

1. Open `index.html` in your browser to see the basic structure and Bootstrap components in action.
2. Explore the Bootstrap, CSS, and JavaScript documentation to understand how to use different components and write custom styles and scripts.
3. Modify `index.html`, `styles.css`, and `main.js` (and other js files) to add your own content and experiment with different Bootstrap components, styles, and JavaScript functionality.

Happy coding!
