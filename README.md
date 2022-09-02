# Luna.js

A dependency-free JavaScript WYSIWYG HTML editor built by Kirill Tregubov. No WordPress required.

[View Demo](https://lunajs.vercel.app/)

[View Examples](https://lunajs.vercel.app/examples.html)

[View Documentation](https://lunajs.vercel.app/documentation.html)

[View Library Source](https://lunajs.vercel.app/luna.js)

## Get Started

To get started you must download and add the [luna script file](https://github.com/KirillTregubov/lunajs/blob/main/pub/luna.js) and [stylesheet](https://github.com/KirillTregubov/lunajs/blob/main/pub/luna.css) to your document head.

```html
<head>
  <script src="luna.js"></script>
  <link rel="stylesheet" href="luna.css" />
</head>
```

Now you are able to call the Lunajs initializer and create an interface using the following code:

```javascript
new Lunajs().init();
```
