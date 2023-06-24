export const routes = {
  home: {
    name: 'Home',
    path: '/',
  },
  about: {
    name: 'About',
    path: '/about/',
  },
  products: {
    name: 'Products',
    path: '/products/',
  },
  product: {
    name: 'Product',
    path: '/products/:id',
  },
}

export const navigationRoutes = [routes.home, routes.about, routes.products]
