const contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-987-6543",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phone: "555-456-7890",
  },
  {
    firstName: "Bob",
    lastName: "Williams",
    email: "bob.williams@example.com",
    phone: "555-789-1234",
  },
  {
    firstName: "Eva",
    lastName: "Davis",
    email: "eva.davis@example.com",
    phone: "555-234-5678",
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    phone: "555-345-6789",
  },
  {
    firstName: "Emily",
    lastName: "Miller",
    email: "emily.miller@example.com",
    phone: "555-876-5432",
  },
  {
    firstName: "Daniel",
    lastName: "Martinez",
    email: "daniel.martinez@example.com",
    phone: "555-987-6543",
  },
  {
    firstName: "Olivia",
    lastName: "Clark",
    email: "olivia.clark@example.com",
    phone: "555-432-1098",
  },
  {
    firstName: "William",
    lastName: "Wilson",
    email: "william.wilson@example.com",
    phone: "555-210-9876",
  },
  {
    firstName: "Casper",
    lastName: "Stensbjerg",
    email: "casper.stensbjerg@example.com",
    phone: "555-215-3232"
  }
];

const searchForm = document.querySelector('form')
const newContactBtn = document.querySelector('.add__contact')
const showAllBtn = document.querySelector('.show__contact')
const contactCon = document.querySelector('.contact__section')

if(localStorage) {
  
} else {
  localStorage.setItem('contacts',JSON.stringify(contacts))
}
// console.log(JSON.parse(localStorage.getItem('contacts')))
showAllBtn.addEventListener('click', () => {
  contactCon.innerHTML = ""
  contactCon.style.justifyItems = 'start'
  contacts.forEach((contact) => {
    const contactCard = document.createElement('div')
    contactCard.classList.add('contact__card')
    contactCard.innerHTML += `
    <h2>${contact.firstName} ${contact.lastName}</h2>
    <ul>
      <li><span class="contact__info">Phone:</span> ${contact.phone}</li>
      <li><span class="contact__info">Email:</span> <a href="mailto:${contact.email}">${contact.email}</a></li>
    </ul>
   `
   contactCon.appendChild(contactCard)
  })
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const  searchValue = capitalizer(searchForm.search.value)
  const p = document.createElement('p')
  contactCon.innerHTML = ""
  if(searchValue == "") {
    contactCon.style.justifyItems = 'center'
    p.textContent = 
    ` The search is empty`
      contactCon.appendChild(p)
  } else {
    const result = contacts.filter((contact) => {
      return contact.firstName.includes(searchValue) 
      || contact.lastName.includes(searchValue)
      || compare(contact.email, searchValue)
      
    })
    if(result.length === 0 ) {
      contactCon.style.justifyItems = 'center'
      p.textContent = 
      ` The search "${searchValue.toLowerCase()}" does not match anything.`
      contactCon.appendChild(p)
    }
  
    if(result.length === 1) {
      contactCon.style.justifyItems = 'center'
    }
  
    result.forEach((contact) => {
      const contactCard = document.createElement('div')
      contactCard.classList.add('contact__card')
      contactCard.innerHTML += `
      <h2>${contact.firstName} ${contact.lastName}</h2>
      <ul>
        <li><span class="contact__info">Phone:</span> ${contact.phone}</li>
        <li><span class="contact__info">Email:</span> <a href="mailto:${contact.email}">${contact.email}</a></li>
      </ul>
     `
     contactCon.appendChild(contactCard)
    })
  }
  
})

function capitalizer(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

const compare = (a, b) => a == b 