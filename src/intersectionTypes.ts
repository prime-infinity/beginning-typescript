let weight:number & string; //both number and string at the same time

type Draggable = {
    drag:() => void
}

type Resizeable = {
    resize:()=>void
}

type UiWidget = Draggable & Resizeable; //both draggable and resizeable

let textBox:UiWidget = {
    drag:()=>{},
    resize:()=>{}
}