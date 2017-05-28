"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function constellation(t){constellationPreset(t,"default")}function constellationFull(t,e,s,i,r,n,o,a,p,h,l,c,u,d,f,m,v,y,g,x){instances.push(new Constellation(t,e,s,i,r,n,o,a,p,h,l,c,u,d,f,m,v,y,g,x))}function constellationPreset(t,e){var s=presetLookup(e,constellationPresets);instances.push(new Constellation(t,s.properties[0],s.properties[1],s.properties[2],s.properties[3],s.properties[4],s.properties[5],s.properties[6],s.properties[7],s.properties[8],s.properties[9],s.properties[10],s.properties[11],s.properties[12],s.properties[13],s.properties[14],s.properties[15],s.properties[16],s.properties[17],s.properties[18]))}function constellationRandom(t){constellationPreset(t,"random")}function constellationHue(t,e){var s=presetLookup("default",constellationPresets),i={name:"hue",properties:[s.properties[0],s.properties[1],s.properties[2],s.properties[3],s.properties[4],s.properties[5],s.properties[6],.05,s.properties[8],e,100,2,e,70,50,.05,0,0,!0]};instances.push(new Constellation(t,i.properties[0],i.properties[1],i.properties[2],i.properties[3],i.properties[4],i.properties[5],i.properties[6],i.properties[7],i.properties[8],i.properties[9],i.properties[10],i.properties[11],i.properties[12],i.properties[13],i.properties[14],i.properties[15],i.properties[16],i.properties[17],i.properties[18]))}function constellationHSL(t,e,s,i,r,n,o){var a=presetLookup("default",constellationPresets),p={name:"hue",properties:[a.properties[0],a.properties[1],a.properties[2],a.properties[3],a.properties[4],a.properties[5],a.properties[6],.05,a.properties[8],e,s,i,r,n,o,.07,0,0,!0]};instances.push(new Constellation(t,p.properties[0],p.properties[1],p.properties[2],p.properties[3],p.properties[4],p.properties[5],p.properties[6],p.properties[7],p.properties[8],p.properties[9],p.properties[10],p.properties[11],p.properties[12],p.properties[13],p.properties[14],p.properties[15],p.properties[16],p.properties[17],p.properties[18]))}function presetLookup(t,e){if("random"==t)return{name:"random",properties:[random(.5,2),random(.5,2),random(0,.99),random(.01,.5),random(0,1),random(20,100),random(.1,5),random(0,.01),random(50,200),random(0,360),random(0,100),random(0,100),random(0,360),random(0,100),random(0,100),random(0,1),random(0,1),random(0,1),!0]};for(var s=!1,i=0,r=0;r<e.length;r++)e[r].name==t&&(s=!0,i=r);return s?e[i]:e[0]}function random(t,e){return t+Math.random()*(e-t)}function plusOrMinus(){return Math.random()>.5?-1:1}var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}(),Star=function(){function t(e){_classCallCheck(this,t),this.x=random(0+e.starRadius,e.canvas.width-e.starRadius),this.y=random(0+e.starRadius,e.canvas.height-e.starRadius),this.r=e.starRadius*random(1-e.starRadiusJitter,1+e.starRadiusJitter),this.context=e.context,this.hue=e.foregroundHue+random(1,360)*e.foregroundHueJitter*plusOrMinus(),this.saturation=e.foregroundSaturation*random(1-e.foregroundSaturationJitter,1+e.foregroundSaturationJitter),this.lightness=e.foregroundLightness*random(1-e.foregroundLightnessJitter,1+e.foregroundLightnessJitter),this.opacity=100,this.constellation=e,this.vx=e.starVelocity*random(1-e.starVelocityJitter,1+e.starVelocityJitter)*plusOrMinus(),this.vy=e.starVelocity*random(1-e.starVelocityJitter,1+e.starVelocityJitter)*plusOrMinus()}return _createClass(t,[{key:"connections",value:function(){for(var t,e=new Array,s=0;s<this.constellation.stars.length;s++)this.constellation.stars[s]!=this&&Math.abs(this.x-this.constellation.stars[s].x)<this.constellation.connectionRadius&&Math.abs(this.y-this.constellation.stars[s].y)<this.constellation.connectionRadius&&e.push(this.constellation.stars[s]);this.opacity=e.length/10;for(var s=0;s<e.length;s++)t=this.constellation.connectionOpacity,Math.abs(this.x-this.constellation.mx)<this.constellation.revealRadius&&Math.abs(this.y-this.constellation.my)<this.constellation.revealRadius&&(t+=1-(Math.abs(this.x-this.constellation.mx)+Math.abs(this.y-this.constellation.my))/2/this.constellation.revealRadius),this.context.beginPath(),this.context.moveTo(this.x,this.y),this.context.lineTo(e[s].x,e[s].y),this.context.strokeStyle="hsla("+this.hue+","+this.saturation+"%,"+this.lightness+"%,"+t+")",this.context.lineWidth=this.constellation.connectionWidth,this.context.stroke(),this.context.closePath()}},{key:"move",value:function(){(this.x<=0+this.r||this.x>=this.constellation.canvas.width)&&(this.vx=-this.vx),(this.y<=0+this.r||this.y>=this.constellation.canvas.height)&&(this.vy=-this.vy),this.x+=this.vx,this.y+=this.vy}},{key:"draw",value:function(){this.move(),this.context.beginPath(),this.context.arc(this.x,this.y,this.r,0,2*Math.PI),this.context.fillStyle="hsla("+this.hue+","+this.saturation+"%,"+this.lightness+"%,"+(.1+this.opacity)+")",this.context.fill(),this.context.closePath()}}]),t}(),Constellation=function(){function t(e,s,i,r,n,o,a,p,h,l,c,u,d,f,m,v,y,g,x,w){_classCallCheck(this,t),constellationCount++,this.e=document.getElementById(e),this.e.innerHTML='<canvas id="constellation-canvas-'+constellationCount+'"></canvas>',this.canvas=document.getElementById("constellation-canvas-"+constellationCount),this.context=this.canvas.getContext("2d"),this.canvas.style.backgroundColor="hsl("+c+","+u+"%,"+d+"%)",this.canvas.style.display="block",this.starDensity=s,this.starRadius=i,this.starRadiusJitter=r,this.starVelocity=n,this.starVelocityJitter=o,this.connectionRadius=a,this.connectionWidth=p,this.connectionOpacity=h,this.revealRadius=l,this.foregroundHue=f,this.foregroundSaturation=m,this.foregroundLightness=v,this.foregroundHueJitter=y,this.foregroundSaturationJitter=g,this.foregroundLightnessJitter=x,this.responsive=w,this.mouseInteractions=!0,this.mx=0,this.my=0,this.resize(),this.fill()}return _createClass(t,[{key:"fill",value:function(){this.stars=new Array;for(var t=0;t<this.numberOfStars;t++)this.stars.push(new Star(this))}},{key:"mouse",value:function(t){var e=this.canvas.getBoundingClientRect();this.mx=t.clientX-e.left,this.my=t.clientY-e.top}},{key:"resize",value:function(){this.responsive&&(this.canvas.width=this.e.offsetWidth,this.canvas.height=this.e.offsetHeight,this.numberOfStars=this.starDensity*(this.e.offsetWidth*this.e.offsetHeight)/5e3,this.fill())}},{key:"draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.stars.length;t++)this.stars[t].connections();for(var t=0;t<this.stars.length;t++)this.stars[t].draw()}}]),t}(),constellationCount=0,constellationPresets=[{name:"default",properties:[2,1,.5,.03,.1,70,.5,.1,100,0,0,2,0,0,30,0,0,.2,!0]},{name:"Starry Night",properties:[1,1,.5,.2,.2,70,1,.02,100,240,50,2,200,30,70,0,0,0,!0]},{name:"Hot Sparks",properties:[5,.5,.1,.05,.5,30,.5,0,100,0,100,2,15,100,60,.1,0,0,!0]},{name:"Flying Stuff",properties:[3,.5,0,.2,.3,20,2,1,250,141,89,79,0,0,100,0,0,0,!0]},{name:"Clown Car",properties:[1,10,.5,.2,.5,70,3,.02,100,100,100,100,200,80,70,5,0,0,!0]},{name:"Love Is In The Air",properties:[2,10,.5,.2,.2,90,1.5,.05,100,320,100,95,320,80,90,.05,0,.04,!0]},{name:"Azure Pop",properties:[1,1,.5,.2,.2,90,.5,.05,100,179,46,93,307,79,58,0,0,0,!0]},{name:"Fresh Turboscent",properties:[1,1,.5,.2,.2,90,.5,.1,100,187,78,31,61,25,80,0,0,0,!0]},{name:"Man of Steel",properties:[1,1,.5,.2,.2,90,.5,.3,100,233,94,10,358,98,24,0,0,0,!0]}],instances=new Array;setInterval(function(){for(var t=0;t<instances.length;t++)instances[t].draw()},16),window.addEventListener("mousemove",function(t){for(var e=0;e<instances.length;e++)instances[e].mouseInteractions&&instances[e].mouse(t)},!1),window.addEventListener("resize",function(){for(var t=0;t<instances.length;t++)instances[t].responsive&&instances[t].resize()},!1);