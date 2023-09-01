const contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-987-6543",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phone: "555-456-7890",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Williams",
    email: "bob.williams@example.com",
    phone: "555-789-1234",
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Davis",
    email: "eva.davis@example.com",
    phone: "555-234-5678",
  },
  {
    id: 6,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    phone: "555-345-6789",
  },
  {
    id: 7,
    firstName: "Emily",
    lastName: "Miller",
    email: "emily.miller@example.com",
    phone: "555-876-5432",
  },
  {
    id: 8,
    firstName: "Daniel",
    lastName: "Martinez",
    email: "daniel.martinez@example.com",
    phone: "555-987-6543",
  },
  {
    id: 9,
    firstName: "Olivia",
    lastName: "Clark",
    email: "olivia.clark@example.com",
    phone: "555-432-1098",
  },
  {
    id: 10,
    firstName: "William",
    lastName: "Wilson",
    email: "william.wilson@example.com",
    phone: "555-210-9876",
  },
];

const searchBtn = document.querySelector('.contact__search__button')
const newContactBtn = document.querySelector('.add__contact')
const showAllBtn = document.querySelector('.show__contact')
const contactCon = document.querySelector('.contact__section')
const searchInput = document.querySelector('.contact__search')


showAllBtn.addEventListener('click', () => {
  contactCon.innerHTML = ""
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

