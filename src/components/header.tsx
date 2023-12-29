import { useTheme } from "../hooks/theme-hook";

const Header = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme }}>
      Placeholder for alerts
    </div>
  );
};

export default Header;