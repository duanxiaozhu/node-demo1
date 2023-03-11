const div=dom.create("<table><tr><td>hi</td></tr></table>");
console.log(div)
dom.after(test,div)
dom.before(test,div)
dom.append(test,div)
dom.wrap(test,div)

const nodes=dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title','Hi,I am shanzhu')
const title=dom.attr(test,'title')
console.log(`title:${title}`)

dom.text(test,'你好，我是小山竹')
console.log(dom.text(test))

dom.style(test,{border:'1px solid red',color:'blue'})
console.log(dom.style(test,'border'))
dom.style(test,'border','1px solid pink')
dom.style(test2,{background:'pink'})

dom.class.add(test,'red')

const fn=()=>{
    console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv=dom.find('#test')[0]
dom.find('.red',testDiv)
console.log(testDiv)

console.log(dom.parent(test))

console.log(dom.children(test2))

console.log(dom.siblings(dom.find('#s2')[0]))

console.log(dom.next(dom.find('#s2')[0]))

console.log(dom.previous(dom.find('#s2')[0]))

const t=dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

console.log(dom.index(s2))