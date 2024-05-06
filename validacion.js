//Haz tú validación en javascript acá


const generatePDFButton = document.getElementById('generatePDFButton');

generatePDFButton.addEventListener('click', generatePDF);

function generatePDF() {
    
    var html = document.body.innerHTML;

    
    var options = {
      filename: 'mi-portafolio.pdf', 
      pageFormat: 'A4', 
      margin: [20, 20, 20, 20], 
      orientation: 'portrait', 
    };

    // Convert HTML to PDF and trigger download
    html2pdf().from()
    .save();
    
}


