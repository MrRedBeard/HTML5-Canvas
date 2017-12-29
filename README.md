# HTML5-Canvas-JS-Library (Work in progress)
### Demo of HTML5 Canvas and JavaScript

Created a JS class to handle canvas actions

![alt text](https://raw.githubusercontent.com/MrRedBeard/HTML5-Canvas-JS-Library/master/MapDemo.png)

#### See examples in index.html

### From This

```javascript
<canvas id="myCanvas" class="canvas" width="500" height="500" ></canvas>

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var img = new Image();
img.src = imgpath;
//Wait for image to load
img.addEventListener('load', function() 
{
	ctx.drawImage(img, x, y, width, height);
}, false);

//Wait a few ms for fonts/images to load
setTimeout(function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.font='30px FontAwesome';
	ctx.fillText('\uF047',20,50);
}, 50);
```

### To This

```javascript
<div name="example" data="XCanvas"></div>
example.config('2d', '800px', '480px', true); //Config
example.addImg('map.png', 0, 0, 800, 480); //Build from background to front so background images first
example.addText('\uF276', 'FontAwesome', '48px', "#8c41f4", 651, 73); //Pin
```

### Supports

* FontAwesome fonts and left room to use others
* Images
* Text

#### To Use

Requires JQuery 3.2.1
Add js file
<script src="canvas.js"></script>
Add a div give it a unique name and add data="XCanvas"
<div name="example" data="XCanvas"></div>
Add script
<script>
example.config('2d', '800px', '480px', true); //Config
example.addImg('map.png', 0, 0, 800, 480); //Build from background to front so background images first
example.addText('\uF276', 'FontAwesome', '48px', "#8c41f4", 651, 73); //Pin
</script>

#### Note on configuration 
True/False - true adds a textbox that displays coordinates when clicking on canvas.
example.config('2d', '800px', '480px', true); //Config
