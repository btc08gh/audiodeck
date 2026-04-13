import { useQuery } from "@tanstack/react-query";
import type ApiError from "../core/ApiError";
import type Info from "../core/Info";

const fetchInfo = async () => {
  const response = await fetch("/v1/info");

  if (!response.ok) {
    const error = (await response.json()) as ApiError;
    throw new Error(error.error);
  }

  const data = (await response.json()) as Info;
  return data;
};

export default function useInfo() {
  return useQuery({
    queryKey: ["info"],
    queryFn: fetchInfo,
    staleTime: Infinity,
  });
}
