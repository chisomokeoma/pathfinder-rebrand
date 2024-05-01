import { useState } from "react";
import { Skeleton, Button } from "@mantine/core";

export default function ListSkeleton() {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" grid gap-7 grid-cols-3">
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
    </div>
  );
}
