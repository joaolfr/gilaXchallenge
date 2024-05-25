import { useState, useCallback } from "react";
import { UserType } from "./types";
import { api } from "@/api/axios";
import { toast } from "../ui/use-toast";

export const useContainer = () => {
  const [fetchedData, setFechedData] = useState<UserType[]>([
    { id: 0, userId: 0, title: "empty", body: "empty" },
  ]);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(() => {
    setLoading(true);
    api
      .get<UserType[]>("/")
      .then((res) => {
        setLoading(false);
        setFechedData(res.data);
      })
      .catch(() => {
        toast({
          description: "Failed to load data",
        });
      })
      .finally(() => {
        toast({
          description: "Data loaded with success!",
        });
      })!;
  }, []);

  return { fetchedData, loading, loadData };
};
