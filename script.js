function openVyaparPlaceholder(e){
  e && e.preventDefault();
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','true');
}

function openWhatsApp(){
  // Replace phone number if you want to enable direct WhatsApp chat
  const phone = ''; // e.g. '919876543210' (country code + number, no +)
  if(!phone){
    alert('Please add your WhatsApp phone number in the website files to enable direct messaging.');
    return;
  }
  const url = 'https://wa.me/' + phone;
  window.open(url, '_blank');
}
