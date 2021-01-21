const keyboards=Array.from(document.getElementsByClassName('keyborad_list'));
keyboards.forEach(el=>{
    let list=Array.from(el.childNodes).filter(el=>el.nodeType==1);
    console.log(list);
    el.addEventListener('click',(e)=>{
        list.forEach(el=>el.style.transition='all 3s')
        list.forEach(el=>{el.classList.toggle('list')})
    })
})

console.log(keyboards);
