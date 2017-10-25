$(function(){
	let tbody=$('tbody');
	$(document).ajaxStart(function(){
		$('.tips').animate({width:'80%'})
	})
	$(document).ajaxSuccess(function(){
		$('.tips').animate({width:'100%'},function(){
			$(this).width(0)
		})
	})
	$.ajax({
		type:'get',
		url:'query.php',
		dataType:'json',
		success:function(data){
			data.forEach(element=>{
				createTr(element);
			})
			// $.each(data,function(index,value){
			// 	createTr(index,value);
			// })			
		}
	})
	$('.addbut').on('dblclick',function(){
		$.ajax({
			url:'insert.php',
			success:function(data){
				if(data){
					createTr({name:'',tell:0,pinyin:''});
				}else{
					alert('添加失败');
				}
			}
		})
	})
	function createTr(data){
		tbody[0].innerHTML+=`<tr id='${data.id}'>
		<td type="name">${data.name}</td>
		<td type="tell">${data.tell}</td>
		<td type="pinyin">${data.pinyin}</td>
		<td class="bt"><button>删除</button></td>`
	}
	tbody.on('dblclick','td[class!=bt]',function(e){
		let element=$(e.target);
		let oval=element.text();
		element.text('');
		$('<input>').appendTo(element).val(oval).blur(function(){
			let nval=$(this).val();
			$(this).remove();
			element.text(nval);
			let info=element.attr('type');
			let id=element.closest('tr').attr('id')
			$.ajax({
				url:'updata.php',
				data:{value:nval,info,id},
				success:function(data){
					if(data){
						alert('修改成功');
					}else{
						alert('修改失败');
					}
				}
			})
		});
	})
	tbody.on('dblclick','td[class=bt]',function(e){
		let element=$(e.target);
		let id=element.closest('tr').attr('id')
		$.ajax({
			url:'delete.php',
			data:{id},
			success:function(data){
				if(data==1){
					element.closest('tr').remove();
					// alert('删除成功');
				}else if(data==0){
					alert('删除失败');
				}
			}
		})
		tbody.innerHTML='';
	})

})