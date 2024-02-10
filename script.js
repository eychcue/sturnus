const heroText = "sturnus/.";
let index = 0;
let isAdding = true; 

function updateText() {
    const element = document.getElementById('typewriter');
    
    if (isAdding) {
        if (index < heroText.length) {
            element.textContent += heroText.charAt(index);
            index++;
        } else {
            setTimeout(() => {
                isAdding = false; 
            }, 1000); 
        }
    } else {
        
        if (index > 0) {
            index--; 
            element.textContent = heroText.substring(0, index);
        } else {
            
            setTimeout(() => {
                isAdding = true; 
                updateText(); 
            }, 200); 
            return; 
        }
    }
    
    
    let timeout = isAdding ? 150 : 100; 
    setTimeout(updateText, timeout);
}

document.addEventListener("DOMContentLoaded", updateText);

