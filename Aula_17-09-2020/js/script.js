$('#cor1').click(function () {
    $('body').addClass('bg-primary');
  });
   
  $('#cor2').click(function () {
    $('body').addClass('bg-secondary');
  });
   
  $('#cor3').click(function () {
    $('body').addClass('bg-success');
  });
   
  $('#cor4').click(function () {
    $('body').addClass('bg-info');
  });
   
  $('#cor5').click(function () {
    $('body').addClass('bg-warning');
  });
   
  $('#cor6').click(function () {
    $('body').addClass('bg-danger');
  });
   
  $('#cor7').click(function () {
    $('body').addClass('bg-light');
  });
   
  $('#cor8').click(function () {
    $('body').addClass('bg-dark');
  });

  $('#button').click(function () {
    $('#filme').hide();
   
  });
   
  $('#button2').click(function () {
    $('#filme').show();
   
  });

  $('#button3').click(function () {
    $('#serie').hide();
   
  });
   
  $('#button4').click(function () {
    $('#serie').show();
   
  });

  $('#button5').click(function () {
    $('#desenho').hide();
   
  });
   
  $('#button6').click(function () {
    $('#desenho').show();
   
  });

  $('#Confirmar').click(function (){
    alert("nome: "+$('form1').val()+"\nE-mail: " + $('#form2').val() +"\nMensagem: " + $('#form3').val());
  });