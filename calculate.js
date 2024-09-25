// donate button event
document.getElementById('donate-btn').addEventListener('click',function(event){
    ButtonEvent('donate-btn', 'donation');
    // console.log('Donate button clicked');
})
document.getElementById('history-btn').addEventListener('click',function(event){
    ButtonEvent('history-btn','history-detail');
})
// div one noakhali
document.getElementById('div-one-btn').addEventListener('click',function(event){      
    event.preventDefault();
    BlanceUpdate('nav-total' , 'div-one-input' , 'div-one-total' , 'div-one', 'modal')
})
// div two feni 
document.getElementById('div-two-btn').addEventListener('click',function(event){
    event.preventDefault();
    BlanceUpdate('nav-total' , 'div-two-input' , 'div-two-total' , 'div-two', 'modal')
})

// div three quota
document.getElementById('div-three-btn').addEventListener('click',function(event){
    event.preventDefault();
    BlanceUpdate('nav-total' , 'div-three-input' , 'div-three-total', 'div-three', 'modal')
})

// modal close
document.getElementById('modal-close').addEventListener('click',function(event){
    document.getElementById('modal').style.display= "none";
})

