(()=>{const e=document.querySelector("#form"),t=e.querySelector("#input"),n=document.querySelector(".tasks-block");e.addEventListener("submit",(function(e){e.preventDefault(),t.value?t.classList.remove("input-task-unfill"):t.classList.add("input-task-unfill");const d=document.createElement("div");d.classList.add("task__inner");const a=document.createElement("div");a.classList.add("content"),d.appendChild(a);const l=document.createElement("div"),i=document.createElement("input"),s=document.createElement("button"),c=document.createElement("button"),r=document.createElement("div");l.classList.add("btns-block"),s.classList.add("btn_edit","btn"),c.classList.add("btn_deleted","btn"),i.classList.add("btns-block__inner"),i.type="text",i.setAttribute("readonly","readonly"),i.value=t.value,r.classList.add("form"),s.innerHTML="Edit",c.innerHTML="Delete",l.appendChild(s),l.appendChild(c),d.appendChild(i),n.appendChild(l),r.appendChild(d),r.appendChild(l),n.appendChild(r),t.value="",s.addEventListener("click",(()=>{"edit"===s.innerText.toLocaleLowerCase()?(i.removeAttribute("readonly"),i.focus(),s.innerText="Save"):(s.setAttribute("readonly","readonly"),s.innerText="Edit")})),c.addEventListener("click",(()=>{n.removeChild(r)}))}))})();