import { useState } from "react";
import { Skeleton, Button } from "@mantine/core";

export default function RequestSkeleton() {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" flex flex-col gap-7">
      <Skeleton height={300} width="100%" radius="sm" />
      <Skeleton height={300} width="100%" radius="sm" />
      <Skeleton height={300} width="100%" radius="sm" />
    </div>
  );
}
