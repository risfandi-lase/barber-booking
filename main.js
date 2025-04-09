const dateBtn = document.querySelectorAll(`.date-btn`);
const timeBtn = document.querySelectorAll(`.time-btn`);

dateBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    dateBtn.forEach((btn) => {
      btn.classList.remove(`active`);
    });
    btn.classList.add(`active`);
  });
});

timeBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    timeBtn.forEach((time) => {
      time.classList.remove(`active`);
    });
    btn.classList.add(`active`);
  });
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalSpan = document.getElementById("total");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotal);
});

function calculateTotal() {
  let total = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseFloat(checkbox.value);
    }
  });

  totalSpan.textContent = total + "$";
}

const nameInput = document.querySelector("#name");
const waInput = document.querySelector("#number");
const processBtn = document.querySelector(".process-btn");

processBtn.addEventListener("click", function () {
  const checkedBoxes = document.getElementsByName("services");
  const checkedValues = [];
  let serviceName = '';
  const barberInput = document.querySelector('input[name="selection"]:checked');
  const dateInput = document.querySelector(".date-btn.active");
  const timeInput = document.querySelector(".time-btn.active");
  
  checkedBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
     serviceName = serviceName + ' ' + checkbox.dataset.name + ','
      checkedValues.push(checkbox.value);
    }
  });

  const appointmentData = {
    name: nameInput.value,
    whatsapp: waInput.value,
    date: dateInput.dataset.value,
    time: timeInput.dataset.value,
    barber: barberInput.value,
    price: checkedValues,
    service: serviceName.slice(1,-1)
  };

  const stringifiedAppointmentData = JSON.stringify(appointmentData);
  localStorage.setItem('appointment-data', stringifiedAppointmentData);
    
  document.location.replace("https://barber-booking-five.vercel.app/index2.html");
});


