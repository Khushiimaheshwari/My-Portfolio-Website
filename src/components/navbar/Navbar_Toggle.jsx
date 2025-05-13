import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="text-2xl p-3 border border-orange rounded-full text-white"
      onClick={setToggleMenu}
    >
    <RxHamburgerMenu />
    </button>
  );
}; 

export default NavbarToggler;