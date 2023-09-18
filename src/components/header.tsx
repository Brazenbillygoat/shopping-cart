import { useTheme } from "../hooks/theme-hook";

const Header = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme }}>
      Hello and welcome to your own cooking app experience!
    </div>
  );
};

export default Header;