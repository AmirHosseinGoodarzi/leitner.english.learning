import { useLocation } from "react-router-dom";
import { CategoryEnum } from "~/utils/enums";

const useCategory = () => {
  const { pathname } = useLocation();
  if (pathname === "/today") return CategoryEnum.ONE;
  // if (pathname === "/one") return CategoryEnum.ONE;
  // if (pathname === "/two") return CategoryEnum.TWO;
  // if (pathname === "/four") return CategoryEnum.FOUR;
  // if (pathname === "/eight") return CategoryEnum.EIGHT;
  // if (pathname === "/fifteen") return CategoryEnum.FIFTEEN;
  if (pathname === "/completed") return CategoryEnum.COMPLETED;
  return null;
};

export default useCategory;
