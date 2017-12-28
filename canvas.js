//map.png


class XCanvas
{
	constructor(el)
	{
		this.name = "";
		this.container = null;
		this.canvas = el;
		this.ctx = null;
		this.configuration = {contextVal: '2d', width: 0, height: 0, showXY: false};
	}
	
	config(contextVal, width, height, showXY) 
	{		
		this.configuration.contextVal = contextVal;
		this.configuration.width = width;
		this.configuration.height = height;
		
		this.canvas.attr("width", width);
		this.canvas.attr("height", height);
		this.canvas.width(width);
		this.canvas.height(height);
		this.ctx = this.canvas[0].getContext(contextVal);
		
		if(showXY === null)
		{
			showXY = false;
		}
		this.showXY = showXY;
		
		if(showXY === true)
		{
			this.addMouseEvent();
		}
	}
	
	addMouseEvent()
	{
		//Allows clicking of map to get xy by point and click
		var ctx = this.ctx; //Localize before handing off to function
		var canvas = this.canvas;
		var name = this.name;
		
		//Add textbox after canvas
		$("<input style='clear:both; display: block;' type='text' id='XCanvas" + name + "_mousePos" + "' />").appendTo(this.container);
		
		canvas.click(function(e)
		{
			var parentOffset = $(this).parent().offset(); 
			//or $(this).offset(); if you really just want the current element's offset
			var relX = e.pageX - parentOffset.left;
			var relY = e.pageY - parentOffset.top;
			$('#XCanvas' + name + "_mousePos").val(relX + ', ' + relY);
		});
	}
	
	addImg(imgPath, x, y, width, height)
	{
		var img = new Image();
		img.src = imgPath;
		
		var ctx = this.ctx; //Localize before handing off to function
		img.addEventListener('load', function() 
		{
			ctx.drawImage(img, x, y, width, height);
		}, false);
	}
	
	addText(someText, fontFamily, fontSize, fontColor, x, y)
	{
		var ctx = this.ctx; //Localize before handing off to function
		var canvas = this.canvas;
		
		setTimeout(function() //Wait a few ms for fonts to load
		{
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			//ctx.strokeRect(x - 3, (y - fontSize.replace('px', '') - 3), 70, 50); //Rectangle //Dynamic https://stackoverflow.com/questions/33137588/how-do-i-draw-a-rectangle-around-a-text-in-html-canvas
			ctx.font = fontSize + ' ' + fontFamily;
			ctx.fillStyle = fontColor;
			ctx.fillText(someText, x, y);
		}, 50);
	}
	
	addsvg()
	{
		var ctx = this.ctx; //Localize before handing off to function
		var canvas = this.canvas;
		//ctx.clearRect(0, 0, canvas.width, canvas.height);
		var path4 = new Path2D("M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z");
		ctx.zIndex = 15;
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 4;
		ctx.stroke(path4);
	}
	
	/*
		Draw a rectangle 
		
		fillRect(x, y, width, height)
		Draws a filled rectangle.
		strokeRect(x, y, width, height)
		Draws a rectangular outline.
		clearRect(x, y, width, height)
		Clears the specified rectangular area, making it fully transparent.
	
	*/
	
	/*
		Arc
		ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
	*/
	
	/*
		Circle
		var circle = new Path2D();
		circle.moveTo(125, 35);
		circle.arc(100, 35, 25, 0, 2 * Math.PI);

		ctx.fill(circle);
	*/
	
	/*
		SVG Data
		var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
		ctx.fill(p);
	*/
	
	
	
	
}

//Auto configures canvas containers on page
$(function()
{
	$("[data=XCanvas]").each(function()
	{
		var $tempf = $('<canvas class="fa"></canvas>');
		
		window[$(this).attr('name')] = new XCanvas($tempf);
		window[$(this).attr('name')].name = $(this).attr('name');
		window[$(this).attr('name')].container = this;
		
		$($tempf).appendTo(this);
	});	
});



/* FontAwesome
 FA Codes http://astronautweb.co/snippet/font-awesome/
		  http://seehowsupport.com/font-awesome/
 \uF276 Map Pin
 \uF08d Thumbtack
 \uF108 Computer
 \uF0F1 Stethoscope TMC
 \uF05A Info
 \uF236 Hotel
 \uF182 \uF183 \uF193 Restroom (female male wheelchair)
 \uF0F5 Food
 \uF046 Checkbox Frontdesk
 \uF207 Bus Transportation
 \uF0EB Lightbulb Class
***/

//Must add fa class somewhere on the page using this added to canvas during development

