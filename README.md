# 🛒 ShopApp - React Shopping Cart

A modern, responsive e-commerce shopping cart application built with React, Redux Toolkit, and Tailwind CSS.

## 🔗 Links

- **GitHub Repository**: [https://github.com/Naitik4897/ShopApp](https://github.com/Naitik4897/ShopApp)
- **Live Demo**: [Deploy on Vercel to get the live URL]

## 🚀 Features

- **Product Catalog**: Browse through a collection of products with detailed information
- **Shopping Cart**: Add, remove, and manage items in your cart
- **State Management**: Efficient state management using Redux Toolkit
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Navigation**: Smooth navigation between pages using React Router
- **Toast Notifications**: User-friendly notifications with react-hot-toast
- **Modern UI**: Clean and intuitive user interface with React Icons

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **State Management**: Redux Toolkit & React Redux
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Build Tool**: Create React App

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naitik4897/ShopApp.git
   cd ShopApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
ShopApp/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │   ├── Cartitem.jsx
│   │   └── Spinner.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Cart.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── Slices/
│   │       └── cartSlice.js
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── data.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`. Custom styles are defined in `src/index.css`.

## 🔧 State Management

The application uses Redux Toolkit for state management:

- **Store**: Configured in `src/redux/store.js`
- **Cart Slice**: Manages cart state in `src/redux/Slices/cartSlice.js`

## 🌟 Key Components

### Navbar
- Navigation component with cart icon and item count
- Links to Home and Cart pages

### Product
- Displays individual product information
- Add to cart functionality

### Cart
- Shows all items in the cart
- Quantity management and removal options

### CartItem
- Individual cart item component
- Handles item quantity updates and removal

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop devices
- Tablets
- Mobile phones

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Visit [Vercel](https://vercel.com/)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository: `https://github.com/Naitik4897/ShopApp`
   - Configure build settings:
     - Framework Preset: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click "Deploy"

3. **Alternative: Deploy via Vercel CLI**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

### Other Deployment Options

Deploy the `build` folder to your preferred hosting service:
- **Netlify**: Drag and drop the build folder or connect via GitHub
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build folder to S3 bucket with static hosting
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Redux Toolkit for simplified state management
- Tailwind CSS for utility-first styling
- Fake Store API for product data

## 📞 Support

If you have any questions or need help with the project, please open an issue in the repository.

---

**Happy Shopping! 🛍️**
