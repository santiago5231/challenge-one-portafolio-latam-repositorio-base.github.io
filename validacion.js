
jQuery(document).ready(function(){

  $('#generatePDFButton').click(function()
  {
 
  window.print();

  });

//$('#generatePDFButton').click(function(){
  //html2canvas(document.querySelector('#Portafolio')).then((canvas)=>  {
    //let base64image = canvas.toDataURL('image/png');

    //let pdf= new jsPDF('p','px',[1600,1131]);
    //pdf.addImage(base64image, 'PNG', 15, 15, 1110, 381);
    //pdf.save('Descarga-curriculum-PDF');

  });


