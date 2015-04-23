---
languages: javascript
tags: jquery, plugin
type: code along, example, exercise
resources: 0
---

# jQuery Color Cycle Plugin

jQuery plugin that continuously fades the background color of selected element(s). Has options for setting colors as an array as well as animation time and loop time.

[plugins.jquery.com/colorcycle/](http://plugins.jquery.com/colorcycle/)

## Demo
  
  * [Demo](http://learn-co-curriculum.github.io/jquery-color-cycle-plugin/)
  * [JSFiddle](http://jsfiddle.net/flatiron_school/yw7g6xac/18/)

## Usage

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jQuery Color Cycle Plugin Demo</title>
  <style>
    a {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <h1>jQuery Color Cycle Plugin Demo</h1>
  <h2>Example</h2>

    <a>1</a>
    <a>2</a>
    <a>3</a>
    <a>4</a>
    <a>5</a>

  <!-- jQuery v1.8.3 -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  
  <!-- jQuery UI v 1.8.23 -->
  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
  
  <!-- jQuery Color Cycle Plugin -->
  <script src="color-cycle.min.js"></script>
  
  <!-- Usage -->
  <script>
    $(function(){

      $('a').colorCycle();

    });
  </script>
</body>
</html>
```

[Source Code](index.html)

## Customizing options

The colorCycle() method can be passed an object with the following settings available:

```
$('a').colorCycle({

  // colors as array on strings pass any valid CSS color value.
  colors: ['red', 'rgb(0,255,0)', '#0000ff'],
  
  // starting and end range for animation time in milliseconds.
  animationStartRange: 1000,
  animationEndRange: 2000,

  // starting and end range for loop time in milliseconds.
  loopStartRange: 1000,
  loopEndRange: 4000
});
```

## License

[MIT](MIT-LICENSE.txt)

## Credits

[Authors](AUTHORS.txt)

Built with ♥ at the [Flatiron School](http://flatironschool.com).
