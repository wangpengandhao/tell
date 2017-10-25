$(function(){
	let dl=$('dl');
	let tips=$('.xianshi');
	let header=$('header');
	let aside=$('aside');
	let search=$('.search');
	let dts=document.querySelectorAll('dt');
	console.log(dts)
	let arr=[];
	let datalist=[];
	$.ajax({
		type:'get',
		url:'query.php',
		dataType:'json',
		success:function(data){
			// data.forEach(element=>{
			datalist=data;
			createTr(data);
			// })
		}
	})
	search.on('input',function(){
		let value=$.trim(this.value);
		let data=datalist.filter(element=>{
			return element.name.includes(value)||element.tell.includes(value)||element.pinyin.includes(value)			
		})
		createTr(data);
	})
	function createTr(data){
		dl.html('');
		aside.html('');
		let ranger={};
		$.each(data,function(index,value){
			let firstChar=value.pinyin.charAt(0).toUpperCase();
			if(!ranger[firstChar]){
				ranger[firstChar]=[];
			}
			ranger[firstChar].push(value);
		})
		let chars=Object.keys(ranger).sort();
		tips.text(chars[0]);
		$.each(chars,function(index,value){
			dl[0].innerHTML+=`<dt>${value}</dt>`;
			aside[0].innerHTML+=`<li>${value}</li>`
			$.each(ranger[value],function(i,v){
				dl[0].innerHTML+=`
				<dd><a href="tel:${v.tell}">${v.name}</a></dd>
				`;
			})
		})
		
	}
	$(window).on('scroll',function(){
		let st=$(window).scrollTop();
		dts.forEach(element=>{
			arr.push(element.offsetTop);
		})
		
		let ht=tips.offsetHeight+header.offsetHeight;
		arr.forEach(function(element,index){
			if(st+ht>element){
				tips.text(dts[index]);
			}
		})
	})
})
