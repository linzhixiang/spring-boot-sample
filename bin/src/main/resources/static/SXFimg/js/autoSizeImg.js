// JavaScript Document
/*注释： 
1、后面的testCss1和testCss2两个样式跟testCss是一样的。只是设置了大小。 
2、红色部分的height和width必须定义，是设置存放img外面的父层容器的高和宽。 
3、text-algin:为图片水平居中 
4、display:block，必须设置。否则FF下启用自动缩放不起作用。 

使用方法： 
1、是需要在img的父层定义样式，包含上述注释里面提到的东西； 
2、是img加上 


onload="autoSizeImg(this.parentNode,5,5,true)" 

参数说明： 
参数Contents一般采用this.parentNode,即使img的父容易 
参数offsetWidth,offsetHeight分别是宽和高度居中的修正值。 
参数vlmiddle设置为true则是垂直居中 
详细出处参考：http://www.jb51.net/article/16129.htm*/

        function autoSizeImg(Contents,offsetWidth,offsetHeight,vlmiddle){ 
            var o=Contents.getElementsByTagName("IMG"); 
            var cwidth=    window.getComputedStyle?window.getComputedStyle 
(Contents,null).width:Contents.currentStyle["width"]; 
            var cheight=window.getComputedStyle?window.getComputedStyle 
(Contents,null).height:Contents.currentStyle["height"]; 
            var ncwidth=parseInt(cwidth); 
            var ncheight=parseInt(cheight); 
            for(var i=0;i<o.length;i++){ 
                var img=o[i]; 
                var iw=img.width; 
                var ih=img.height; 
                if(img.width>ncwidth){ 
                    var nw=ncwidth-offsetWidth; 
                    img.width=nw 
                    img.height=(nw*ih)/iw; 
                }else if(img.width<ncwidth&&img.height>ncheight){ 
                    var nh=ncheight-offsetHeight; 
                    img.height=nh; 
                    img.width=(nh*iw)/ih; 
                } 
                if(img.height>ncheight&&img.width<ncwidth){ 
                    var hh=ncheight-offsetHeight; 
                    img.height=nh; 
                    img.width=(nh*iw)/ih; 
                } 
                if(vlmiddle)img.style.marginTop=((ncheight-img.height)/2)+"px"; 
            } 
        } 
