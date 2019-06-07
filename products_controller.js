module.exports = {
  create: (req, res) => {
    let dbInstance = req.app.get('db')
    let { name, description, price, image_url } = req.body

    dbInstance.create_product([name, description, price, image_url]).then(response => res.send(response))
    .catch(err => console.log(err))
  },

  getOne: (req, res) => {
    let dbInstance = req.app.get('db')
    let { id } = req.params

    dbInstance.read_product(id).then(product => res.send(product))
      .catch(err => console.log(err))
  },

  getAll: (req, res) => {
    let dbInstance = req.app.get('db')

    dbInstance.read_products().then(products => res.send(products))
      .catch(err => console.log(err))
  },

  update: (req, res) => {
    let dbInstance = req.app.get('db')
    let { params, query } = req

    dbInstance.update_product([params.id, query.desc]).then(response => res.send(response))
      .catch(err => console.log(err))
  },

  delete: (req, res) => {
    let dbInstance = req.app.get('db')
    let { id } = req.params

    dbInstance.delete_product(id).then(response => res.send(response))
      .catch(err => console.log(err))
  }
};