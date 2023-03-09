import { datap } from "./data.js";


function dlss(){
    let dl = document.querySelector(".caja1")
    dl.innerHTML= datap[0].titulo +  datap[0].texto ;
    
    let dll = document.querySelector(".caja2")
    dll.innerHTML= datap[1].titulo + datap[1].texto ;
    
    let dlll = document.querySelector(".caja3")
    dlll.innerHTML= datap[2].titulo + datap[2].texto ;
    
    let dllll = document.querySelector(".caja4")
    dllll.innerHTML= datap[3].titulo + datap[3].texto ;
};
dlss();