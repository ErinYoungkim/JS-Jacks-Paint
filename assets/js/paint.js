function configureListeners() {
    let images = // select img elements  
        document.getElementsByTagName('img')


     for (var i = 0; i < images.length; i++) {    
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim');
    }
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
        price = '$14.99'
        colorName = 'Lime Green' 
        updatePrice(colorName, price)                 
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = 'Medium Brown'
            colorName = '$11.14'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = 'Royal Blue'
            colorName = '$22.99'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = 'Solid Black'
            colorName = '$4.99'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = 'Solid Cyan'
            colorName = '$8.22'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = 'Solid Purple'
            colorName = '$11.99'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = 'Solid Red'
            colorName = '$13.42'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = 'Solid White'
            colorName = '$21.98'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = 'Solid Yellow'
            colorName = '$14.99'
            updatePrice(colorName, price)  
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price;
        // select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name')
        color.textContent = colorName;

         // select element with corresponding id
        //display color name
    }
    
}
