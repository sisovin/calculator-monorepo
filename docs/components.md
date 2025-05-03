# Component Documentation

## Header Component
The `Header` component is a reusable component that displays the main header of the application. It includes the application title and navigation links.

### Props
- None

### Example Usage
```jsx
import Header from './Header';

const App = () => (
  <div>
    <Header />
    {/* Other components */}
  </div>
);
```

## Footer Component
The `Footer` component is a reusable component that displays the footer of the application. It includes copyright information and navigation links.

### Props
- None

### Example Usage
```jsx
import Footer from './Footer';

const App = () => (
  <div>
    {/* Other components */}
    <Footer />
  </div>
);
```

## Search Component
The `Search` component is a reusable component that provides a search functionality. It includes an input field and a button to perform the search.

### Props
- None

### Example Usage
```jsx
import Search from './Search';

const App = () => (
  <div>
    <Search />
    {/* Other components */}
  </div>
);
```

## CalculatorCard Component
The `CalculatorCard` component is a reusable component that displays a card with calculator information. It includes a title, description, and an onClick handler.

### Props
- `title` (string): The title of the calculator.
- `description` (string): The description of the calculator.
- `onClick` (function): The function to call when the card is clicked.

### Example Usage
```jsx
import CalculatorCard from './CalculatorCard';

const App = () => (
  <div>
    <CalculatorCard
      title="BMI Calculator"
      description="Calculate your Body Mass Index"
      onClick={() => console.log('BMI Calculator clicked')}
    />
    {/* Other components */}
  </div>
);
```

## CalculatorCategory Component
The `CalculatorCategory` component is a reusable component that displays a category of calculators. It includes a category title and a list of `CalculatorCard` components.

### Props
- `category` (string): The title of the category.
- `calculators` (array): An array of calculator objects, each containing a title, description, and onClick handler.

### Example Usage
```jsx
import CalculatorCategory from './CalculatorCategory';

const App = () => (
  <div>
    <CalculatorCategory
      category="Health Calculators"
      calculators={[
        {
          title: "BMI Calculator",
          description: "Calculate your Body Mass Index",
          onClick: () => console.log('BMI Calculator clicked')
        },
        {
          title: "Calorie Calculator",
          description: "Calculate your daily calorie needs",
          onClick: () => console.log('Calorie Calculator clicked')
        }
      ]}
    />
    {/* Other components */}
  </div>
);
```
