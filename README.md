# Shop-Zen UI

A modern, responsive e-commerce dashboard built with React and Tailwind CSS for managing orders, products, customers, and analytics.

![Shop-Zen Logo](public/shopzen-logo.png)

## 🚀 Features

### 📊 Dashboard Overview
- **Real-time Statistics**: View key metrics including total orders, order items over time, return orders, and fulfilled orders
- **Interactive Charts**: Visual trend analysis with Chart.js integration showing performance indicators
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📋 Order Management
- **Order Creation**: Create new orders with a comprehensive modal form
- **Order Filtering**: Filter orders by status (All, Pending, Success, Unfulfilled)
- **Order Details**: View detailed order information including customer details, payment status, and fulfillment status
- **Order Receipts**: Generate and view order receipts with PDF export capability
- **Bulk Actions**: Select multiple orders for batch operations

### 🎨 User Interface
- **Collapsible Sidebar**: Space-efficient navigation with expandable/collapsible sidebar
- **Modern Design**: Clean, professional interface with Tailwind CSS styling
- **Interactive Elements**: Hover effects, smooth transitions, and responsive interactions
- **Search & Filter**: Advanced search and sorting capabilities for order management

### 📱 Navigation
- **Multi-level Menu**: Hierarchical navigation with dropdown menus
- **Quick Actions**: Easy access to common functions like creating orders and exporting data
- **Breadcrumb Navigation**: Clear navigation path throughout the application

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.1
- **Charts**: Chart.js 4.5.0 with react-chartjs-2 5.3.0
- **PDF Generation**: html2pdf.js 0.10.3
- **Development Tools**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shop-zen-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 Usage Guide

### Dashboard Overview
The main dashboard displays:
- **Statistics Cards**: Key performance indicators with trend charts
- **Recent Orders Table**: List of all orders with filtering options
- **Quick Actions**: Buttons for creating orders, exporting data, and more

### Creating Orders
1. Click the "Create Order" button in the top-right corner
2. Fill in the order details in the modal form:
   - Order number (auto-generated if left empty)
   - Date
   - Customer name
   - Total amount
   - Number of items
   - Payment status
   - Fulfillment status
   - Delivery information
3. Click "Create Order" to save

### Managing Orders
- **Filter Orders**: Use the tab buttons to filter by status
- **View Details**: Click the bill icon to view order receipt
- **Search**: Use the search icon to find specific orders
- **Sort**: Use the sort icon to arrange orders by different criteria
- **Export**: Click the export button to download order data

### Navigation
- **Sidebar Toggle**: Click the arrow button to collapse/expand the sidebar
- **Menu Navigation**: Use the sidebar to navigate between different sections
- **Dropdown Menus**: Click on menu items with arrows to expand sub-menus

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Custom CSS in `src/index.css`
- Component-specific styles in individual component files

### Configuration
- **Vite Configuration**: Modify `vite.config.js` for build settings
- **ESLint Rules**: Update `eslint.config.js` for code quality rules
- **PostCSS**: Configure `postcss.config.js` for CSS processing

## 📁 Project Structure

```
shop-zen-ui/
├── public/                 # Static assets
│   ├── shopzen-logo.png   # Application logo
│   └── AeonikTRIAL-Regular.ttf  # Custom font
├── src/
│   ├── assets/            # SVG icons and images
│   ├── components/        # React components
│   │   ├── CreateOrderModal.jsx    # Order creation modal
│   │   ├── Dashboard.jsx           # Main dashboard component
│   │   ├── Header.jsx              # Header component
│   │   ├── OrderReceiptModal.jsx   # Order receipt modal
│   │   ├── RecentTable.jsx         # Orders table component
│   │   ├── Sidebar.jsx             # Navigation sidebar
│   │   └── StatsGrid.jsx           # Statistics grid
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite build configuration
└── README.md              # Project documentation
```

## 🔧 Development

### Adding New Features
1. Create new components in the `src/components/` directory
2. Add new routes or navigation items in the sidebar
3. Update the main dashboard to include new functionality
4. Add any new dependencies to `package.json`



## 🚀 Deployment

### Production Build
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Options
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Configure GitHub Actions for deployment
- **Traditional Hosting**: Upload the `dist/` folder to your web server


---

**Shop-Zen UI** - Streamlining e-commerce management with modern web technologies.

🔴 **Live Link** :  https://shop-zen-26g5j1gin-vicky-ux1820s-projects.vercel.app/
