import ShowAll from '../components/showAll';
import Categories from '../components/categoryButton';
import AddProduct from '../components/addProduct';

function FirstPage() {
  return (
    <div class="header">
      <p>Welcome to Store </p>        
      <ShowAll/>
      <Categories/>
      <AddProduct/>
    </div>
  );
}

export default FirstPage;