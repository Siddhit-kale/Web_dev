import { ThemeProvider, useTheme } from "./components/ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000"
      }}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#000000",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeToggleButton />
      </Layout>
    </ThemeProvider>
  );
}
