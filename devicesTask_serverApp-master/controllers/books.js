
import shortid from "shortid"
import books from "../books.json"

export function getBooks(req, res) {
  res.json(books)
}

export function addBook(req, res) {
  const { system_name, type, hdd_capacity } = req.body
  const newBook = {
    id: shortid.generate(),
    system_name,
    type,
    hdd_capacity
  }
  books.push(newBook)
  res.json(newBook)
}

export function getBook(req, res) {
  const { id } = req.params
  const book = books.find(d => d.id === id)
  res.json(book)
}

export function updateBook(req, res) {
  const { id } = req.params
  const { system_name, type, hdd_capacity } = req.body
  let updated = false
  books.forEach(book => {
    if(device.id === id) {
      device.system_name = system_name
      device.type = type
      device.hdd_capacity = hdd_capacity
      updated = true
    }
  })
  res.json(updated ? 1 : 0)
}

export function deleteBook(req, res) {
  const { id } = req.params
  let deleted = false
  books.forEach((book, i) => {
    if(device.id === id) {
      devices.splice(i, 1)
      deleted = true
    }
  })
  res.json(deleted ? 1 : 0)
}