(window["webpackJsonprubiks-cube-web"]=window["webpackJsonprubiks-cube-web"]||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var s=i(1),a=i.n(s),r=i(5),n=i.n(r),o=(i(14),i(15),i(2)),h=i(3),u=i(0);function c(t,e,i){var s,a,r;u.d.call(this),this.type="RoundedBoxGeometry",i=isNaN(i)?1:Math.max(1,Math.floor(i)),s=a=r=t,e*=t;var n=s/2-(e=Math.min(e,Math.min(s,Math.min(a,Math.min(r)))/2)),o=a/2-e,h=r/2-e;this.parameters={width:s,height:a,depth:r,radius:e,radiusSegments:i};var c=i+1,l=c*i+1<<3,p=new u.c(new Float32Array(3*l),3),f=new u.c(new Float32Array(3*l),3),d=[],m=[],v=new u.s,g=[],y=[],b=[],k=c*i,w=c*i+1;!function(){for(var t=[new u.s(1,1,1),new u.s(1,1,-1),new u.s(-1,1,-1),new u.s(-1,1,1),new u.s(1,-1,1),new u.s(1,-1,-1),new u.s(-1,-1,-1),new u.s(-1,-1,1)],s=0;s<8;s++)d.push([]),m.push([]);for(var a=Math.PI/2,r=new u.s(n,o,h),c=0;c<=i;c++){var l,p=c/i*a,f=Math.cos(p),b=Math.sin(p);if(c!==i)for(var k=0;k<=i;k++){var w=k/i*a;v.x=f*Math.cos(w),v.y=b,v.z=f*Math.sin(w),l=v.clone().multiplyScalar(e).add(r),d[0].push(l),g.push(l),x=v.clone().normalize(),m[0].push(x),y.push(x)}else{v.set(0,1,0),l=v.clone().multiplyScalar(e).add(r),d[0].push(l),g.push(l);var x=v.clone();m[0].push(x),y.push(x)}}for(var M=1;M<8;M++)for(s=0;s<d[0].length;s++)l=d[0][s].clone().multiply(t[M]),d[M].push(l),g.push(l),x=m[0][s].clone().multiply(t[M]),m[M].push(x),y.push(x)}(),function(){var t=k,e=k+w,s=k+2*w,a=k+3*w;b.push(t),b.push(e),b.push(s),b.push(t),b.push(s),b.push(a),t=k+4*w,e=k+5*w,s=k+6*w,a=k+7*w,b.push(t),b.push(s),b.push(e),b.push(t),b.push(a),b.push(s),t=0,e=w,s=4*w,a=5*w,b.push(t),b.push(s),b.push(e),b.push(e),b.push(s),b.push(a),t=2*w,e=3*w,s=6*w,a=7*w,b.push(t),b.push(s),b.push(e),b.push(e),b.push(s),b.push(a),t=i,e=i+3*w,s=i+4*w,a=i+7*w,b.push(t),b.push(e),b.push(s),b.push(e),b.push(a),b.push(s),t=i+w,e=i+2*w,s=i+5*w,a=i+6*w,b.push(t),b.push(s),b.push(e),b.push(e),b.push(s),b.push(a)}(),function(){for(var t=[!0,!1,!0,!1,!1,!0,!1,!0],e=c*(i-1),s=0;s<8;s++){for(var a=w*s,r=0;r<i-1;r++)for(var n=r*c,o=(r+1)*c,h=0;h<i;h++){var u=h+1,l=a+n+h,p=a+n+u,f=a+o+h,d=a+o+u;t[s]?(b.push(l),b.push(f),b.push(p),b.push(p),b.push(f),b.push(d)):(b.push(l),b.push(p),b.push(f),b.push(p),b.push(d),b.push(f))}for(h=0;h<i;h++)l=a+e+h,p=a+e+h+1,f=a+k,t[s]?(b.push(l),b.push(f),b.push(p)):(b.push(l),b.push(p),b.push(f))}}(),function(){for(var t=0;t<4;t++)for(var e=t*w,s=4*w+e,a=1&t,r=0;r<i;r++){var n=r+1,o=e+r,h=e+n,u=s+r,c=s+n;a?(b.push(o),b.push(u),b.push(h),b.push(h),b.push(u),b.push(c)):(b.push(o),b.push(h),b.push(u),b.push(h),b.push(c),b.push(u))}}(),function(){for(var t=i-1,e=[0,1,4,5],s=[3,2,7,6],a=[0,1,1,0],r=0;r<4;r++)for(var n=e[r]*w,o=s[r]*w,h=0;h<=t;h++){var u=n+i+h*c,l=n+(h!==t?i+(h+1)*c:w-1),p=o+i+h*c,f=o+(h!==t?i+(h+1)*c:w-1);a[r]?(b.push(u),b.push(p),b.push(l),b.push(l),b.push(p),b.push(f)):(b.push(u),b.push(l),b.push(p),b.push(l),b.push(f),b.push(p))}}(),function(){for(var t=[0,2,4,6],e=[1,3,5,7],s=0;s<4;s++)for(var a=w*t[s],r=w*e[s],n=1>=s,o=0;o<i;o++){var h=o*c,u=(o+1)*c,l=a+h,p=a+u,f=r+h,d=r+u;n?(b.push(l),b.push(f),b.push(p),b.push(p),b.push(f),b.push(d)):(b.push(l),b.push(p),b.push(f),b.push(p),b.push(d),b.push(f))}}();for(var x=0,M=0;M<g.length;M++)p.setXYZ(x,g[M].x,g[M].y,g[M].z),f.setXYZ(x,y[M].x,y[M].y,y[M].z),x++;this.setIndex(new u.c(new Uint16Array(b),1)),this.addAttribute("position",p),this.addAttribute("normal",f)}c.prototype=Object.create(u.d.prototype),c.constructor=c;var l=function(){function t(e,i,s,a,r){Object(o.a)(this,t),this.plane=void 0,this.material=void 0,this.sticker=void 0,this.plane=function(t,e,i){var s,a,r,n;s=a=-t/2,r=n=t,e*=t;var o=new u.q;return o.moveTo(s,a+e),o.lineTo(s,a+n-e),o.quadraticCurveTo(s,a+n,s+e,a+n),o.lineTo(s+r-e,a+n),o.quadraticCurveTo(s+r,a+n,s+r,a+n-e),o.lineTo(s+r,a+e),o.quadraticCurveTo(s+r,a,s+r-e,a),o.lineTo(s+e,a),o.quadraticCurveTo(s,a,s,a+e),new u.g(o,{depth:i,bevelEnabled:!1,curveSegments:3})}(e,.15,r),this.material=new u.k({color:a,side:u.f}),this.sticker=new u.i(this.plane,this.material),0===i?(this.sticker.rotateX(-1*Math.PI/2),this.sticker.position.y+=s):1===i?(this.sticker.rotateX(Math.PI/2),this.sticker.position.y-=s):2===i?(this.sticker.rotateY(-1*Math.PI/2),this.sticker.position.x-=s):3===i?(this.sticker.rotateY(Math.PI/2),this.sticker.position.x+=s):4===i?this.sticker.position.z+=s:5===i&&(this.sticker.rotateY(Math.PI),this.sticker.position.z-=s)}return Object(h.a)(t,[{key:"getsticker",value:function(){return this.sticker}},{key:"clean",value:function(){this.plane.dispose(),this.material.dispose()}}]),t}(),p=function(){function t(e,i,s,a,r){Object(o.a)(this,t),this.object=new u.l,this.stickers=new Array(6),this.core=void 0,this.mat=void 0,this.block=void 0;var n=.72*r,h=.5015*r,p=.03*r;this.core=new c(r,.12,3),this.mat=new u.k({color:21}),this.block=new u.i(this.core,this.mat),this.block.userData.parent=this.object,this.object.add(this.block),0===i&&(this.stickers[0]=new l(n,1,h,"rgb(255, 255, 0)",p),this.object.add(this.stickers[0].getsticker())),i===a-1&&(this.stickers[1]=new l(n,0,h,"rgb(255, 255, 255)",p),this.object.add(this.stickers[1].getsticker())),0===e&&(this.stickers[2]=new l(n,2,h,"rgb(0, 255, 0)",p),this.object.add(this.stickers[2].getsticker())),e===a-1&&(this.stickers[3]=new l(n,3,h,"rgb(0, 0, 255)",p),this.object.add(this.stickers[3].getsticker())),0===s&&(this.stickers[4]=new l(n,5,h,"rgb(255, 140, 0)",p),this.object.add(this.stickers[4].getsticker())),s===a-1&&(this.stickers[5]=new l(n,4,h,"rgb(255, 0, 0)",p),this.object.add(this.stickers[5].getsticker()))}return Object(h.a)(t,[{key:"getblock",value:function(){return this.object}},{key:"clean",value:function(){this.object.remove(this.block);for(var t=0;t<6;t++)void 0!==this.stickers[t]&&(this.object.remove(this.stickers[t].getsticker()),this.stickers[t].clean());this.core.dispose(),this.mat.dispose()}}]),t}(),f=new u.s(1,0,0).normalize(),d=new u.s(0,1,0).normalize(),m=new u.s(0,0,1).normalize(),v=function(){function t(e,i){Object(o.a)(this,t),this.game=void 0,this.n=void 0,this.object=new u.l,this.group=new u.l,this.cur=0,this.blocks=void 0,this.moves=0,this.scramble=!1,this.turning=!1,this.lastmove=this.getrandommove(),this.raxis=0,this.clockwise=!1,this.count=48,this.speed=Math.PI/this.count,this.sspeed=2*this.speed,this.game=e,this.n=i,this.blocks=new Array(this.n),this.initcube(),this.initspeed()}return Object(h.a)(t,[{key:"initcube",value:function(){for(var t=this.n,e=.5*t-.5,i=1/t,s=0;s<t;s++){this.blocks[s]=new Array(t);for(var a=0;a<t;a++){this.blocks[s][a]=new Array(t);for(var r=0;r<t;r++){var n=new p(s,a,r,t,i),o=n.getblock();this.object.add(o),o.position.x=(s-e)*i,o.position.y=(a-e)*i,o.position.z=(r-e)*i,this.blocks[s][a][r]=n}}}}},{key:"initspeed",value:function(){this.count=[200,80,72,60,48,40][this.n-1],this.speed=Math.PI/this.count,this.sspeed=2*this.speed}},{key:"getcube",value:function(){return this.object}},{key:"update",value:function(){if(this.turning&&(this.animate(this.raxis),this.cur+=1,this.scramble&&(this.cur+=1),this.cur===this.count/2&&(this.finalize_animate(),this.scramble)))if(0===this.moves)this.scramble=!1;else{this.moves--;var t=this.getrandommove();for(this.lastmove[2]=!this.lastmove[2];t===this.lastmove;)t=this.getrandommove();this.turn(t[0],t[1],t[2])}}},{key:"animate",value:function(t){var e=this.scramble?this.sspeed:this.speed;switch(t){case 0:this.group.rotateOnAxis(f,this.clockwise?-1*e:e);break;case 1:this.group.rotateOnAxis(d,this.clockwise?-1*e:e);break;case 2:this.group.rotateOnAxis(m,this.clockwise?-1*e:e)}}},{key:"finalize_animate",value:function(){var t=[],e=!0,i=!1,s=void 0;try{for(var a,r=this.group.children[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var n=a.value;t.push(n)}}catch(l){i=!0,s=l}finally{try{e||null==r.return||r.return()}finally{if(i)throw s}}this.group.updateMatrix();var o=this.group.matrix.clone();this.object.remove(this.group);for(var h=0,u=t;h<u.length;h++){var c=u[h];this.object.add(c),c.applyMatrix(o)}this.turning=!1,this.game.state=0}},{key:"rotate",value:function(t,e){this.turning||0!==this.game.state||(this.game.state=1,this.group=new u.l,this.object.add(this.group),this.raxis=t,this.turning=!0,this.cur=0,this.clockwise=e,this.finalize_rotate(t,e))}},{key:"finalize_rotate",value:function(t,e){for(var i=this.n,s=0;s<i;s++){var a=this.getface(t,s);if(this.turning){var r=!0,n=!1,o=void 0;try{for(var h,u=a[Symbol.iterator]();!(r=(h=u.next()).done);r=!0){var c=h.value,l=!0,p=!1,f=void 0;try{for(var d,m=c[Symbol.iterator]();!(l=(d=m.next()).done);l=!0){var v=d.value;this.group.add(v.getblock())}}catch(g){p=!0,f=g}finally{try{l||null==m.return||m.return()}finally{if(p)throw f}}}}catch(g){n=!0,o=g}finally{try{r||null==u.return||u.return()}finally{if(n)throw o}}}this.putface(t,s,this.rotateface(a,e))}}},{key:"turn",value:function(t,e,i){this.turning||0!==this.game.state||e>=this.n||(this.game.state=1,this.group=new u.l,this.object.add(this.group),this.raxis=t,this.turning=!0,this.cur=0,this.clockwise=i,this.finalize_turn(t,e,i))}},{key:"finalize_turn",value:function(t,e,i){var s=this.getface(t,e);if(this.turning){var a=!0,r=!1,n=void 0;try{for(var o,h=s[Symbol.iterator]();!(a=(o=h.next()).done);a=!0){var u=o.value,c=!0,l=!1,p=void 0;try{for(var f,d=u[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var m=f.value;this.group.add(m.getblock())}}catch(v){l=!0,p=v}finally{try{c||null==d.return||d.return()}finally{if(l)throw p}}}}catch(v){r=!0,n=v}finally{try{a||null==h.return||h.return()}finally{if(r)throw n}}}this.putface(t,e,this.rotateface(s,i))}},{key:"scramble_cube",value:function(t){if(0===this.game.state&&!this.turning&&!this.scramble){this.moves=t,this.scramble=!0;var e=this.getrandommove();this.turn(e[0],e[1],e[2])}}},{key:"getrandommove",value:function(){return[Math.floor(3*Math.random()),Math.floor(Math.random()*this.n),Math.random()>.5]}},{key:"putface",value:function(t,e,i){var s=this.n;if(0===t)for(var a=0;a<s;a++)for(var r=0;r<s;r++)this.blocks[e][s-a-1][s-r-1]=i[a][r];else if(1===t)for(var n=0;n<s;n++)for(var o=0;o<s;o++)this.blocks[o][e][n]=i[n][o];else for(var h=0;h<s;h++)for(var u=0;u<s;u++)this.blocks[u][s-h-1][e]=i[h][u]}},{key:"getface",value:function(t,e){var i=this.n,s=new Array(i);if(0===t)for(var a=0;a<i;a++){s[a]=new Array(i);for(var r=0;r<i;r++)s[a][r]=this.blocks[e][i-a-1][i-r-1]}else if(1===t)for(var n=0;n<i;n++){s[n]=new Array(i);for(var o=0;o<i;o++)s[n][o]=this.blocks[o][e][n]}else for(var h=0;h<i;h++){s[h]=new Array(i);for(var u=0;u<i;u++)s[h][u]=this.blocks[u][i-h-1][e]}return s}},{key:"rotateface",value:function(t,e){var i=this.n;if(e)for(var s=0;s<i/2;s++)for(var a=s;a<i-s-1;a++){var r=t[s][a];t[s][a]=t[i-1-a][s],t[i-1-a][s]=t[i-1-s][i-1-a],t[i-1-s][i-1-a]=t[a][i-1-s],t[a][i-1-s]=r}else for(var n=0;n<i/2;n++)for(var o=n;o<i-n-1;o++){var h=t[n][o];t[n][o]=t[o][i-1-n],t[o][i-1-n]=t[i-1-n][i-1-o],t[i-1-n][i-1-o]=t[i-1-o][n],t[i-1-o][n]=h}return t}},{key:"clean",value:function(){var t=!0,e=!1,i=void 0;try{for(var s,a=this.blocks[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var r=s.value,n=!0,o=!1,h=void 0;try{for(var u,c=r[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var l=u.value,p=!0,f=!1,d=void 0;try{for(var m,v=l[Symbol.iterator]();!(p=(m=v.next()).done);p=!0){var g=m.value;g.clean(),this.object.remove(g.getblock())}}catch(y){f=!0,d=y}finally{try{p||null==v.return||v.return()}finally{if(f)throw d}}}}catch(y){o=!0,h=y}finally{try{n||null==c.return||c.return()}finally{if(o)throw h}}}}catch(y){e=!0,i=y}finally{try{t||null==a.return||a.return()}finally{if(e)throw i}}}}]),t}(),g=-1,y=1,b=2,k=new u.j({depthWrite:!1,transparent:!0,opacity:0,color:0}),w=function(){function t(e){var i=this;Object(o.a)(this,t),this.game=void 0,this.state=g,this.group=new u.l,this.raycaster=new u.o,this.surface=new u.i(new u.n(15,15),k.clone()),this.perimeter=new u.i(new u.b(1,1,1),k.clone()),this.xoffset=0,this.yoffset=0,this.touch=!1,this.blockarray=[],this.piece=void 0,this.layer=!1,this.position=new u.r,this.dragcurrent=new u.s,this.dragdelta=new u.s,this.dragtotal=new u.s,this.momentum=[],this.flipaxis=new u.s,this.flipangle=0,this.dragdirection=0,this.rotateaxis=0,this.dragnormal=new u.s,this.segment=0,this.count=0,this.fliplayer=[],this.start=function(t){0===i.game.state&&i.state===g&&(t instanceof TouchEvent&&t.preventDefault(),i.getposition(t),i.touch="touchstart"===t.type,i.initdrag(i.position),i.game.canvas.addEventListener(i.touch?"touchend":"mouseup",i.end,!1),i.game.canvas.addEventListener(i.touch?"touchmove":"mousemove",i.move,!1))},this.move=function(t){t instanceof TouchEvent&&t.preventDefault(),i.getposition(t),i.onDragMove(i.position)},this.end=function(t){t instanceof TouchEvent&&t.preventDefault(),i.getposition(t),i.onDragEnd(),i.game.canvas.removeEventListener(i.touch?"touchmove":"mousemove",i.move,!1),i.game.canvas.removeEventListener(i.touch?"touchend":"mouseup",i.end,!1)},this.onDragEnd=function(){if(i.state!==y)return i.game.state=0,void(i.state=g);var t=i.getmomentum().getComponent(i.dragdirection),e=Math.abs(i.flipangle)<Math.PI/2&&Math.abs(t)>.05&&0!==i.flipangle,s=(e?i.roundAngle(i.flipangle+Math.sign(i.flipangle)*(Math.PI/4)):i.roundAngle(i.flipangle))-i.flipangle;if(i.segment=s/30,e){var a=i.flipangle*Math.sign(i.flipaxis.getComponent(i.rotateaxis));if(i.layer){var r=Math.round(i.piece.position.getComponent(i.rotateaxis)*i.game.n+(i.game.n-1)/2),n=i.flipangle*Math.sign(i.flipaxis.getComponent(i.rotateaxis));i.game.cube.finalize_turn(i.rotateaxis,r,n<0)}else i.game.cube.finalize_rotate(i.rotateaxis,a<0)}i.count=0,i.state=b,i.game.animations.push(i)},this.game=e,this.game.scene.add(this.surface),this.game.scene.add(this.perimeter),this.game.cube.object.add(this.group),this.getarr(this.game.cube.blocks)}return Object(h.a)(t,[{key:"initdrag",value:function(t){var e=this.getintersect(t,this.perimeter);if(e){if(null==e.face)return;this.dragnormal=e.face.normal.round(),this.layer=!0,this.attach(this.surface,this.perimeter),this.surface.rotation.set(0,0,0),this.surface.position.set(0,0,0),this.surface.lookAt(this.dragnormal),this.surface.translateZ(.5),this.surface.updateMatrixWorld(),this.detach(this.surface,this.perimeter);var i=this.getpiece(t,this.blockarray);if(!1===i)return;this.piece=i.object.userData.parent}else this.layer=!1,this.group.rotation.set(0,0,0),this.surface.position.set(0,0,0),this.surface.rotation.set(0,Math.PI/4,0),this.surface.updateMatrixWorld();var s=this.getintersect(t,this.surface);!1!==s&&(this.dragcurrent=this.surface.worldToLocal(s.point),this.dragtotal=new u.s(0,0,0),this.game.state=2,this.state=0,this.momentum=[])}},{key:"onDragMove",value:function(t){var e=this;if(0===this.state||this.state===y){var i=this.getintersect(t,this.surface);if(!1!==i){var s=this.surface.worldToLocal(i.point.clone());if(this.dragdelta=s.clone().sub(this.dragcurrent).setZ(0),this.dragcurrent=s,this.addmomentumpoint(this.dragdelta),this.dragtotal.add(this.dragdelta),0===this.state&&this.dragtotal.length()>.05){if(this.dragdirection=this.getmainaxis(this.dragtotal),this.layer){var a=new u.s;a.setComponent(this.dragdirection,1);var r=this.surface.localToWorld(a).sub(this.surface.position),n=this.perimeter.worldToLocal(r).round();this.flipaxis=n.cross(this.dragnormal).negate(),this.getlayer(),this.selectlayer()}else{var o=0!==this.dragdirection?1===this.dragdirection&&t.x>this.game.width/2?2:0:1;this.flipaxis=new u.s,this.flipaxis.setComponent(o,0===o?-1:1),this.blockarray.forEach((function(t){null!==t&&null!==t.parent&&e.group.add(t.parent)})),this.rotateaxis=o}this.flipangle=0,this.state=y}else if(this.state===y){var h=this.dragdelta.getComponent(this.dragdirection);this.group.rotateOnAxis(this.flipaxis,h),this.flipangle+=h}}}}},{key:"update",value:function(){var t=this;if(this.state===b&&(this.group.rotateOnAxis(this.flipaxis,this.segment),this.count++,30===this.count)){if(this.group.rotation.setFromVector3(this.snaprotation(this.group.rotation.toVector3())),this.layer)this.deselectlayer();else{this.group.updateMatrix();var e=this.group.matrix;this.blockarray.forEach((function(i){null!==i.parent&&(t.group.remove(i.parent),t.game.cube.object.add(i.parent),i.parent.applyMatrix(e))}))}return this.game.animations.pop(),this.state=g,void(this.game.state=0)}}},{key:"getposition",value:function(t){if(t instanceof TouchEvent){var e=t.touches[0]||t.changedTouches[0];this.position.set(e.pageX-this.xoffset,e.pageY-this.yoffset)}else if(void 0!==this.xoffset){var i=t;this.position.set(i.pageX-this.xoffset,i.pageY-this.yoffset)}}},{key:"getintersect",value:function(t,e){var i;return this.raycaster.setFromCamera(this.convertposition(t.clone()),this.game.camera),(i=this.raycaster.intersectObject(e)).length>0&&i[0]}},{key:"getpiece",value:function(t,e){var i;return this.raycaster.setFromCamera(this.convertposition(t.clone()),this.game.camera),(i=this.raycaster.intersectObjects(e)).length>0&&i[0]}},{key:"getmainaxis",value:function(t){return Math.abs(t.getComponent(0))>Math.abs(t.getComponent(1))?Math.abs(t.getComponent(0))>Math.abs(t.getComponent(2))?0:2:Math.abs(t.getComponent(1))>Math.abs(t.getComponent(2))?1:2}},{key:"attach",value:function(t,e){t.applyMatrix((new u.h).getInverse(e.matrixWorld)),this.game.scene.remove(t),e.add(t)}},{key:"detach",value:function(t,e){t.applyMatrix(e.matrixWorld),e.remove(t),this.game.scene.add(t)}},{key:"getlayer",value:function(){var t=this,e=[],i=this.piece.position.clone().multiplyScalar(2*this.game.n).round(),s=this.getmainaxis(this.flipaxis);this.blockarray.forEach((function(a){null!==a&&null!==a.parent&&(a.parent.position.clone().multiplyScalar(2*t.game.n).round().getComponent(s)===i.getComponent(s)&&e.push(a.parent))})),this.rotateaxis=s,this.fliplayer=e}},{key:"selectlayer",value:function(){this.group.rotation.set(0,0,0),this.movepiece(this.fliplayer,this.game.cube.object,this.group)}},{key:"deselectlayer",value:function(){this.movepiece(this.fliplayer,this.group,this.game.cube.object),this.fliplayer=[]}},{key:"movepiece",value:function(t,e,i){e.updateMatrixWorld(),i.updateMatrixWorld(),t.forEach((function(t){t.applyMatrix(e.matrixWorld),e.remove(t),t.applyMatrix((new u.h).getInverse(i.matrixWorld)),i.add(t)}))}},{key:"getarr",value:function(t){var e=[],i=!0,s=!1,a=void 0;try{for(var r,n=t[Symbol.iterator]();!(i=(r=n.next()).done);i=!0){var o=r.value,h=!0,u=!1,c=void 0;try{for(var l,p=o[Symbol.iterator]();!(h=(l=p.next()).done);h=!0){var f=l.value,d=!0,m=!1,v=void 0;try{for(var g,y=f[Symbol.iterator]();!(d=(g=y.next()).done);d=!0){var b=g.value;e.push(b.block)}}catch(k){m=!0,v=k}finally{try{d||null==y.return||y.return()}finally{if(m)throw v}}}}catch(k){u=!0,c=k}finally{try{h||null==p.return||p.return()}finally{if(u)throw c}}}}catch(k){s=!0,a=k}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}this.blockarray=e}},{key:"convertposition",value:function(t){return t.x=t.x/this.game.canvas.width*2-1,t.y=-(t.y/this.game.canvas.height*2-1),t}},{key:"roundAngle",value:function(t){var e=Math.PI/2;return Math.sign(t)*Math.round(Math.abs(t)/e)*e}},{key:"snaprotation",value:function(t){return t.set(this.roundAngle(t.x),this.roundAngle(t.y),this.roundAngle(t.z))}},{key:"addmomentumpoint",value:function(t){var e=Date.now();this.momentum=this.momentum.filter((function(t){return e-t.time<500})),this.momentum.push({delta:t,time:e})}},{key:"getmomentum",value:function(){var t=this.momentum.length,e=new u.s,i=Date.now();return this.momentum=this.momentum.filter((function(t){return i-t.time<500})),this.momentum.forEach((function(i,s){var a=i.delta.multiplyScalar(s/t);e.add(a)})),e}},{key:"updateoffset",value:function(t,e){this.xoffset=t,this.yoffset=e}},{key:"reset",value:function(){this.getarr(this.game.cube.blocks),this.game.cube.object.add(this.group)}}]),t}(),x=0,M=function(){function t(e,i){var s=this;Object(o.a)(this,t),this.control=void 0,this.n=void 0,this.frameId=-1,this.renderer=void 0,this.camera=new u.m(10,1,.1,1e4),this.width=500,this.height=500,this.cube=void 0,this.scene=void 0,this.canvas=void 0,this.animations=[],this.arrowkey=new Map,this.key=new Map,this.state=x,this.keypress=function(t){if(t.preventDefault(),s.arrowkey.has(t.code)){var e=s.arrowkey.get(t.code);s.cube.rotate(e[0],e[1])}else if(s.key.has(t.code)){var i=s.key.get(t.code),a=i<6?0:i<12?1:2;s.cube.turn(a,i%6,!t.shiftKey)}else"Space"===t.code&&s.shuffle()},this.n=e,this.scene=new u.p,this.renderer=new u.t({antialias:!0}),this.cube=new v(this,this.n),this.control=new w(this),this.initcanvas(i),this.initcube(),this.createLight(),this.initkeys(),this.initcontrol(),this.start()}return Object(h.a)(t,[{key:"start",value:function(){requestAnimationFrame(this.animate)}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"shuffle",value:function(){this.cube.scramble_cube(this.n*this.n+20)}},{key:"animate",value:function(){var t=!0,e=!1,i=void 0;try{for(var s,a=this.animations[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){s.value.update()}}catch(r){e=!0,i=r}finally{try{t||null==a.return||a.return()}finally{if(e)throw i}}this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"initcanvas",value:function(t){this.animate=this.animate.bind(this),this.animations=[],this.width=t<500?300:500,this.height=this.width,this.renderer.setClearColor("#ffffff"),this.renderer.setSize(this.width,this.height),this.frameId=-1,this.camera.position.set(3,3,3),this.camera.fov=20,this.camera.updateProjectionMatrix(),this.camera.lookAt(new u.s(0,0,0));var e=this.renderer.domElement;this.canvas=e,e.tabIndex=1}},{key:"initcontrol",value:function(){this.canvas.addEventListener("keydown",this.keypress),this.canvas.addEventListener("mousedown",this.control.start),this.canvas.addEventListener("touchstart",this.control.start)}},{key:"createLight",value:function(){var t={holder:new u.l,ambient:new u.a(16777215,.75),front:new u.e(16777215,.38),back:new u.e(16777215,.2)};t.front.position.set(1,3,3),t.back.position.set(-1,-3,-3),t.holder.add(t.ambient),t.holder.add(t.front),t.holder.add(t.back),this.scene.add(t.holder)}},{key:"initkeys",value:function(){this.arrowkey.set("ArrowUp",[0,!0]),this.arrowkey.set("ArrowDown",[0,!1]),this.arrowkey.set("ArrowLeft",[1,!0]),this.arrowkey.set("ArrowRight",[1,!1]);for(var t=0;t<6;t++)this.key.set("Key".concat("QWERTY".charAt(t)),t);for(var e=0;e<6;e++)this.key.set("Key".concat("ASDFGH".charAt(e)),6+e);for(var i=0;i<6;i++)this.key.set("Key".concat("ZXCVBN".charAt(i)),12+i)}},{key:"initcube",value:function(){this.scene.add(this.cube.getcube()),this.animations.push(this.cube)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"updateoffset",value:function(t,e){this.control.updateoffset(t,e)}},{key:"reset",value:function(t){this.n=t,this.animations=[],this.scene.remove(this.cube.getcube()),this.cube.clean(),this.cube=new v(this,t),this.scene.add(this.cube.getcube()),this.state=x,this.animations.push(this.cube),this.control.reset()}}]),t}(),j=i(7),E=i(6),A=i(8),C=function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(j.a)(this,Object(E.a)(e).call(this,t))).mount=void 0,i.mount=Object(s.createRef)(),i}return Object(A.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.game.start(),window.addEventListener("resize",(function(){t.updateoffset()})),null!==this.mount.current&&(this.mount.current.appendChild(this.props.game.renderer.domElement),this.props.game.updateoffset(this.mount.current.offsetLeft,this.mount.current.offsetTop))}},{key:"updateoffset",value:function(){null!==this.mount.current&&this.props.game.updateoffset(this.mount.current.offsetLeft,this.mount.current.offsetTop)}},{key:"componentWillUnmount",value:function(){this.props.game.stop()}},{key:"render",value:function(){return a.a.createElement("div",{style:{width:this.props.game.width,height:this.props.game.width,position:"relative"},ref:this.mount})}}]),e}(s.Component);var S=function(){var t=new M(4,window.innerWidth);return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"App-header"},"Rubik's Cube Demo"),a.a.createElement("div",{className:"link-panel"},a.a.createElement("a",{className:"link",href:"https://shuby-mao.web.app/"},"Home"),a.a.createElement("a",{className:"link",href:"https://shuby-mao.web.app/"},"Project Page"),a.a.createElement("a",{className:"link",href:"https://github.com/shubymao/rubiks-cube-web"},"Github Repo")),a.a.createElement(C,{game:t}),a.a.createElement("div",{className:"panel"},a.a.createElement("button",{onClick:function(){return t.reset(1)}},"1x1"),a.a.createElement("button",{onClick:function(){return t.reset(2)}},"2x2"),a.a.createElement("button",{onClick:function(){return t.reset(3)}},"3x3"),a.a.createElement("button",{onClick:function(){return t.reset(4)}},"4x4"),a.a.createElement("button",{onClick:function(){return t.reset(5)}},"5x5"),a.a.createElement("button",{onClick:function(){return t.shuffle()}},"Shuffle")))};n.a.render(a.a.createElement(S,null),document.getElementById("root"))},9:function(t,e,i){t.exports=i(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bd770790.chunk.js.map