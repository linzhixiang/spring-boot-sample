// 显示隐藏div
function showThis1() {
  document.getElementById('divHide1').style.display = 'none'
  document.getElementById('divHide2').style.display = 'none'
  document.getElementById('divHide3').style.display = 'block'
}

function hideThis1() {
  document.getElementById('divHide3').style.display = 'none'
  document.getElementById('divHide2').style.display = 'block'
  document.getElementById('divHide1').style.display = 'block'
}

function showThis2() {
  document.getElementById('div1').style.display = 'none'
  document.getElementById('div2').style.display = 'none'
  document.getElementById('div3').style.display = 'block'
  document.getElementById('div4').style.display = 'none'
}
function hideThis2() {
  document.getElementById('div1').style.display = 'block'
  document.getElementById('div2').style.display = 'block'
  document.getElementById('div3').style.display = 'none'
  document.getElementById('div4').style.display = 'block'
}
function showThis3() {
  document.getElementById('divJ1').style.display = 'none'
  document.getElementById('divJ2').style.display = 'none'
  document.getElementById('divJ3').style.display = 'block'
  document.getElementById('divJ4').style.display = 'none'
}
function hideThis3() {
  document.getElementById('divJ1').style.display = 'block'
  document.getElementById('divJ2').style.display = 'block'
  document.getElementById('divJ3').style.display = 'none'
  document.getElementById('divJ4').style.display = 'block'
}
function showThis4() {
  document.getElementById('divL1').style.display = 'none'
  document.getElementById('divL2').style.display = 'none'
  document.getElementById('divL3').style.display = 'block'
  document.getElementById('divL4').style.display = 'none'
}
function hideThis4() {
  document.getElementById('divL1').style.display = 'block'
  document.getElementById('divL2').style.display = 'block'
  document.getElementById('divL3').style.display = 'none'
  document.getElementById('divL4').style.display = 'block'
}
function showThis5() {
  document.getElementById('divS1').style.display = 'none'
  document.getElementById('divS2').style.display = 'none'
  document.getElementById('divS3').style.display = 'block'
  document.getElementById('divS4').style.display = 'none'
}
function hideThis5() {
  document.getElementById('divS1').style.display = 'block'
  document.getElementById('divS2').style.display = 'block'
  document.getElementById('divS3').style.display = 'none'
  document.getElementById('divS4').style.display = 'block'
}
function initEditor(id) {
//轻量化编辑器
new TINY.editor.edit('editor',{
	id:id,
	//width:600,
	height:389,
	cssclass:'te',
	controlclass:'tecontrol',
	rowclass:'teheader',
	dividerclass:'tedivider',
	controls:['bold','italic','underline','strikethrough','|','subscript','superscript','|',
			  'orderedlist','unorderedlist','|','outdent','indent','|','leftalign',
			  'centeralign','rightalign','blockjustify','|','unformat','|','undo','redo','n',
			  'font','size','style','|','image','hr','link','unlink','|','cut','copy','paste','print'],
	footer:true,
	fonts:['Verdana','Arial','楷体','宋体','微软雅黑'],
	xhtml:true,
	cssfile:'style.css',
	bodyid:'editor',
	footerclass:'tefooter',
	toggle:{text:'source',activetext:'wysiwyg',cssclass:'toggle'},
});
}



// 弹窗jQ

$().ready(function(){
	$('.inputBtn4,.inputBtn2,.btnB').click(function () {
		$('.detail_bg').fadeIn(100)
		$('#' + $(this).data('dialog')).slideDown(200)
	})
	$(' .button1,.button2').click(function () {
		$('.detail_bg').fadeOut(100)
		$(this).closest('.detail').slideUp(200)
		$('#' + $(this).data('dialog')).slideUp(200)
	})
	$('.detail_title .close').click(function () {
		$('.detail_bg').fadeOut(100)
		$('.detail').slideUp(200)
	})
	initEditor("editor_1");
	initEditor("editor_2");
});
