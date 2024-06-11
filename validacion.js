//Haz tú validación en javascript acá


jQuery(document).ready(function(){

  $('#generatePDFButton').click(function()
  {
 
  window.location.href = 'https://drive.google.com/uc?export=download&id=1FTll1lAoZwnv2R6uIJFMebiFpiZqKxjK';

  });
});

  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu_icon');
    const menuList = document.getElementById('menu_list');

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('show');
    });
});

//$('#generatePDFButton').click(function(){
  //html2canvas(document.querySelector('#Portafolio')).then((canvas)=>  {
    //let base64image = canvas.toDataURL('image/png');

    //let pdf= new jsPDF('p','px',[1600,1131]);
    //pdf.addImage(base64image, 'PNG', 15, 15, 1110, 381);
    //pdf.save('Descarga-curriculum-PDF');

  





//});

//});


//document.getElementById('generatePDFButton').addEventListener('click', function() {
  // Call your PDF generation function here
  //generatePDF();
 

  //function generatePDF() {
    // 1. Capture the content to be converted (replace with your selector)
   // const content = document.getElementById('Portafolio'); // Change ID if needed
  
    // 2. Create a jsPDF object
    //const doc = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
  
    // 3. Add the content to the PDF
    //doc.addHTML(content, 15, 15); // Add content from 15mm left and 15mm top
  
    // 4. Save the PDF (replace with your desired filename)
    //doc.save('portfolio.pdf');
  //}

//});

