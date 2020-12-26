import { MultiThumbSlider } from 'components/controls/MultiThumbSlider';
import './CatalogFilter.css';

export const CatalogFilter = ({ filterOptions }) => {
  return (
    <div className="catalog-filter-container">
      <form>
        {/* Single radio */}
        <div>
          <input type="radio"/>
          <span>SALE %</span>
        </div>
        {/* Radio-group */}
        <div>
          <span>Seller</span>
          <div>
            <div>
              <input type="radio" name="seller" />
              <span>Amazon.com</span>
            </div>
            <div>
              <input type="radio" name="seller" />
              <span>Overstock.com</span>
            </div>
            <div>
              <input type="radio" name="seller" />
              <span>eBay.com</span>
            </div>
            <div>
              <input type="radio" name="seller" />
              <span>Walmart.com</span>
            </div>
          </div>
        </div>
        <div>
        Brands
          {/* Search with autocomplete in listbox*/}
          <div>
            <input type="text" placeholder="Search..."/>
          </div>
          {/* Listbox */}
          <div>
            <div>
              <input type="checkbox"/>
              <span>ASUS</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span>Apple</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span>Dell</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span>HP</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span>Lenovo</span>
            </div>
            <div>
              <input type="checkbox"/>
              <span>Xiaomi</span>
            </div>
          </div>
        </div>
        {/* Checkbox with images */}
        <div>
        Color
          <input type="checkbox"/>
          <input type="checkbox"/>
          <input type="checkbox"/>
        </div>
        {/* Range slider */}
        <div>
        Price
          <div>
            <input type="number" placeholder="From"/>
            <input type="number" placeholder="To"/>
            <MultiThumbSlider min={1} max={2000} />
          </div>
        </div>
        {/* Select */}
        <div>
        Processor
          <select name="processor">
            <option value="i3">Intel i3</option>
            <option value="i5">Intel i5</option>
            <option value="i7">Intel i7</option>
            <option value="i9">Intel i9</option>
          </select>
        </div>
        <button>Filter</button>
      </form>
    </div>
  );
};
