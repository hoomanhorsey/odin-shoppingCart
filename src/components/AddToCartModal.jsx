import { Link } from "react-router-dom";

import { cartCalc } from "../code/cartHelpers";

import style from "./AddToCartModal.module.css";

function AddToCartModalSep({ setIsModalOpen, tempQuantity, cart }) {
  return (
    <div className={style.modalOverlay}>
      <div className={style.addToCartModal}>
        <div className={style.modalText}>
          <div className={style.modalItem}>
            {tempQuantity} item(s) added to your cart{" "}
          </div>
          <div className={style.modalItem}>
            {cartCalc(cart)} item(s) in total in your cart{" "}
          </div>
          <div className={`${style.modalItem} btnAddCart`}>
            <Link to="/cart">View Cart </Link>
          </div>
          <button
            className={`${style.modalItem} btnAddCart`}
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export { AddToCartModalSep };
