import { useTheme } from "@/context/ThemeContext";
import "./index.css";
import { useEffect } from "react";
import { ModeToggle } from "../mode-toggle";
import { Content } from "../content";
import { useContainer } from "./hooks";

export function Container() {
  const { theme } = useTheme();
  const { loading, loadData, fetchedData } = useContainer();

  useEffect(() => {
    loadData();
  }, []);

  const Loading = () => {
    return <p>Loading data...</p>;
  };

  return (
    <div className="flex flex-col p-4">
      <ModeToggle />
      {loading ? <Loading /> : <Content theme={theme} data={fetchedData} />}
    </div>
  );
}
