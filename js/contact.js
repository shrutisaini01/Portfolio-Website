const subt=document.querySelector('.btn');
subt.addEventListener('click',function(e){
    e.preventDefault();
    
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const desc=document.getElementById('description').value.trim();

    if(name==''||email==''||desc==''){
        alert("Please fill out the details!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return; 
    }

    const messageWordCount = desc.split(/\s+/).length;
    if (messageWordCount < 10) {
        alert('Please enter at least 10 words in the message.');
        return; 
    }

    let s=confirm("Do you want to submit all your details?");
    console.log(s);
    if(s){
        setTimeout(function(){
            const details=document.querySelectorAll('.form-input, .write');
            details.forEach(function(d){
                d.value='';
            });
        },3000);
    }
});